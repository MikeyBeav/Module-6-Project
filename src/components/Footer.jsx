import React, { useState } from "react";
import logo from "../Assets/logo.png";
import api from "../Assets/api.png";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer__container">
      <div className="footer__row">
        <div className="footer__logo">
          <a href="https://www.adultswim.com/rick-and-morty">
            <img className="footer__img" src={logo} alt="" />
          </a>
        </div>
        <button
          className="footer__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle footer navigation"
        >
          <span
            className={open ? "hamburger hamburger--open" : "hamburger"}
          ></span>
        </button>
        <div
          className={
            open ? "footer__links footer__links--open" : "footer__links"
          }
        >
          <a className="footer__link" href="/">
            HOME
          </a>
          <a className="footer__link" href="/about">
            ABOUT
          </a>
          <a className="footer__link" href="/characters">
            CHARACTERS
          </a>
          <a className="footer__link" href="/locations">
            LOCATIONS
          </a>
          <a className="footer__link" href="/episodes">
            EPISODES
          </a>
        </div>
        <a
          className="footer__link footer__link--logo"
          href="https://rickandmortyapi.com/"
        >
          <img src={api} alt="" />
          <span>API</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
