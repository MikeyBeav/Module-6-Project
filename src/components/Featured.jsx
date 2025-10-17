import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Bio from "./ui/Bio";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 2000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  centerPadding: "0px",
  cssEase: "linear",
  pauseOnHover: true,
};

const characterIds = [1, 2, 3, 39, 177, 244, 47, 331, 306, 242];

const Featured = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${characterIds.join(",")}`
      )
      .then((res) => {
        setCharacters(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="featured-carousel">
      <Slider {...settings}>
        {loading
          ? characterIds.map((id) => <Bio key={id} loading />)
          : characters.map((char) => <Bio key={char.id} {...char} />)}
      </Slider>
    </div>
  );
};

export default Featured;
