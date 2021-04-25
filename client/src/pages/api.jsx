import Navbar from "../components/navbar";

export default function APIPage() {
  const hostname = "https://yerba-mate-home.herokuapp.com";
  const allEntries = "/api/mate";
  const singleEntry = "/api/mate/{slug}";

  return (
    <>
      <Navbar />
      <div className="nav-offset">
        <div className="article">
          <h2 className="article__title">Yerba Mate API</h2>
          <p className="article__p">
            Our API holds data about yerba mate (Ilex paraguariensis) which is the national drink of
            South America, but is becoming more and more popular all over the world. The API is
            public which means it's freely available for your use. If you wish any field to be added
            that is not currently there, you can propose it in any type of DM's or in GitHub issues.
          </p>
          <h2 className="article__title">How to use it?</h2>
          <p className="article__p">
            The usage of our API is really simple, currently there are only 2 possible endpoints,
            which are either for all of the entries or for one specific entry. To use them simply
            fetch from any of the endpoints which are listed in its section. You shouldn't need any
            CORS setup to use it, it should work from the get go.
          </p>
          <h2 className="article__title">Endpoints</h2>
          <p className="article__p">
            Main endpoint for our API is{" "}
            <a className="link" href="/api/mate">
              {allEntries}
            </a>
            . From on there you can access all of our data. All of the possibilites will be listed
            below.
            <span className="api__endpoint">
              To acces all of the entries:
              <span className="api__endpoint__href">
                GET: {hostname}
                <span className="api__endpoint__href--pathname">{allEntries}</span>
              </span>
            </span>
            <span className="api__endpoint">
              To get one specific entry:
              <span className="api__endpoint__href">
                GET: {hostname}
                <span className="api__endpoint__href--pathname">{singleEntry}</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
