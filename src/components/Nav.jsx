import React, { useState } from "react";
import names from "../Assets/names.png";
import api from "../Assets/api.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav__container">
      <div className="nav__row">
        <div className="nav__logo">
          <a href="https://www.adultswim.com/rick-and-morty">
            <img className="nav__img" src={names} alt="" />
          </a>
        </div>
        <button
          className="nav__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span
            className={open ? "hamburger hamburger--open" : "hamburger"}
          ></span>
        </button>
        <div className={open ? "nav__links nav__links--open" : "nav__links"}>
          <Link className="nav__link" to="/">
            HOME
          </Link>
          <Link className="nav__link" to="/about">
            ABOUT
          </Link>
          <Link className="nav__link" to="/characters">
            CHARACTERS
          </Link>
          <Link className="nav__link" to="/locations">
            LOCATIONS
          </Link>
          <Link className="nav__link" to="/episodes">
            EPISODES
          </Link>
        </div>
        <a
          className="nav__link nav__link--logo"
          href="https://rickandmortyapi.com/"
        >
          <img src={api} alt="" />
          <span>API</span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
