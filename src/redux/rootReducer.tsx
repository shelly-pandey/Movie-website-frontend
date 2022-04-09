import { combineReducers } from "redux";
import moviesReducer from "./reducer";
import cartreducer from "./cartreducer";

 const rootReducer = combineReducers({ moviesReducer , cartreducer});
 export type rootState =  ReturnType<typeof rootReducer>
 export default rootReducer;
