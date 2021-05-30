use std::io;
use std::sync::Arc;
use std::sync::{
    atomic::{AtomicBool, Ordering},
    mpsc,
};
use std::thread;
use std::time::Duration;

use termion::{event::Key, input::TermRead};

pub enum Event<I> {
    Input(I),
    Tick,
}

pub struct Events {
    rx: mpsc::Receiver<Event<Key>>,
    pub input_handle: thread::JoinHandle<()>,
    pub ignore_exit_key: Arc<AtomicBool>,
    pub tick_handle: thread::JoinHandle<()>,
}

#[derive(Debug, Clone, Copy)]
pub struct Config {
    pub exit_key: Key,
    pub tick_rate: Duration,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            exit_key: Key::Char('q'),
            tick_rate: Duration::from_millis(250),
        }
    }
}


impl Events{
  pub fn new() -> Self{
    Self::with_config(Config::default())
  }

  pub fn with_config(config: Config)->Self{
    let (tx, rx) = mpsc::channel();
    let ignore_exit_key = Arc::new(AtomicBool::new(false));
    let input_handle = {
      let tx = tx.clone();
      let ignore_exit_key = ignore_exit_key.clone();
      thread::spawn(move | |{
        let stdin = io::stdin();
        for event in stdin.keys(){
        if let Ok(key) = event {
          if let Err(err) = tx.send(Event::Input(key)) {
            eprintln!("error: {}", err);
            return;
          }

          if !ignore_exit_key.load(Ordering::Relaxed) && key == config.exit_key{
            return;
          }
        }
        }
      })
    };

    let tick_handle = {
      thread::spawn(move|| loop{
        if tx.send(Event::Tick).is_err(){
          break;
        }
        thread::sleep(config.tick_rate);
      })
    };

    Self{
      ignore_exit_key,
      input_handle,
      rx,
      tick_handle
    }
  }

  pub fn next(&self) -> Result<Event<Key>, mpsc::RecvError>{
    self.rx.recv()
  }

  // pub fn disable_exit_key(&mut self){
  //   self.ignore_exit_key.store(true, Ordering::Relaxed);
  // }

  // pub fn enable_exit_key(&mut self){
  //   self.ignore_exit_key.store(false, Ordering::Relaxed);
  // }
}