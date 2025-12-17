import { Movie } from "./types/types";

type State = {
  movies: Movie[];
  allMovies: Movie[];
  page: number;
  loading: boolean;
  hasMore: boolean;
};

type Action = { type: "FETCH_START" } | { type: "FETCH_SUCCESS"; payload: Movie[] } | { type: "FETCH_END_NO_MORE" };

export const initialState: State = {
  movies: [],
  allMovies: [],
  page: 1,
  loading: false,
  hasMore: true,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        movies: [...state.movies, ...action.payload],
        allMovies: [...state.allMovies, ...action.payload],
      };

    case "FETCH_END_NO_MORE":
      return { ...state, loading: false, hasMore: false };

    default:
      return state;
  }
}
