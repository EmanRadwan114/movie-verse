export const baseURL = "https://api.themoviedb.org/3";
export const baseImgURL = "https://image.tmdb.org/t/p/w500";

//———————————————————————————————— endpoints ————————————————————————————————
export const getCategoriesEndpoint = () => "/genre/movie/list";

export const getAllMoviesEndpoint = (page = 1) =>
  `/discover/movie?sort_by=revenue.desc&page=${page ?? 1}`;

export const getSingleMoviesEndpoint = (id: string) => `/movie/${id}`;

export const getSearchEndpoint = (query: string, page = 1) =>
  `/search/movie?query=${query}&page=${page || 1}`;

//———————————————————————————————— request headers ————————————————————————————————
export const fetchHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.API_KEY}`,
};
