import { useState, useEffect } from "react";
import Icons from "./icons";

export default function Navbar() {
  const homeClass = location.pathname === "/" ? " active" : "";
  const aboutClass = location.pathname.match(/^\/about/) ? " active" : "";
  const databaseClass = location.pathname.match(/^\/mate/) ? " active" : "";
  const apiClass = location.pathname.match(/^\/api/) ? " active" : "";

  const [state, setState] = useState(0);

  function toggle() {
    setState(!state);
  }

  // Run mobile check once
  checkMobile();
  function checkMobile() {
    useEffect(() => {
      if (window.innerWidth <= 699) {
        // Disable transition on load
        let nav = document.getElementsByClassName("navbar");
        nav[0].style.transition = "none";
        setState(!state);

        // Set back transition after 100ms
        setTimeout(() => {
          nav[0].style.transition = "0.25s ease-in-out";
        }, 100);
      }
    }, []);
  }

  return (
    <>
      <div className={state ? "navbar hide" : "navbar"}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <a className={"navbar__item__link" + homeClass} href="/">
              <Icons style={"home"} />
              <h3 className="navbar__item__link__title">
                <span className="navbar__item__link__title--margin">Home</span>
              </h3>
            </a>
          </li>
          <li className="navbar__item">
            <a className={"navbar__item__link" + aboutClass} href="/about">
              <Icons style={"about"} />
              <h3 className="navbar__item__link__title">
                <span className="navbar__item__link__title--margin">About</span>
              </h3>
            </a>
          </li>
          <li className="navbar__item">
            <a className={"navbar__item__link" + databaseClass} href="/mate">
              <Icons style={"mate"} />
              <h3 className="navbar__item__link__title">
                <span className="navbar__item__link__title--margin">Database</span>
              </h3>
            </a>
          </li>
          <li className="navbar__item">
            <a className={"navbar__item__link" + apiClass} href="/api">
              <Icons style={"api"} />
              <h3 className="navbar__item__link__title">
                <span className="navbar__item__link__title--margin">API</span>
              </h3>
            </a>
          </li>
        </ul>
      </div>
      <button onClick={toggle} className="navbar--hamburger">
        <Icons style="hamburger" />
      </button>
    </>
  );
}
