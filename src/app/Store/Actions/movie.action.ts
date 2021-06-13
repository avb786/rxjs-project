import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/Models/movie";

export const getAllMovies = createAction('[Movie] Get movie');
export const addMovies = createAction('[Movie] Add movie', (movie: Movie) => movie);
export const addMoviesSuccess = createAction('[Movie] Add movie success',props<{movie: Movie}>());