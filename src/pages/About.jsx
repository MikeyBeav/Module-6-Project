import React from "react";
import aboutImg from "../Assets/about.jpg";

const About = () => {
  return (
    <div className="About__container">
      <div style={{ textAlign: "center", margin: "2rem auto 1rem" }}>
        <img
          src={aboutImg}
          alt="About"
          style={{ width: "100%", margin: "0 auto" }}
        />
      </div>
      <h1>WHAT IS RICK AND MORTY???</h1>
      <p>
        Rick and Morty is an animated science fiction sitcom about a genius,
        alcoholic scientist named Rick Sanchez and his good-hearted but fretful
        grandson, Morty Smith. The show follows their interdimensional
        adventures across infinite realities, often causing trouble for Rick's
        family, while also balancing domestic life. The series is known for its
        dark humor, complex themes, and blend of high-stakes sci-fi with
        emotional storylines.
      </p>
      <h3>PREMISE</h3>
      <p>
        Rick, a mad scientist, drags his grandson Morty on adventures to other
        planets and dimensions using his portal gun and flying saucer.{" "}
      </p>
      <h3>CHARACTERS</h3>
      <p>
        The main characters are Rick, Morty, Morty's parents Jerry and Beth (who
        is Rick's daughter), and his older sister Summer.{" "}
      </p>
      <h3>THEMES</h3>
      <p>
        Themes: The show explores complex themes such as the nature of
        consciousness, time travel, and the meaning of life and death in an
        infinite multiverse.{" "}
      </p>
      <h3>TONE</h3>
      <p>
        It combines the absurd and the outrageous with moments of genuine
        emotion and existential dread.{" "}
      </p>
      <h3>ORIGIN</h3>
      <p>
        The series was created by Justin Roiland and Dan Harmon and is broadcast
        on Adult Swim.{" "}
      </p>
    </div>
  );
};

export default About;
