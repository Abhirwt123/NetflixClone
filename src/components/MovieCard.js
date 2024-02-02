import React from "react";
import { MOVIE_IMG_URL } from "../utils/constant";
import "../App.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movieKey,id }) => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  // const [isActiveCard, setIsActivecard] = useState(false);
  // const [isFav, setIsFav] = useState(false);
  const handelCardDetails = () => {
    navigate(`movieDetails/${id}`)
  };
  // const handelFavMovie = (e) => {
  //   e.stopPropagation();
  //   setIsFav(!isFav);
  //   isFav ? dispatch(removeFavMovie()) : dispatch(addFavMovie(obj));
  // }

  return (
    <div
      // className={isActiveCard ? "activeCard card-wrap" : "card-wrap"}
      onClick={handelCardDetails}>
      <div className="relative overflow-hidden">
        <div className="movie-poster lg:w-56 w-28">
          <img
            src={MOVIE_IMG_URL + movieKey}
            alt="movie card"
            className="object-cover rounded-md"
          />
        </div>
        {/* <div className="card-details absolute bg-black bg-opacity-70">
          <p className="text-lg text-start font-bold text-white">
            {movieName}
          </p>
          <div className="details flex gap-4 py-2 text-white font-bold text-sm">
            <p>{rating + "/10"}</p>
            <p>{date}</p>
            <p onClick={handelFavMovie}>
              <i className={isFav ? "fa-solid fa-star text-yellow-400" : "fa-regular fa-star"}></i>
            </p>
          </div>
          <p className="text-xs text-gray-300">{des.slice(0, 350) + "....."}</p>
        </div> */}
      </div>
    </div>
  );
};

export default MovieCard;