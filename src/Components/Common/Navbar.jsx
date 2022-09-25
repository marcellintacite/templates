import React, { useState } from "react";
import "../../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ dark, set }) {
  const [show, setShow] = useState(false);
  const handleDark = () => {
    set(!dark);
  };
  return (
    <div style={{ width: "100%" }} className={dark && "dark"}>
      <div className={show ? "container active" : "container"}>
        <span className="logo">
          aksanti<span className="text">Bahiga</span>
        </span>

        <div className="center">
          <div
            className={dark ? "circle active" : "circle"}
            onClick={handleDark}
          ></div>
        </div>
        <div className="right">
          <ul className={show && "active"}>

            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/projet">Projets</Link>
            </li>
            <li><a href="tel:+243847723092">+243 847 723 092</a></li>
            <li><a href="mailto:aksantibahiga3@gmail.com">aksantibahiga3@gmail.com</a></li>
          </ul>

          <div
            className="responsive"
            onClick={() => {
              setShow(!show);
            }}
          >
            <div className={show ? "fa fa-times" : "fa fa-align-justify"}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
