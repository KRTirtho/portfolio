use tui::{
    backend::Backend,
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Modifier, Style},
    text::{Span, Spans},
    widgets::{Block, Borders, List, ListItem},
    Frame,
};

use crate::utils::StatefulList;

pub struct AchievementsApp<'a> {
    // name , or, link
    pub items: StatefulList<(&'a str, &'a str, &'a str)>,
}

impl<'a> AchievementsApp<'a> {
    pub fn new() -> Self {
        Self {
            items: StatefulList::with_items(vec![
              (
                "Responsive Web Design",
                "FreeCodeCamp.org",
                "https://www.freecodecamp.org/certification/krtirtho/responsive-web-design",
              ),
              (
                "JavaScript Algorithms and Data Structures",
                "FreeCodeCamp.org",
                "https://www.freecodecamp.org/certification/krtirtho/javascript-algorithms-and-data-structures"
              ),
              ( "Front End Libraries",
                "FreeCodeCamp.org",
                "https://www.freecodecamp.org/certification/krtirtho/front-end-libraries"
              ),
              (
                "APIs and Micro-services",
                "FreeCodeCamp.org",
                "https://www.freecodecamp.org/certification/krtirtho/apis-and-microservices"
              ),
              (
                "HTML Fundamentals",
                "SoloLearn.com",
                "https://www.sololearn.com/Certificate/1014-18296227/jpg/"
              ),
              (
                "CSS Fundamentals",
                "SoloLearn.com",
                "https://www.sololearn.com/Certificate/1023-18296227/jpg/"
              ),
              (
                "Java",
                "SoloLearn.com",
                "https://www.sololearn.com/Certificate/1068-18296227/jpg/"
              ),
              (
                "React + Redux",
                "SoloLearn.com",
                "https://www.sololearn.com/Certificate/1097-18296227/jpg/"
              )
            ]),
        }
    }
}

pub fn create_achievements<T>(f: &mut Frame<T>, size: Rect, app: &mut AchievementsApp)
where
    T: Backend,
{
    let chunks = Layout::default()
        .direction(Direction::Horizontal)
        .constraints(
            [
                Constraint::Percentage(5),
                Constraint::Percentage(90),
                Constraint::Percentage(5),
            ]
            .as_ref(),
        )
        .split(size);

    let items: Vec<ListItem> = app
        .items
        .items
        .iter()
        .map(|(name, org, link)| {
            let lines = vec![
                Spans::from(Span::styled(
                    *name,
                    Style::default()
                        .fg(Color::LightCyan)
                        .add_modifier(Modifier::BOLD),
                )),
                Spans::from(["[Issuer]:", org].join(" ")),
                Spans::from(Span::styled(
                    String::from("[Link]: ") + *link,
                    Style::default().fg(Color::LightMagenta),
                )),
            ];
            ListItem::new(lines)
        })
        .collect();

    let items = List::new(items)
        .block(
            Block::default()
                .borders(Borders::ALL)
                .title("Achievements (only 8 certifications but youtube tutorials 1000+ 🤫)"),
        )
        .highlight_style(
            Style::default()
                .bg(Color::DarkGray)
                .add_modifier(Modifier::BOLD),
        )
        .highlight_symbol(">> ");

    f.render_stateful_widget(items, chunks[1], &mut app.items.state);
}
