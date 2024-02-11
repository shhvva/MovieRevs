import React from "react";

const generateDirector = (selectedMovie) => {
  document.getElementById("Movie_data").innerHTML = selectedMovie.director;
};

const generateRating = (selectedMovie) => {
  document.getElementById("Movie_data").innerHTML = selectedMovie.rating;
};

const generateCast = (selectedMovie) => {
  const castList = selectedMovie.cast.join(", ");
  document.getElementById("Movie_data").innerHTML = castList;
};

const generateSyn = (selectedMovie) => {
  document.getElementById("Movie_data").innerHTML = selectedMovie.synopsis;
};

const Movie = ({ selectedMovie }) => {
  return (
    <div className="Movie_outerbox" id="Movie_outerbox">
      {selectedMovie && (
        <>
          <div className="Movie_title">
            <p id="Movie_name">{selectedMovie.title}</p>
          </div>

          <div className="Movie_options_container">
            <p
              className="Movie_Option Movie_Option_Director"
              onClick={() => generateDirector(selectedMovie)}
            >
              Director
            </p>
            <p
              className="Movie_Option Movie_Option_Rating"
              onClick={() => generateRating(selectedMovie)}
            >
              Rating
            </p>
            <p
              className="Movie_Option Movie_Option_Cast"
              onClick={() => generateCast(selectedMovie)}
            >
              Cast
            </p>
            <p
              className="Movie_Option Movie_Option_Synopsis"
              onClick={() => generateSyn(selectedMovie)}
            >
              Synopsis
            </p>
          </div>

          <div className="Movie_Data_container">
            <p id="Movie_data"></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
