import Icons from "../components/icons";

export default function HomePage() {
  return (
    <div id="wrapper">
      <h1 id="title">YERBA MATE HOME</h1>
      <header className="home">
        <section className="home__fragment">
          <div className="home__fragment__bg about"></div>
          <a href="/about" className="home__fragment__link">
            <div className="home__fragment__text">
              <h2 className="home__fragment__text--title">
                <Icons style="about" /> About
              </h2>
              <p>
                This is page about us, its a help for you to get to know us a little better. Oh and
                a small contribution guide if you'd like to create the service with us, everyone is
                welcomed!
              </p>
            </div>
          </a>
        </section>
        <section className="home__fragment">
          <div className="home__fragment__bg database"></div>
          <a href="/mate" className="home__fragment__link">
            <div className="home__fragment__text">
              <h2 className="home__fragment__text--title">
                <Icons style="mate" /> Database
              </h2>
              <p>
                Here you can find our database which contains all the mate data we have collected so
                far. It's an example usage of our API to get data and process it in an eye pleasing
                way.
              </p>
            </div>
          </a>
        </section>
        <section className="home__fragment">
          <div className="home__fragment__bg api"></div>
          <a href="/api" className="home__fragment__link">
            <div className="home__fragment__text">
              <h2 className="home__fragment__text--title">
                <Icons style="api" /> API
              </h2>
              <p>
                Under this subpage you can find our API which powers our database. It's a public
                API, which means you can freely use it for any of your purposes. Have fun using!
              </p>
            </div>
          </a>
        </section>
      </header>
    </div>
  );
}
