use tui::{
    backend::Backend,
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Style},
    Frame,
};
use tui::widgets::{Block, BorderType, Borders, Gauge};

pub fn create_skills<T>(f: &mut Frame<T>, size: Rect)
where
    T: Backend,
{
    let skills: Vec<Gauge> = vec![
        (
            "JavaScript",
            0.9,
            Color::Rgb(245, 211, 60),
            Color::Rgb(207, 180, 48),
        ),
        ("Typescript", 0.85, Color::Rgb(47, 116, 192), Color::White),
        (
            "NodeJS",
            0.7,
            Color::Rgb(109, 181, 78),
            Color::Rgb(60, 130, 59),
        ),
        ("React", 0.8, Color::Cyan, Color::LightCyan),
        ("Express", 0.95, Color::DarkGray, Color::Gray),
        ("NestJS", 0.65, Color::Red, Color::LightRed),
        ("GraphQL", 1.0, Color::Magenta, Color::LightMagenta),
        ("Deno", 0.5, Color::White, Color::Rgb(51, 51, 51)),
        ("Rust", 0.4, Color::Rgb(239, 74, 0), Color::Rgb(231, 133, 0)),
        (
            "Flutter",
            0.4,
            Color::Rgb(81, 191, 240),
            Color::Rgb(1, 84, 150),
        ),
        (
            "Python (abandoned)",
            0.3,
            Color::Rgb(1, 84, 150),
            Color::LightYellow,
        ),
        ("QT", 0.2, Color::LightGreen, Color::Green),
        ("NodeGUI", 0.9, Color::White, Color::DarkGray),
        (
            "React-Nodegui (major contributor)",
            1.0,
            Color::White,
            Color::DarkGray,
        ),
        ("MongoDB", 0.7, Color::LightGreen, Color::Green),
        (
            "PostgreSQL",
            0.6,
            Color::Rgb(50, 92, 141),
            Color::Rgb(29, 125, 242),
        ),
    ]
    .iter()
    .map(|(name, ratio, fg, bg)| {
        Gauge::default()
            .gauge_style(Style::default().fg(*fg).bg(*bg))
            .block(Block::default().title(*name))
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
