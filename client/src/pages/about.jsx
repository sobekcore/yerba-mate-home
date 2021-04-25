import Navbar from "../components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="nav-offset">
        <div className="article">
          <h2 className="article__title">About Us</h2>
          <p className="article__p">
            Hello! We are a web service containing a Yerba Mate Database as well as its own public
            API. It is made with a user-first approach which means we try our best to make it as
            user friendly as possible.
          </p>
          <h2 className="article__title">Contributing</h2>
          <p className="article__p">
            If you'd like to somehow contribute to this project, please check the projects repo on{" "}
            <a
              className="link"
              href="https://github.com/sobekcore/yerba-mate-home"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            . Im sure you'll be usefull to us in any way. Even if you dont have the coding skills
            required, you can add some mate into our YERBAS.md file so we can add them into the
            database.
          </p>
          <h2 className="article__title">Technicalities</h2>
          <p className="article__p">
            Our service is made with various diferent tools. One of them is service' back-end which
            powers the whole site, it is made with Go. The back-end is made in a way to serve our
            front-end, this one is made with React, which is later built into static files. Then we
            must get our data somehow, in this case we are using MySQL database to get the data and
            process it. All of that is hosted on Heroku, which is one of the best ways to host your
            Go web applications.
          </p>
          <h2 className="article__title build">Service is still in build</h2>
        </div>
      </div>
    </>
  );
}
