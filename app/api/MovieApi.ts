import { URLS_API } from "../constants/urls";
import { MovieDetail } from "../pages/detailPage/type/detailType";
import { Movie, PaginatedResponse } from "../types/types";
import { api } from "./axios";

export const getMovies = async (page: number) => {
  const page1 = await api.get<PaginatedResponse<Movie>>("/discover/movie", {
    params: { page: page },
  });

  return page1.data.results.map(({ id, title, release_date, genre_ids, vote_average, popularity, vote_count, poster_path }) => ({
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
  return data;
};
