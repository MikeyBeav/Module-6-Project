import React, { useEffect, useState } from "react";
import axios from "axios";
import Location from "../components/ui/Location";
import SkeletonCard from "../components/ui/SkeletonCard";
import { useLocation } from "react-router-dom";
import planetImg from "../Assets/planet.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const fetchAllLocations = async () => {
      let all = [];
      let url = "https://rickandmortyapi.com/api/location";
      while (url) {
        const res = await axios.get(url);
        all = all.concat(res.data.results);
        url = res.data.info.next;
      }
      setLocations(all);
      const earth = all.find((l) => l.name === "Earth (C-137)") || all[0];
      setSelected(earth);
      setLoading(false);
    };
    fetchAllLocations();
  }, []);

  useEffect(() => {
    if (search) {
      setSearchLoading(true);
      axios
        .get(
          `https://rickandmortyapi.com/api/location/?name=${encodeURIComponent(
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
    <div className="locations-page">
      <div style={{ textAlign: "center", margin: "2rem auto 1rem" }}>
        <img
          src={planetImg}
          alt="Planet"
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
              {searchResults.map((loc) => (
                <Location key={loc.id} {...loc} />
              ))}
            </div>
          ) : (
            <div>No results found.</div>
          )}
        </div>
      )}
      <div style={{ maxWidth: 400, margin: "2rem auto" }}>
        {selected && (
          <Location
            name={selected.name}
            type={selected.type}
            dimension={selected.dimension}
            residents={selected.residents}
          />
        )}
      </div>
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        All Locations
      </h2>
      <div className="locations-grid">
        {locations.map((loc) => (
          <button
            key={loc.id}
            className={`location-name-btn${
              selected && selected.id === loc.id ? " selected" : ""
            }`}
            onClick={() => setSelected(loc)}
          >
            {loc.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Locations;
