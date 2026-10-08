import "./App.css";

function App() {
  return (
    <main className="landing-page">
      <section className="book-introduction" aria-labelledby="book-title">
        <figure className="hero-artwork">
          <img
            src="/hero.png"
            alt="Ariadne giving Theseus the thread to escape the labyrinth"
          />
          <figcaption>
            Pelagio Palagi, Ariadne Giving Theseus the Thread to Escape the
            Labyrinth (c. 1814).
          </figcaption>
        </figure>

        <h1 id="book-title">
          ARIADNE'S
          <br />
          GAME
        </h1>

        <div className="book-description">
          <p>
            An arrogant twenty-year-old princess dreams of dismantling democracy
            and becoming queen.
          </p>
          <p>
            She participates in a mind-bending game to test into war-college,
            partnering with a charming lowborn who is secretly an anarchist
            rebel.
          </p>
        </div>

        <a className="notify-link" href="#notify">
          GET NOTIFIED
        </a>
      </section>

      <footer className="site-footer">
        <nav className="social-links" aria-label="Social links">
          <a href="#pinterest">pinterest</a>
          <a href="#instagram">@fbdiane</a>
          <a href="#writing">writing</a>
        </nav>
      </footer>
    </main>
  );
}

export default App;
