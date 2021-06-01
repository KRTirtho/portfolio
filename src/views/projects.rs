use tui::{Frame, backend::Backend, layout::{Constraint, Direction, Layout, Rect}, style::{Color, Modifier, Style}, text::{Span, Spans}, widgets::{Block, BorderType, Borders, List, ListItem, Paragraph, Wrap}};

use crate::utils::StatefulList;

pub struct App<'a> {
    // (project_name, description, http-link)
    pub items: StatefulList<(&'a str, &'a str, &'a str)>,
}

impl<'a> App<'a> {
    pub fn new() -> Self {
        Self {
            items: StatefulList::with_items(vec![
                (
                    "Shopler 🦕",
                    "Shopler The Dino Shopping Mall\nA fullstack MERN e-commerce web-app",
                    "http://shopler.herokuapp.com\n",
                ),
                ("Spotube 🎵", "A lightweight free Spotify 🎧 desktop-client 🖥 which handles playback manually, streams music using Youtube & no Spotify premium account is needed 😱", "https://github.com/KRTirtho/spotube\n"),
                ("Drum Machine 🥁", "A Drum Machine made with HTML+CSS+JS", "https://krtirtho.github.io/drum-machine\n"),
                ("js-calculator 🖩", "A simple Calculator made with Javascript & React", "https://krtirtho.github.io/calculator\n"),
                ("@tiny-css/compiler ⚙", "Alternative to Purge-CSS. Removes unnecessary css style declarations from HTML files", "https://github.com/tiny-css/compiler\n"),
                ("Facebook-ui-clone 🍃", "A minimal facebook ui clone written with Dart & designed with Flutter", "https://github.com/KRTirtho/facebook_ui_clone\n"),
                ("issue-tracker 🛤", "An issue-tracker (github) micro-service built with Nestjs🐺, typeorm, PostgreSQL🐘, docker🐋", "https://github.com/KRTirtho/nest-issue-tracker\n"),
                ("pomodoro-clock ⏱", "A Pomodoro Clock implementation with ReactJS", "https://krtirtho.github.io/pomodoro-clock/\n"),
                (
                    "simpson-quote-generator 🍩",
                    "A quote generator made with React using the simpson-quote API",
                    "https://krtirtho.github.io/simpson-quote/\n",
                ),
            ]),
        }
    }

    pub fn new_current_working_projects() -> Self {
        Self{
        items: StatefulList::with_items(vec![
          (
            "VESchool (Virtual Electronic School)",
            "VESchool is a platform which intends to bring back the old & gold education, fun & amusement of Schools which was a normal thing back before The Pandemic. VESchool gives the total power to each individual school & only holds the back/management",
            "https://github.com/KRTirtho/veschool\n",
          ),
          (
            "Flutter Theme Engine (not yet started)",
            "A theme engine for flutter which will make flutter apps more coherent to specific platforms & will add the support to create custom themes using simple css/json files",
            "https://flutter.dev\n"
          ),
        ])
      }
    }
}

pub fn create_projects<T>(f: &mut Frame<T>, size: Rect, app: &mut App, cwp_app: &mut App)
where
    T: Backend,
{
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Percentage(85), Constraint::Percentage(15)].as_ref())
        .split(size);

    let block = Block::default();
    f.render_widget(block, chunks[0]);

    let inner_chunks = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Percentage(60), Constraint::Percentage(40)].as_ref())
        .split(chunks[0]);

    // projects
    let items: Vec<ListItem> = app
        .items
        .items
        .iter()
        .map(|(head, _, link)| {
            let lines = vec![
                Spans::from(Span::styled(
                    *head,
                    Style::default()
                        .fg(Color::LightCyan)
                        .add_modifier(Modifier::BOLD),
                )),
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
                .border_type(BorderType::Rounded)
                .title("Projects (finished), unfinished 100+😑😒"),
        )
        .highlight_style(
            Style::default()
                .bg(Color::DarkGray)
                .add_modifier(Modifier::BOLD),
        )
        .highlight_symbol(">> ");

    f.render_stateful_widget(items, inner_chunks[0], &mut app.items.state);

    // currently working projects
    let items: Vec<ListItem> = cwp_app
        .items
        .items
        .iter()
        .map(|(head, _, link)| {
            let lines = vec![
                Spans::from(Span::styled(
                    *head,
                    Style::default()
                        .fg(Color::LightGreen)
                        .add_modifier(Modifier::BOLD),
                )),
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
                .title("Currently working projects")
                .border_type(BorderType::Rounded),
        )
        .highlight_style(
            Style::default()
                .bg(Color::DarkGray)
                .add_modifier(Modifier::BOLD),
        )
        .highlight_symbol(">> ");

    f.render_stateful_widget(items, inner_chunks[1], &mut cwp_app.items.state);

    // descriptions
    let block = Block::default().title("Descriptions").borders(Borders::ALL).border_type(BorderType::Rounded);

    let project_selected = app.items.state.selected();
    let cwp_selected = cwp_app.items.state.selected();

    let mut desc = "";

    if let Some(mut index) = project_selected {
        if index > app.items.items.len() - 1 {
            index = 0
        }
        desc = app.items.items[index].1;
    } else if let Some(mut index) = cwp_selected {
        if index > cwp_app.items.items.len() - 1 {
            index = 0
        }
        desc = cwp_app.items.items[index].1;
    }
    let paragraph = Paragraph::new(desc).block(block).wrap(Wrap { trim: false });

    f.render_widget(paragraph, chunks[1]);
}
