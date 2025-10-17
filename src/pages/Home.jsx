import React from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Explore from "../components/Explore";
import flipped from "../Assets/opposite.png";

const Home = () => {
  return (
    <div className="home-content">
      <Search />
      <Header />
      <Featured />
      <Explore />
      <img src={flipped} alt="" />
    </div>
  );
};

export default Home;
