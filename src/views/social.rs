use tui::{
    backend::Backend,
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Modifier, Style},
    text::{Span, Spans},
    widgets::{Block, List, ListItem, Paragraph, Wrap},
    Frame,
};

use crate::utils::StatefulList;

pub struct SocialApp<'a> {
    // (icon, link)
    pub links: StatefulList<(&'a str, &'a str)>,
}

impl<'a> SocialApp<'a> {
    pub fn new() -> Self {
        Self {
            links: StatefulList::with_items(vec![
                ("Twitter 🐦: ", "https://twitter.com/@krtirtho"),
                ("Github 🐙🐱: ", "https://github.com/KRTirtho"),
                (
                    "LinkedIn: ",
                    "https://www.linkedin.com/in/kr-tirtho-810b951b4/",
                ),
                ("Medium ⚫⚪: ", "https://medium.com/@krtirtho"),
                ("Hashnode 💠: ", "https://hashnode.com/@krtirtho"),
            ]),
        }
    }
}

pub fn create_social<T>(f: &mut Frame<T>, size: Rect, app: &mut SocialApp)
where
    T: Backend,
{
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints(
            [
                Constraint::Percentage(40),
                Constraint::Percentage(2),
                Constraint::Percentage(58),
            ]
            .as_ref(),
        )
        .margin(5)
        .split(size);

    let info = Paragraph::new(
      vec![
        Spans::from("Connect with me in any platform. Follow me in any platform I'll follow back🤗. My DMs are also open always. You can also contribute in some of my github projects if you want to. Lets just be friends CODING FRIENDS"),
        Spans::from(""),
        Spans::from("F.R.I.E.N.D ~ full form"),
        Spans::from("F=few"),
        Spans::from("R=relation"),
        Spans::from("I=in"),
        Spans::from("E=earth"),
        Spans::from("N=never"),
        Spans::from("D=dies"),
        ]
      )
      .wrap(Wrap{trim: false});

    f.render_widget(info, chunks[0]);

    let items: Vec<ListItem> = app
        .links
        .items
        .iter()
        .map(|(head, link)| {
            let lines = vec![Spans::from(vec![
                Span::styled(
                    *head,
                    Style::default()
                        .fg(Color::LightCyan)
                        .add_modifier(Modifier::BOLD),
                ),
                Span::styled(
                    *link,
                    Style::default()
                        .fg(Color::Magenta)
                        .add_modifier(Modifier::BOLD),
                ),
            ])];
            ListItem::new(lines)
        })
        .collect();

    let items = List::new(items)
        .highlight_style(
            Style::default()
                .bg(Color::DarkGray)
                .add_modifier(Modifier::BOLD),
        )
        .block(Block::default().title("Links:"));

    f.render_stateful_widget(items, chunks[2], &mut app.links.state);
}
