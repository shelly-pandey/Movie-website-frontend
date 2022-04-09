import { MovieActions } from './actions';
import { Movie } from './types';


type InitialState = {
  movies: Movie[],
  filteredMovies: Movie[],
  keyword: any,
  darktheme: boolean
  movieByGenre: Movie[],
};

const initialState: InitialState = {
  movies: [],
  filteredMovies: [],
  keyword: undefined,
  darktheme: false,
  movieByGenre: []

};


export default function moviesReducer(state = initialState, action: MovieActions): InitialState {
  switch (action.type) {
    case "GET_MOVIES": {

      return {
        ...state,
        movies: action.payload.movies,
        filteredMovies: action.payload.movies
      };
    }


    case "GET_FILTERED_MOVIES": {
      let movies = state.movies.filter((movie) => {
        return (
          movie.title.toLocaleLowerCase()
            .indexOf(action.payload.keyword.toLocaleLowerCase()) !== -1
        )
      });


      return {
        ...state,
        filteredMovies: movies
      };
    }

    case "MOVIE_BY_GENRE": {

      let movies = state.movies

      if (action.payload.genre !== "All") {
        movies = state.movies.filter((movie) => {
          return (
          //@ts-ignore
            // eslint-disable-next-line eqeqeq
            movie.genres.includes( action.payload.genre)
          )
        });
      }

      return {
        ...state,
        filteredMovies: movies
      }
    };

    case "THEME_CHANGE": {
      let theme = action.payload.darktheme;
      if (theme) {
        theme = false;
      }
      else {
        theme = true;
      }

      return {
        ...state,
        darktheme: theme,
      };
    }


    default:
      return state;
  }
}