use tui::{
    backend::Backend,
    layout::{Alignment, Constraint, Direction, Layout, Rect},
    style::{Color, Modifier, Style},
    text::{Span, Spans},
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

    let bunny = Paragraph::new(
      "Hi, I'm KRTirtho (Kingkor Roy Tirtho). A 17 years old programmer. I'm a student of class-X. Though I started learning programming for 2 years, I touched & successfully was using computer from the age of 4. Road-rash was my favorite game back then. I love coding & solving weird problems that no yet solved(not actually😜). I was a FreeCodeCamp student & started from here. Also YouTube, Google, StackOverflow, medium, dev.to etc helped me along the way too. Github is one of my biggest friend too. But I'm a bit alone in the internet"
      )
        .alignment(Alignment::Center)
        .wrap(Wrap { trim: false });

    f.render_widget(bunny, centered_bunny_section[1]);

    // daily lifestyle & background
    let section = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Percentage(90), Constraint::Percentage(10)])
        .margin(1)
        .split(container[1]);
    let lifestyle = Paragraph::new(vec![
      Spans::from(
        Span::styled(
        "> The difference between life  & movie is, you don't know in which role you're in. A hero or a villain",
        Style::default().fg(Color::DarkGray).add_modifier(Modifier::ITALIC),
        )
      ),
      Spans::from(""),
      Spans::from("I believe in that quote. So I'm always beware of it. Life isn't easy & even harder now for pandemic. But this Pandemic was a blessing to me. Because of it I, for the 1st time went to the outside world. Before this, I was limited & stuck inside those inconvenient, outdated text books. Those were good but at this time these are outdated for almost a decade. I learned web-development & then progressed day by day. At a point I even got internet connection (though it was for my online classes of school before I used mobile-data) which led me towards more accessible world. I learned server technologies then Python, Java & Dart-Flutter, Rust and on and on (more on <Skills> tab). Did a whole lot of small or bigger projects (more on <Projects> tab). Got introduced to Linux world. I used more than 15+ OSs(10+ VM & linux-distributions) after starting coding. Windows is good for general user & gamers or non-technical people but it was really hindering my productivity. So I made the switch to Fedora@31-linux which was big mistake. Then Ubuntu, then Windows then KDE Neon. Last 2-3 months I went deep in desktop applications too. Currently I'm learning Rust & worried about the usage of it😅"),
      Spans::from(""),
      Spans::from(
        "I'm a routinized person. I wake up at 8 AM, start coding at 9 AM. Take a break at 2 PM. Start again in 4 PM, end it before 7 PM & 8-10 PM study & then free time. Favorite code editor is, you guessed, its Visual Studio Code"
      ),
      Spans::from(""),
      Spans::from(
        "I use Arch, btw... Manjaro is Arch too🙃"
      )
    ])
    .wrap(Wrap { trim: false });

    f.render_widget(lifestyle, section[0]);

    let cp_right = Paragraph::new("Copyright © 2021 KRTirtho. All Rights Reserved.")
        .wrap(Wrap { trim: false })
        .alignment(Alignment::Center);

    f.render_widget(cp_right, section[1]);
    // copyright claims
}
