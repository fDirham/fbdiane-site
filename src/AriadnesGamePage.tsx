import "./AriadnesGamePage.css";

const GET_NOTIFIED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfdHojrnOG4evhgf3NyVDXZcSza8mUY4vk0uetv00UhamCvwg/viewform?usp=publish-editor";
const LINKTREE_URL = "https://linktr.ee/fbdiane";
const PINTEREST_URL = "https://www.pinterest.com/team2120/ariadnes-game/";
const ELLIPSUS_URL =
  "https://ellipsus.com/read/4DbfK3SXgaezoJEooDMbvl/Ariadnes-Game-Public-Sample";

function AriadnesGamePage() {
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
            She participates in a mysterious game to test into war-college and
            forces a handsome lowborn to be her partner.
          </p>
          <p>A charming, talented lowborn; who's secretly a dangerous rebel.</p>
          <p>
            Unbeknownst to both of them, the game simulates fifty years of their
            lives as they're transported to a foreign world. A world filled with
            barbarians, monsters, and gods.
          </p>
        </div>

        <a
          className="notify-link"
          href={GET_NOTIFIED_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GET NOTIFIED
        </a>
      </section>

      <footer className="site-footer">
        <nav className="social-links" aria-label="Social links">
          <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">
            pinterest
          </a>
          <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer">
            @fbdiane
          </a>
          <a href={ELLIPSUS_URL} target="_blank" rel="noopener noreferrer">
            ellipsus
          </a>
        </nav>
      </footer>
    </main>
  );
}

export default AriadnesGamePage;
