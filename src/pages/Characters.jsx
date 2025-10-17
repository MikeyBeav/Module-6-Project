import React, { useEffect, useState } from "react";
import axios from "axios";
import Bio from "../components/ui/Bio";
import SkeletonCard from "../components/ui/SkeletonCard";
import { useLocation } from "react-router-dom";
import charactersImg from "../Assets/rick-morty-characters.jpg";

const getFirstLetter = (name) => (name ? name[0].toUpperCase() : "");

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("A");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const fetchAllCharacters = async () => {
      let all = [];
      let url = "https://rickandmortyapi.com/api/character";
      while (url) {
        const res = await axios.get(url);
        all = all.concat(res.data.results);
        url = res.data.info.next;
      }
      setCharacters(all);
      setSelected(all[0]);
      setLoading(false);
    };
    fetchAllCharacters();
  }, []);

  useEffect(() => {
    if (search) {
      setSearchLoading(true);
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
            search
          )}`
        )
        .then((res) => {
          setSearchResults(res.data.results.slice(0, 6));
          setSearchLoading(false);
        })
        .catch(() => {
          setSearchResults([]);
          setSearchLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [search]);

  if (loading) return <SkeletonCard />;

  const letters = Array.from(
    new Set(characters.map((c) => getFirstLetter(c.name)))
  ).sort();
  const filtered = characters.filter((c) => getFirstLetter(c.name) === filter);

  return (
    <div className="characters-page">
      <div
        style={{
          textAlign: "center",
          margin: "2rem auto 1rem",
        }}
      >
        <img
          src={charactersImg}
          alt="Characters"
          style={{
            width: "100%",
            margin: "0 auto",
          }}
        />
      </div>
      {search && (
        <div style={{ marginBottom: "2rem" }}>
          <h2>Search Results</h2>
          {searchLoading ? (
            <SkeletonCard />
          ) : searchResults.length > 0 ? (
            <div className="search-results-grid">
              {searchResults.map((char) => (
                <Bio key={char.id} {...char} />
              ))}
            </div>
          ) : (
            <div>No results found.</div>
          )}
        </div>
      )}
      <div style={{ maxWidth: 400, margin: "2rem auto" }}>
        {selected && (
          <Bio
            id={selected.id}
            name={selected.name}
            status={selected.status}
            species={selected.species}
            gender={selected.gender}
            image={selected.image}
          />
        )}
      </div>
      <div style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        <label htmlFor="letter-select">
          <b>Filter by letter:</b>{" "}
        </label>
        <select
          id="letter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            fontSize: "1rem",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #90c748",
          }}
        >
          {letters.map((letter) => (
            <option key={letter} value={letter}>
              {letter}
            </option>
          ))}
        </select>
      </div>
      <div className="characters-grid">
        {filtered.map((char) => (
          <button
            key={char.id}
            className={`character-name-btn${
              selected && selected.id === char.id ? " selected" : ""
            }`}
            onClick={() => setSelected(char)}
          >
            {char.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Characters;
