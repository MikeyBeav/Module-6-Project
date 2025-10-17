import React from "react";
import { Link } from "react-router-dom";

const Bio = ({ id, name, status, species, gender, image }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={name} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p className="card__text">
          <b>Status:</b> {status}
        </p>
        <p className="card__text">
          <b>Species:</b> {species}
        </p>
        <p className="card__text">
          <b>Gender:</b> {gender}
        </p>
        <Link to={`/characters/${id}`}>
          <button className="btn card__btn">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Bio;
