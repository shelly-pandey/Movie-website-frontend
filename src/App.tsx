import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./components/cart";
import Footer from './components/footer';

import Home from './components/home';

import { useEffect } from "react";
import { fetchMovies } from "./redux/actions";

import MovieCard from "./components/movieCard";



import { useDispatch } from 'react-redux';
import './App.css';
import MovieList from "./components/movieList";

import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Landing from "./components/landing page";

//import { IsUserAuthenticated } from "./components/userAuth";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/detail/:id" element={<MovieCard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/cart" element={<Cart />} />
        
       </Routes>
       <Footer />
    </BrowserRouter>

  );
}