import Navbar from "../components/navbar";

export default function ErrorPage() {
  return(
    <>
      <Navbar />
      <div className="center-div nav-offset">
        <h1 className="error__text">
          <span className="error__text--404">404</span>
          <span className="error__text--title">This page could not be found.</span>
        </h1>
      </div>
    </>
  );
}
