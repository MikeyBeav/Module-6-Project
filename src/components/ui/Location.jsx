import React from "react";
import split from "../../Assets/split.jpg";

const Location = ({ name, type, dimension, residents, image }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image || split} alt={name} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p className="card__text">
          <b>Type:</b> {type}
        </p>
        <p className="card__text">
          <b>Dimension:</b> {dimension}
        </p>
        <p className="card__text">
          <b>Residents:</b> {residents ? residents.length : 0}
        </p>
      </div>
    </div>
  );
};

export default Location;
