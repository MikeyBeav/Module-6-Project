import axios from "axios";

export const getFeaturedLocations = async () => {
  const ids = [1, 3, 5];
  const res = await axios.get(
    `https://rickandmortyapi.com/api/location/${ids.join(",")}`
  );
  return Array.isArray(res.data) ? res.data : [res.data];
};
