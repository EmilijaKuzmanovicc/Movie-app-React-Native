export interface Movie {
  id: number;
  title: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
  popularity: number;
  vote_count: number;
  poster_path: string;
}
export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
