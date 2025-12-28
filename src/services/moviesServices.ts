import { baseURL, fetchHeaders } from "./api";

//———————————————————————————————— fetch movies ————————————————————————————————
export const fetchMovies = async (endpoint: string) => {
  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      headers: fetchHeaders,
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch movies");
  }
};
