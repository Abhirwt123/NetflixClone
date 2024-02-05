import React, { useState } from "react";
import useMovieDetails from "../../Hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MovieDetailShimmer from "../ShimmerUI/MovieDetailShimmer";

const MovieDetails = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  useMovieDetails(id, setdata);
  if (!data) {
    return  <MovieDetailShimmer />};
  const {
    title,
    poster_path,
    runtime,
    genres,
    release_date,
    status,
    overview,
  } = data;
  // console.log(data);
  const totalVotes = data.vote_average;
  const percentage = totalVotes.toFixed(1);
 
  return (
    <>
      <div className=" flex gap-16">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-4">
            <div className="img-wrap w-full">
              <img
                className="h-4/5 object-cover w-full object-top rounded-2xl"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="img"
              />
            </div>
          </div>
          <div className="col-span-8">
            <div className="detail">
              <div className="name">
                <p className="text-4xl font-bold text-gray-200">{title}</p>
              </div>
              <div className="genrs flex mt-4 gap-2">
                {genres.map((elm) => (
                  <p
                    key={elm.id}
                    className="bg-pink-700 text-white text-sm px-2 py-1 rounded-full"
                  >
                    {elm?.name}
                  </p>
                ))}
              </div>
              <div className="rating mt-4">
                <div className="w-20 h-20 p-2 leading-2">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}`}
                    maxValue={10}
                    styles={buildStyles({
                      textSize: "40px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
              <div className="overview mt-4">
                <h1 className="text-4xl text-gray-200"> Overview</h1>
                <p className="mt-2 text-gray-300 text-lg"> {overview}</p>
              </div>
              <div className="flex border-t border-gray-500 mt-4 gap-2 py-2">
                <p className="text-white text-2xl border-e border-gray px-2">
                  Status :
                  <span className="text-xl text-gray-500"> {status}</span>
                </p>
                <p className="text-white text-2xl border-e border-gray px-2">
                  Release :
                  <span className="text-xl text-gray-500"> {release_date}</span>
                </p>
                <p className="text-white text-2xl px-2">
                  Run Time :
                  <span className="text-xl text-gray-500">
                    {" "}
                    {Math.round(runtime / 60) + "hr"}
                  </span>
                </p>
              </div>
              <div>
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
