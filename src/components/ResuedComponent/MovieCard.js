import React from "react";
import { DUMMY_MOVIE_POSTER, MOVIE_IMG_URL } from "../../utils/constant";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MovieCard = ({ movieKey, id, obj }) => {
  const navigate = useNavigate();
  const handelCardDetails = () => {
    navigate(`movie/${id}`);
  };
  if(!obj)return;
  const { vote_average, title } = obj;
  const percentage = vote_average.toFixed(1);

  return (
    <div onClick={handelCardDetails}>
      <div className="relative">
        <div className="movie-poster lg:w-56 w-28 h-80">
          <img
            src={movieKey ? MOVIE_IMG_URL + movieKey : DUMMY_MOVIE_POSTER}
            alt="movie card"
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
        <div className="absolute left-0 -bottom-0 flex items-center bg-gray-900 w-full rounded-b-xl">
          <div className="w-16 h-16 rounded-full text-white text-center text-4xl p-2">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}`}
              maxValue={10}
              styles={buildStyles({
                textSize: "30px",
              })}
            />
          </div>
          <p className="text-white">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
