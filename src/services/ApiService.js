import axios from "axios";

export const fetchData = async (endpoint) => {
  try {
    const result = await axios(endpoint);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchHeroesData = async () => {
  const endpoint = "http://localhost:3001/heroes";
  return await fetchData(endpoint);
};

export const fetchMapsData = async () => {
  const endpoint = "http://localhost:3001/maps";
  return await fetchData(endpoint);
};
export const fetchHistoryData = async () => {
  const endpoint = "http://localhost:3001/history";
  return await fetchData(endpoint);
};
export const fetchUserData = async () => {
  const endpoint = "http://localhost:3001/user/1";
  return await fetchData(endpoint);
};
export const fetchProfilesData = async () => {
  const endpoint = "http://localhost:3001/profiles";
  return await fetchData(endpoint);
};

export const addUserProfileToDb = async (profile) => {
  try {
    const endpoint = "http://localhost:3001/profiles";
    await axios.post(endpoint, { profile });
  } catch (error) {
    console.error("Failed to add profile", error);
    return;
  }

  try {
    const { data } = await axios.get("http://localhost:3001/profiles");
    return data;
  } catch (error) {
    console.error("Failed to fetch profiles data", error);
    return;
  }
}

export const deleteProfileFromDb = async (profile) => {
  try {
    const endpoint = `http://localhost:3001/profiles/${profile}`;
    await axios.delete(endpoint);
  } catch (error) {
    console.error("Failed to delete profile", error);
    return;
  }

  try {
    const { data } = await axios.get("http://localhost:3001/profiles");
    return data;
  } catch (error) {
    console.error("Failed to fetch profiles data", error);
    return;
  }
}