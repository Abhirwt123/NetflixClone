import React, { useState } from "react";
import { MOVIE_IMG_URL } from "../utils/constant";
import "../App.css";
import { useDispatch } from "react-redux";
import { addFavMovie, removeFavMovie } from "../utils/favMoviesSlice";

const MovieCard = ({ movieKey, movieName, des, rating, date, obj }) => {
  const dispatch = useDispatch();
  const [isActiveCard, setIsActivecard] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const handelCardDetails = () => {
    setIsActivecard(!isActiveCard);
  };
  const handelFavMovie = (e) => {
    e.stopPropagation();
    setIsFav(!isFav)
    if(isFav===false){
      dispatch(addFavMovie(obj))
    }else{
      dispatch(removeFavMovie())
    }
  }
  return (
    <div className="">
      <div
        className={isActiveCard ? "activeCard card-wrap" : "card-wrap"}
        onClick={handelCardDetails}>
        <div className="relative overflow-hidden">
          <div className="movie-poster lg:w-56 md:w-28 w-20">
            <img
              src={MOVIE_IMG_URL + movieKey}
              alt="movie card"
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="card-details absolute bg-black bg-opacity-70">
            <p className="text-lg text-start font-bold text-white">
              {movieName}
            </p>
            <div className="details flex gap-4 py-2 text-white font-bold text-sm">
              <p>{rating + "/10"}</p>
              <p>{date}</p>
              <p onClick={handelFavMovie}>
                <i className={isFav ? "fa-solid fa-star text-yellow-400" : "fa-regular fa-star "}></i>
              </p>
            </div>
            <p className="text-xs text-gray-300">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;