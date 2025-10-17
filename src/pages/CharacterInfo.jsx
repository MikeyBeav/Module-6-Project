import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SkeletonCard = () => (
  <div style={{ maxWidth: 400, margin: "2rem auto" }}>
    <div className="card">
      <div className="card__image skeleton-image" />
      <div className="card__content">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
      </div>
    </div>
  </div>
);

const CharacterInfo = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCharacter(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <SkeletonCard />;
  if (!character) return <div>Character not found.</div>;

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <div className="card">
        <div className="card__image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="card__content">
          <h2 className="card__title">{character.name}</h2>
          <p className="card__text">
            <b>Status:</b> {character.status}
          </p>
          <p className="card__text">
            <b>Species:</b> {character.species}
          </p>
          {character.type && (
            <p className="card__text">
              <b>Type:</b> {character.type}
            </p>
          )}
          <p className="card__text">
            <b>Gender:</b> {character.gender}
          </p>
          <p className="card__text">
            <b>Origin:</b> {character.origin?.name}
          </p>
          <p className="card__text">
            <b>Location:</b> {character.location?.name}
          </p>
          <p className="card__text">
            <b>Episode Count:</b> {character.episode?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
