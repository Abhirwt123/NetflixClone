import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MovieDetailShimmer from "../ShimmerUI/MovieDetailShimmer";
import { API_OPTIONS } from "../../utils/constant";

const MovieDetails = () => {
  const [SingleMoviedata, setSingleMoviedata] = useState();
  const { id } = useParams();
  useEffect(()=>{
    const Moviedata=async()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}`,API_OPTIONS);
      const json =await data.json();
      setSingleMoviedata(json)
  }
  Moviedata()
  },[id])
  if (!SingleMoviedata) return <MovieDetailShimmer />
  const {
    title,
    poster_path,
    runtime,
    genres,
    release_date,
    status,
    overview,
  } = SingleMoviedata;
  // console.log(data);
  const totalVotes = SingleMoviedata.vote_average;
  const percentage = totalVotes.toFixed(1);
  return (
    <>
      <div className=" flex gap-16">
        <div className="grid grid-cols-12 lg:gap-12 md:gap-8 gap-0 items-center">
          <div className="lg:col-span-4 col-span-12">
            <div className="img-wrap w-full">
              <img
                className="lg:h-4/5 md:h-3/5 h-2/5 object-cover w-full object-top rounded-2xl"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="img"
              />
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="detail">
              <div className="name">
                <p className="text-3xl font-bold text-gray-200 lg:py-0 py-4 ">{title}</p>
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
                <h1 className="lg:text-4xl md:text-2xl text-xl text-gray-200"> Overview</h1>
                <p className="mt-2 text-gray-300 lg:text-lg md:text-md text-sm"> {overview}</p>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col border-t border-gray-500 mt-4 gap-2 py-2">
                <p className="text-white lg:text-2xl md:text-xl text-md border-e border-gray px-2">
                  Status :
                  <span className="lg:text-xl md:text-lg text-sm text-gray-500"> {status}</span>
                </p>
                <p className="text-white lg:text-2xl md:text-xl text-md border-e border-gray px-2">
                  Release :
                  <span className="lg:text-xl md:text-lg text-sm text-gray-500"> {release_date}</span>
                </p>
                <p className="text-white lg:text-2xl md:text-xl text-md px-2">
                  Run Time :
                  <span className="lg:text-xl md:text-lg text-sm text-gray-500">
                    {Math.round(runtime / 60) + "hr"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
