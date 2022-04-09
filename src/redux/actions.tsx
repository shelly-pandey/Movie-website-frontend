
import { Dispatch } from 'redux'
import { Movie } from './types'


type GetMovies = {
    type: "GET_MOVIES",
    payload: {
        movies: Movie[]
    }
}

export function getMovies(movies: Movie[]): MovieActions {
    return {
        type: "GET_MOVIES",
        payload: { movies }
    }
}


export function fetchMovies() {
    return (dispatch: Dispatch) => {
        fetch("http://localhost:5000/api/v1/movies")
            .then((response) => response.json())
            .then((data) => dispatch(getMovies(data)));
    };
}

type FilteredMoviesAction = {
    type: "GET_FILTERED_MOVIES",
    payload: {
        keyword: string
    }
}

export function getFilteredMovies(keyword: any): FilteredMoviesAction {

    return {
        type: "GET_FILTERED_MOVIES",
        payload: {
            keyword
        }
    };
}

type AddToCartAction = {
    type: "ADD_TO_CART",
    payload: { movie: Movie }
}

export function addToCart(movie: Movie): AddToCartAction {
    return {
        type: "ADD_TO_CART",
        payload: {
            movie
        }
    }
}

type UpdatePriceAction = {
    type: "UPDATE_PRICE",
    payload: { movie: Movie, quantity: string }
}

export function updatePrice(movie: Movie, quantity: string): UpdatePriceAction {
    return {
        type: "UPDATE_PRICE",
        payload: {
            movie,
            quantity
        }
    }
}

type DeleteFromCartAction = {
    type: "DELETE_FROM_CART",
    payload: { movie: Movie }
}


export function deleteFromCart(movie: Movie): DeleteFromCartAction {
    return {
        type: "DELETE_FROM_CART",
        payload: { movie }
    }
}

type DeleteAllFromCart = {
    type: "DELETE_ALL_FROM_CART",
}


export function deleteAllFromCart(): DeleteAllFromCart {
    return {
        type: "DELETE_ALL_FROM_CART",
    }
}

type NavigateFromCartAction = {
    type: "NAVIGATE_FROM_CART",
    payload: { movie: Movie }
}

export function Navigate(movie: Movie): NavigateFromCartAction {
    return {
        type: "NAVIGATE_FROM_CART",
        payload: { movie }
    }
}

type changeThemeAction = {
    type: "THEME_CHANGE",
    payload: { darktheme: boolean }
}

export function changeTheme(darktheme: boolean): changeThemeAction {
    return {
        type: "THEME_CHANGE",
        payload: { darktheme }
    }
}

type IncreaseQuantityAction = {
    type: "INCREASE_QUANTITY",
    payload: { movie: Movie }
}

export function updateQuantity(movie: Movie): IncreaseQuantityAction {
    return {
        type: "INCREASE_QUANTITY",
        payload: { movie }
    }
}

type MovieByGenreAction = {
    type: "MOVIE_BY_GENRE",
    payload: {genre : string }
}

export function movieByGenre(genre: string): MovieByGenreAction {
    
    return {
        type: "MOVIE_BY_GENRE",
        payload: { genre }
    }
}


export type MovieActions = GetMovies | FilteredMoviesAction | DeleteAllFromCart | DeleteFromCartAction | AddToCartAction
    | NavigateFromCartAction | IncreaseQuantityAction | changeThemeAction | MovieByGenreAction | UpdatePriceAction