import React, { useEffect, useState } from "react";
import axios from "axios";
import Episode from "../components/ui/Episode";
import SkeletonCard from "../components/ui/SkeletonCard";
import { useLocation } from "react-router-dom";
import episodesImg from "../Assets/episodes.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      let all = [];
      let url = "https://rickandmortyapi.com/api/episode";
      while (url) {
        const res = await axios.get(url);
        all = all.concat(res.data.results);
        url = res.data.info.next;
      }
      setEpisodes(all);
      setSelected(all[0]);
      setLoading(false);
    };
    fetchAllEpisodes();
  }, []);

  useEffect(() => {
    if (search) {
      setSearchLoading(true);
      axios
        .get(
          `https://rickandmortyapi.com/api/episode/?name=${encodeURIComponent(
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

  return (
    <div className="episodes-page">
      <div style={{ textAlign: "center", margin: "2rem auto 1rem" }}>
        <img
          src={episodesImg}
          alt="Episodes"
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
              {searchResults.map((ep) => (
                <Episode key={ep.id} {...ep} />
              ))}
            </div>
          ) : (
            <div>No results found.</div>
          )}
        </div>
      )}
      <div style={{ maxWidth: 400, margin: "2rem auto" }}>
        {selected && (
          <Episode
            name={selected.name}
            episode={selected.episode}
            air_date={selected.air_date}
          />
        )}
      </div>
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        All Episodes
      </h2>
      <div className="episodes-grid">
        {episodes.map((ep) => (
          <button
            key={ep.id}
            className={`episode-name-btn${
              selected && selected.id === ep.id ? " selected" : ""
            }`}
            onClick={() => setSelected(ep)}
          >
            {ep.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
