import axios from "axios";

export const getFeaturedEpisodes = async () => {
  const ids = [20, 27, 5];
  const res = await axios.get(
    `https://rickandmortyapi.com/api/episode/${ids.join(",")}`
  );
  return Array.isArray(res.data) ? res.data : [res.data];
};
