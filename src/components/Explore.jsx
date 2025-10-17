import React, { useEffect, useState } from "react";
import Location from "./ui/Location";
import Episode from "./ui/Episode";
import explore from "../Assets/Rick And Morty Animation.jpeg";
import earthImg from "../Assets/C-137.png";
import citadelImg from "../Assets/Citadel.png";
import anatomyImg from "../Assets/AnatomyPark.png";
import totalRickallImg from "../Assets/Total_Rickall.png";
import pickleRickImg from "../Assets/PickleRick.png";
import meeseeksImg from "../Assets/MeeseeksandDestroy.png";
import axios from "axios";

const locationImages = {
  "Earth (C-137)": earthImg,
  "Citadel of Ricks": citadelImg,
  "Anatomy Park": anatomyImg,
};

const episodeImages = {
  "Total Rickall": totalRickallImg,
  "Pickle Rick": pickleRickImg,
  "Meeseeks and Destroy": meeseeksImg,
};

const locationIds = [1, 3, 5];
const episodeIds = [15, 24, 5]; // Total Rickall (15), Pickle Rick (24), Meeseeks and Destroy (5)

const Explore = () => {
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationIds.join(",")}`)
      .then((res) => {
        const locs = Array.isArray(res.data) ? res.data : [res.data];
        setLocations(locs);
      });
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`)
      .then((res) => {
        let eps = Array.isArray(res.data) ? res.data : [res.data];
        const nameToId = {
          "Total Rickall": 15,
          "Pickle Rick": 24,
          "Meeseeks and Destroy": 5,
        };
        const ordered = [
          eps.find((ep) => ep.id === nameToId["Total Rickall"]),
          eps.find((ep) => ep.id === nameToId["Pickle Rick"]),
          eps.find((ep) => ep.id === nameToId["Meeseeks and Destroy"]),
        ].filter(Boolean);
        setEpisodes(ordered);
      });
  }, []);

  return (
    <>
      <div className="explore__container">
        <div className="explore__img">
          <img src={explore} alt="" />
        </div>
        <h2>
          {" "}
          FEATURED<br></br>LOCATIONS
        </h2>
        <div className="explore__grid">
          {locations.map((loc) => (
            <Location
              key={loc.id}
              name={loc.name}
              type={loc.type}
              dimension={loc.dimension}
              residents={loc.residents}
              image={locationImages[loc.name]}
            />
          ))}
        </div>
        <h2>
          FEATURED<br></br>EPISODES
        </h2>
        <div className="explore__grid">
          {episodes.map((ep) => (
            <Episode
              key={ep.id}
              name={ep.name}
              episode={ep.episode}
              air_date={ep.air_date}
              image={episodeImages[ep.name]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
