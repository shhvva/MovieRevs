import React, { useState, useRef } from "react";
import Movie from "./Movie";
import Searchbar from "./Searchbar";
import "./App.css";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movieRef = useRef(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    clearMovieData();
    changeBackgroundImage(movie.posterUrl);
    scrollToMovie();
  };

  const clearMovieData = () => {
    const movieDataElement = document.getElementById("Movie_data");
    if (movieDataElement) {
      movieDataElement.innerHTML = "";
    }
  };

  const changeBackgroundImage = (posterUrl) => {
    const movieOuterbox = document.querySelector(".Movie_outerbox");
    if (movieOuterbox) {
      movieOuterbox.style.backgroundImage = posterUrl
        ? `url(${posterUrl})`
        : "url('/public/assets/DefaultImage.jpg')";
    }
  };

  const scrollToMovie = () => {
    if (movieRef.current) {
      movieRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Searchbar handleMovieSelect={handleMovieSelect} />
      <div ref={movieRef}>
        <Movie selectedMovie={selectedMovie} />
      </div>
    </div>
  );
};

export default App;
