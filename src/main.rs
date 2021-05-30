mod utils;
mod views {
    pub mod home;
    pub mod profile_pic;
    pub mod skills;
}

use crate::{
    utils::{
        events::{Event, Events},
        TabsState,
    },
    views::{
        home::create_home,
        skills::{create_skills, App as ListApp},
    },
};
use std::io;
use termion::{event::Key, input::MouseTerminal, raw::IntoRawMode, screen::AlternateScreen};
use tui::{
    backend::TermionBackend,
    layout::{Constraint, Direction, Layout},
    style::Modifier,
    style::{Color, Style},
    text::{Span, Spans},
    widgets::Tabs,
    widgets::{Block, Borders},
    Terminal,
};

struct App<'a> {
    tabs: TabsState<'a>,
}

fn main() -> Result<(), io::Error> {
    let stdout = io::stdout().into_raw_mode()?;
    let stdout = MouseTerminal::from(stdout);
    let stdout = AlternateScreen::from(stdout);
    let backend = TermionBackend::new(stdout);
    let mut terminal = Terminal::new(backend)?;
    let event = Events::new();

    let mut app = App {
        tabs: TabsState::new(vec!["Home", "Skills", "Plans"]),
    };

    let mut list_app = ListApp::new();

    terminal.clear()?;
    loop {
        terminal.draw(|f| {
            let size = f.size();
            let chunks = Layout::default()
                .direction(Direction::Vertical)
                .margin(2)
                .constraints([Constraint::Length(3), Constraint::Min(0)].as_ref())
                .split(size);

            let block = Block::default();
            f.render_widget(block, size);

            let titles: Vec<Spans> = app
                .tabs
                .titles
                .iter()
                .map(|tab| {
                    let (first, rest) = tab.split_at(1);
                    Spans::from(vec![
                        Span::styled(first, Style::default().fg(Color::Yellow)),
                        Span::styled(rest, Style::default().fg(Color::Green)),
                    ])
                })
                .collect();

            let tabs = Tabs::new(titles)
                .block(Block::default().borders(Borders::ALL).title("KR Tirtho"))
                .select(app.tabs.index)
                .style(Style::default().fg(Color::Cyan))
                .highlight_style(
                    Style::default()
                        .add_modifier(Modifier::BOLD)
                        .bg(Color::White)
                        .fg(Color::Blue),
                );
            f.render_widget(tabs, chunks[0]);

            match app.tabs.index {
                0 => create_home(f, chunks[1]),
                1 => create_skills(f, chunks[1], &mut list_app),
                2 => create_home(f, chunks[1]),
                _ => unreachable!(),
            };
        })?;

        match event.next() {
            Ok(Event::Input(key)) => match key {
                Key::Char('q') | Key::Ctrl('c') => break,
                Key::Char('\t') => app.tabs.next(),
                Key::BackTab => app.tabs.previous(),
                Key::Down => list_app.items.next(),
                Key::Up => list_app.items.previous(),
                _ => {}
            },
            _ => {}
        }
    }
    Ok(())
}
