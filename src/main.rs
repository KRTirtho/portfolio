mod utils;
mod views {
    pub mod achievements;
    pub mod home;
    pub mod plans;
    pub mod profile_pic;
    pub mod projects;
    pub mod skills;
}

use crate::{
    utils::{
        events::{Event, Events},
        TabsState,
    },
    views::{
        achievements::{create_achievements, AchievementsApp},
        home::create_home,
        plans::create_plans,
        projects::{create_projects, App as ListApp},
        skills::create_skills,
    },
};
use open;
use std::io;
use termion::{event::Key, input::MouseTerminal, raw::IntoRawMode, screen::AlternateScreen};
use tui::{
    backend::TermionBackend,
    layout::{Alignment, Constraint, Direction, Layout},
    style::Modifier,
    style::{Color, Style},
    text::{Span, Spans},
    widgets::{Block, Borders, Wrap},
    widgets::{Paragraph, Tabs},
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
        tabs: TabsState::new(vec!["Home", "Projects", "Skills", "Achievements", "Plans"]),
    };

    let mut projects_app = ListApp::new();
    let mut cwp_app = ListApp::new_current_working_projects();
    let mut achievements_app = AchievementsApp::new();

    terminal.clear()?;
    loop {
        terminal.draw(|f| {
            let size = f.size();
            let chunks = Layout::default()
                .direction(Direction::Vertical)
                .constraints(
                    [
                        Constraint::Percentage(7),
                        Constraint::Percentage(87),
                        Constraint::Percentage(5),
                    ]
                    .as_ref(),
                )
                .split(size);

            let block = Block::default();
            f.render_widget(block, size);
            // tab titles
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

            // individual pages for each tabs
            match app.tabs.index {
                0 => create_home(f, chunks[1]),
                1 => create_projects(f, chunks[1], &mut projects_app, &mut cwp_app),
                2 => create_skills(f, chunks[1]),
                3 => create_achievements(f, chunks[1], &mut achievements_app),
                4 => create_plans(f, chunks[1]),
                _ => unreachable!(),
            };

            fn help_btn<'a>(content: &'a str, bg: Color) -> Span<'a> {
                Span::styled(content, Style::default().fg(Color::White).bg(bg))
            }

            // help things
            let helps = Paragraph::new(Spans::from(vec![
                help_btn(" Tab ↹ Next tab ", Color::Magenta),
                help_btn(" Shift+Tab ↹ Previous tab ", Color::LightBlue),
                help_btn(" UP ↑ previous item ", Color::DarkGray),
                help_btn(" DOWN ↓ next item ", Color::Green),
                help_btn(" RIGHT → next list ", Color::LightRed),
                help_btn(" Left ← previous list ", Color::LightBlue),
                help_btn(" Enter ⏎ open link ", Color::Cyan),
                help_btn(" q/Ctrl+C exit ", Color::Red),
            ]))
            .alignment(Alignment::Center)
            .wrap(Wrap { trim: false });

            f.render_widget(helps, chunks[2]);
        })?;

        // handling inputs/interactions
        match event.next() {
            Ok(Event::Input(key)) => match key {
                Key::Char('q') | Key::Ctrl('c') => break,
                Key::Char('\t') => app.tabs.next(),
                Key::BackTab => app.tabs.previous(),
                Key::Down => match app.tabs.index {
                    1 => {
                        let selected = projects_app.items.state.selected();
                        if selected.is_some()
                            || (cwp_app.items.state.selected().is_none() && selected.is_none())
                        {
                            projects_app.items.next();
                        } else {
                            cwp_app.items.next();
                        }
                    }
                    3 => achievements_app.items.next(),
                    _ => {}
                },
                Key::Up => match app.tabs.index {
                    1 => {
                        let selected = projects_app.items.state.selected();
                        if selected.is_some()
                            || (cwp_app.items.state.selected().is_none() && selected.is_none())
                        {
                            projects_app.items.previous();
                        } else {
                            cwp_app.items.previous();
                        }
                    }
                    3 => achievements_app.items.previous(),
                    _ => {}
                },
                Key::Right => {
                    if projects_app.items.state.selected().is_some() {
                        projects_app.items.unselect();
                        cwp_app.items.state.select(Some(0));
                    }
                }
                Key::Left => {
                    if cwp_app.items.state.selected().is_some() {
                        cwp_app.items.unselect();
                        projects_app.items.state.select(Some(0));
                    }
                }
                Key::Char('\n') => match app.tabs.index {
                    1 => {
                        let project_selected = projects_app.items.state.selected();
                        let cwp_selected = cwp_app.items.state.selected();
                        let focused_item = if projects_app.items.state.selected().is_some() {
                            &projects_app.items.items
                        } else {
                            &cwp_app.items.items
                        };

                        if let Some(index) = project_selected {
                            open::that(focused_item[index].2)?;
                        } else if let Some(index) = cwp_selected {
                            open::that(focused_item[index].2)?;
                        }
                    }
                    3 => {
                        let focused_achievement_item = achievements_app.items.state.selected();
                        if let Some(index) = focused_achievement_item {
                            open::that(achievements_app.items.items[index].2)?;
                        }
                    }
                    _ => {}
                },
                _ => {}
            },
            _ => {}
        }
    }
    Ok(())
}
