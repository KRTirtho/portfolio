use tui::text::{Span, Spans};
use tui::widgets::{Block, BorderType, Borders, Gauge};
use tui::{
    backend::Backend,
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Style},
    Frame,
};

pub fn create_skills<T>(f: &mut Frame<T>, size: Rect)
where
    T: Backend,
{
    let skills: Vec<Gauge> = vec![
        // (name, percent-ratio, fg, bg)
        (" JavaScript ", 0.9, Color::Black, Color::Rgb(245, 211, 60)),
        (" Typescript ", 0.85, Color::White, Color::Rgb(47, 116, 192)),
        (
            " NodeJS ",
            0.7,
            Color::Rgb(51, 51, 51),
            Color::Rgb(121, 180, 97),
        ),
        (" React ", 0.8, Color::Cyan, Color::Rgb(51, 51, 51)),
        (" Express ", 0.95, Color::DarkGray, Color::Gray),
        (" NestJS ", 0.65, Color::Black, Color::Rgb(234, 40, 69)),
        (
            " GraphQL ",
            1.0,
            Color::Rgb(224, 0, 151),
            Color::Rgb(51, 51, 51),
        ),
        (" Deno ", 0.5, Color::White, Color::Rgb(51, 51, 51)),
        (" Rust ", 0.4, Color::Black, Color::Rgb(188, 112, 70)),
        (
            " Flutter ",
            0.4,
            Color::Rgb(81, 191, 240),
            Color::Rgb(1, 84, 150),
        ),
        (
            " Python (abandoned) ",
            0.3,
            Color::LightYellow,
            Color::Rgb(1, 84, 150),
        ),
        (" QT ", 0.2, Color::White, Color::Rgb(63, 199, 79)),
        (" NodeGUI ", 0.9, Color::Black, Color::White),
        (
            " React-Nodegui (major contributor) ",
            1.0,
            Color::Black,
            Color::White,
        ),
        (" MongoDB ", 0.7, Color::Rgb(76, 164, 73), Color::White),
        (
            " PostgreSQL ",
            0.6,
            Color::White,
            Color::Rgb(50, 92, 141),
        ),
    ]
    .iter()
    .map(|(name, ratio, fg, bg)| {
        Gauge::default()
            .gauge_style(Style::default().fg(Color::LightBlue).bg(Color::Magenta))
            .block(Block::default().title(Spans::from(Span::styled(
                *name,
                Style::default().fg(*fg).bg(*bg),
            ))))
            .use_unicode(true)
            .ratio(*ratio)
    })
    .collect();
    let block = Block::default()
        .borders(Borders::ALL)
        .border_type(BorderType::Rounded)
        .title("Skills 💪 (I don't know how I ranked them😜🤧)");

    f.render_widget(block, size);
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .margin(2)
        .constraints(
            [
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                Constraint::Percentage(6),
                // for matching the ratio of the last element
                Constraint::Percentage(4),
            ]
            .as_ref(),
        )
        .split(size);

    for (index, skill) in skills.into_iter().enumerate() {
        f.render_widget(skill, chunks[index]);
    }
}
