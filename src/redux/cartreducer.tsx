import { Movie } from './types'
import { MovieActions } from './actions'

type InitialState = {
  movies: Movie[],
  movie: Movie[],
  cartMovies: Movie[],
  filteredMovies: Movie[],
}

const initialState: InitialState = {
  movies: [],
  movie: [],
  cartMovies: [],
  filteredMovies: [],
};


export default function cartreducer(state = initialState, action: MovieActions): InitialState {

  switch (action.type) {
    case "ADD_TO_CART": {
      console.log('state.cartMovies ' + state.cartMovies)
      console.log('action.payload.movie.title ' + action.payload.movie.title)
      let cartItems = state.cartMovies && state.cartMovies.map(movie => movie && movie.title);

      return {
        ...state,
        cartMovies: cartItems && cartItems.includes(action.payload.movie.title) ? state.cartMovies : [...state.cartMovies, action.payload.movie],
      }

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

    case "UPDATE_PRICE": {
      let cartItems = state.cartMovies;

      for (const item of cartItems) {
        if (action.payload.movie.id === item.id) {
        //  item.quantity = parseInt(action.payload.quantity)
          //item.price = item.price * item.quantity
        }
      }

      return {
        ...state,
        cartMovies: cartItems
      }

    }

    case "DELETE_ALL_FROM_CART": {
      return {
        ...state, cartMovies: [],
      };
    }

    case "DELETE_FROM_CART": {
      let cartItems = state.cartMovies.filter(movie => movie.title !== action.payload.movie.title);

      return {
        ...state,
        cartMovies: cartItems
      }

    }

    case "INCREASE_QUANTITY": {
      let cartItems = state.cartMovies.map(movie => movie.title);

      return {
        ...state,
        cartMovies: cartItems.includes(action.payload.movie.title) ? state.cartMovies : [...state.cartMovies, action.payload.movie],
      }

    }

    default:
      return state;
  }
}