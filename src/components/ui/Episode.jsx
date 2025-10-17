import React from "react";

const Episode = ({ name, episode, air_date, image }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={
            image ||
            "https://www.looper.com/img/gallery/things-you-never-noticed-in-rick-and-mortys-first-episode/intro-1593533799.jpg"
          }
          alt={name}
        />
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p className="card__text">
          <b>Episode:</b> {episode}
        </p>
        <p className="card__text">
          <b>Air Date:</b> {air_date}
        </p>
      </div>
    </div>
  );
};

export default Episode;
