use tui::{
    backend::Backend,
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Modifier, Style},
    text::{Span, Spans},
    widgets::{Block, Borders, List, ListItem},
    Frame,
};

use crate::utils::StatefulList;

pub struct App<'a> {
    // (project_name, description, http-link)
    pub items: StatefulList<(&'a str, &'a str, &'a str)>,
}

impl<'a> App<'a> {
    pub fn new() -> Self {
        Self {
            items: StatefulList::with_items(vec![
                ("project 1", "Lorem", "http://example.com\n"),
                ("project 1", "Lorem", "http://example.com\n"),
                ("project 1", "Lorem", "http://example.com\n"),
            ]),
        }
    }
}

pub fn create_skills<T>(f: &mut Frame<T>, size: Rect, app: &mut App)
where
    T: Backend,
{
    let chunks = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Percentage(100), Constraint::Percentage(50)].as_ref())
        .split(size);

    let items: Vec<ListItem> = app
        .items
        .items
        .iter()
        .map(|(head, body, link)| {
            let lines = vec![
                Spans::from(Span::styled(
                    *head,
                    Style::default()
                        .fg(Color::LightCyan)
                        .add_modifier(Modifier::BOLD),
                )),
                Spans::from(*body),
                Spans::from(Span::styled(
                    String::from("[Link]: ") + *link,
                    Style::default().fg(Color::LightMagenta),
                )),
            ];
            ListItem::new(lines)
        })
        .collect();

    let items = List::new(items)
        .block(Block::default().borders(Borders::ALL).title("List"))
        .highlight_style(
            Style::default()
                .bg(Color::DarkGray)
                .add_modifier(Modifier::BOLD),
        )
        .highlight_symbol(">> ");

    f.render_stateful_widget(items, chunks[0], &mut app.items.state);
}
