use tui::{
    backend::Backend,
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Modifier, Style},
    text::{Span, Spans},
    widgets::{Block, BorderType, Borders, Paragraph, Wrap},
    Frame,
};

pub fn create_plans<T>(f: &mut Frame<T>, size: Rect)
where
    T: Backend,
{
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Percentage(60), Constraint::Percentage(40)].as_ref())
        .split(size);

    let inner_chunks = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Percentage(50), Constraint::Percentage(50)].as_ref())
        .split(chunks[0]);

    fn header<'a>(title: &'a str) -> Span<'a> {
        Span::styled(
            title,
            Style::default()
                .add_modifier(Modifier::BOLD)
                .fg(Color::LightYellow),
        )
    }

    let future_plans = Paragraph::new(vec![
        Spans::from(vec![
          header("• A portfolio (web😅). "),
          Span::from("A perfect portfolio for business considerations")
          ]),
        Spans::from(vec![
            header("• notion-desktop with flutter. "),
            Span::from("Since notion uses electron, electron is heavy & they don't provide a linux version of it, I'm planning on creating a flutter based desktop app which will be lighter & more efficient. It will use the newly released official notion-api")
          ]),
        Spans::from(vec![
          header("• Desktop UI framework for Deno. "),
          Span::from("I don't have anything planned on how I'd do this but I'm really excited about it. But its sure I'll use custom cross-platform widgets with css design & React rendering support")
        ]),
        Spans::from(vec![
          header("• Faster Typescript type-checker with rust. "),
          Span::from("tsc is really slow (takes ~10s to compile for medium size projects). I'm planning on a more efficient, lightweight, faster, safe type-checker with rust. Though SWC (Deno's typescript compiler which uses Rust too) already is trying making one, I might end up contributing there")
        ])
    ])
    .block(Block::default().title("Future Plans").borders(Borders::ALL).border_type(BorderType::Rounded))
    .wrap(Wrap{trim: false});
    f.render_widget(future_plans, inner_chunks[0]);

    let dreams = Paragraph::new(vec![
      Spans::from(vec![
        header("• Creating an OS. "),
        Span::from("Operating system is really interesting to me. I find myself most curious while knowing or learning something about OS. Creating an OS is the biggest experience I want to have. I hope I'd make a good one☺")
      ]),
      Spans::from(vec![
        header("• Deleting Java (kidding😜). "),
        Span::from("Java is frustrating & the secret is, I know Java but never use it. Java a punishment, no one invites punishment. So why should I?! But I know its importance. Though its the worst one, its everywhere. I think thats a limitation of the world. I hope one day there will be no enterprise/home/handheld machine running Java. Just replace it with Go for backend, Dart for frontend & Kotlin for anything else, right?🙃😆")
      ]),
      Spans::from(vec![
        header("• A RTX 3090ti with a Ryzen 9 5950X pc. "),
        Span::from("Most of the time I'm limited to my PC's performance. Its hard for my PC to run a React dev server & an API at once. Even making this tui-portfolio with Rust was a hassle. It stutters, lags & hangs. VSCode crashes more than 10 times a day. And Why wouldn't it happen. What can a DDR3-1333Mhz 4GB RAM & a Intel core i3-3220 can do! I hope I'd one day replace them with a better one. But these are those tools which helped me most in learning programming. I'd keep them to me always🥰💝")
      ])
    ])
    .block(
        Block::default()
            .title("Biggest Dreams")
            .borders(Borders::ALL)
            .border_type(BorderType::Rounded),
    )
    .wrap(Wrap{trim: false});

    f.render_widget(dreams, inner_chunks[1]);

    let wanna_be_interests = Paragraph::new(vec![
        Spans::from(header("What I want to become?")),
        Spans::from("  • Systems Programmer"),
        Spans::from("  • Frontend/Backend/Fullstack Engineer"),
        Spans::from("  • Astronomer  - I'm addicted to space science/astronomy"),
        Spans::from("  • Singer -my near persons say I've (or had) a sweet & clean voice"),
        Spans::from("  • Football Player - Don't challenge me in this game"),
        Spans::from(header("In which things I'm Interested?")),
        Spans::from("  • Football - My most favorite game"),
        Spans::from("  • Euro Truck Simulator 2 - I like travelling around the world in wheels & this game offers full of it"),
        Spans::from("  • Music Making - I love making those smooth beats"),
        Spans::from("  • Astronomy/Space Science - Childhood interest"),
        Spans::from("  • Common but unsolved mathematical problems - Great way to pass time😁"),
        Spans::from("  • Doraemon, Sinchan, DragonBall - Don't tell anyone🤫"),
    ])
    .block(
        Block::default()
            .title("Desired occupation & Interests")
            .borders(Borders::ALL)
            .border_type(BorderType::Rounded),
    )
    .wrap(Wrap { trim: false });

    f.render_widget(wanna_be_interests, chunks[1]);
}
