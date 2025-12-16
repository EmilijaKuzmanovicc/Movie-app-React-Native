import { URLS_API } from "../constants/urls";
import { MovieDetail } from "../pages/detailPage/detailType";
import { Movie, PaginatedResponse } from "../types/types";
import { api } from "./axios";

export const getMovies = async () => {
  const page1 = await api.get<PaginatedResponse<Movie>>("/discover/movie", {
    params: { page: 1 },
  });

  const page2 = await api.get<PaginatedResponse<Movie>>("/discover/movie", {
    params: { page: 2 },
  });
  const page3 = await api.get<PaginatedResponse<Movie>>("/discover/movie", {
    params: { page: 3 },
  });

  const allMovies = [...page1.data.results, ...page2.data.results, ...page3.data.results];
  return allMovies.map(({ id, title, release_date, genre_ids, vote_average, popularity, vote_count, poster_path }) => ({
    id,
    title,
    release_date,
    genre_ids,
    vote_average,
    popularity,
    vote_count,
    poster_path,
  }));
};

export const getDetailsOfMovie = async (movieId: string): Promise<MovieDetail> => {
  const { data } = await api.get<MovieDetail>(`${URLS_API.MOVIEDITAIL}/${movieId}`);
  console.log("api data", data);
  return data;
};
