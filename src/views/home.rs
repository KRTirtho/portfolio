use tui::{
    backend::Backend,
    layout::{Alignment, Constraint, Direction, Layout, Rect},
    widgets::{Block, BorderType, Borders, Paragraph, Wrap},
    Frame,
};

use super::profile_pic::PROFILE_PIC;

pub fn create_home<'a, T>(f: &mut Frame<T>, size: Rect)
where
    T: Backend,
{
    let container = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Percentage(60), Constraint::Percentage(40)].as_ref())
        .split(size);
    // profile section & about me
    let block = Block::default()
        .borders(Borders::ALL)
        .border_type(BorderType::Rounded)
        .title("Home");

    f.render_widget(block, size);

    let section = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Percentage(50), Constraint::Percentage(50)].as_ref())
        .margin(1)
        .split(container[0]);

    let profile = Paragraph::new(PROFILE_PIC).wrap(Wrap { trim: false });
    f.render_widget(profile, section[0]);

    // centered bunny ==> splitting layout constraint with 33.333333% ratio

    let centered_bunny_section = Layout::default()
        .direction(Direction::Vertical)
        .constraints(
            [
                Constraint::Percentage(10),
                Constraint::Percentage(80),
                Constraint::Percentage(10),
            ]
            .as_ref(),
        )
        .margin(1)
        .split(section[1]);

    let bunny = Paragraph::new("Lorem Bunny ".repeat(50))
        .alignment(Alignment::Center)
        .wrap(Wrap { trim: false });

    f.render_widget(bunny, centered_bunny_section[1]);

    // daily lifestyle & background
    let section = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Percentage(90), Constraint::Percentage(10)])
        .margin(1)
        .split(container[1]);
    let lifestyle = Paragraph::new("Life's sad".repeat(100)).wrap(Wrap { trim: false });

    f.render_widget(lifestyle, section[0]);

    let cp_right = Paragraph::new("Copyright © 2021 KRTirtho. All Rights Reserved.")
        .wrap(Wrap { trim: false }).alignment(Alignment::Center);

    f.render_widget(cp_right, section[1]);
    // copyright claims
}
