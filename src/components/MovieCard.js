import React from "react";
import { MOVIE_IMG_URL } from "../utils/constant";
import "../App.css"

const MovieCard = ({ movieKey }) => {
  return (
    <div>
      <div className="movie-poster lg:w-44 md:w-28 w-20">
        <img
          src={MOVIE_IMG_URL + movieKey}
          alt="movie card"
          className="w-100 object-cover"
        />
      </div>
    </div>
  );
};

export default MovieCard;
