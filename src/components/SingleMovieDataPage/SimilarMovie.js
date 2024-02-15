import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../ResuedComponent/MovieCard";
import MovieListShimmer from "../ShimmerUI/MovieListShimmer";
import { API_OPTIONS } from "../../utils/constant";

const SimilarMovie = () => {
  const [similarMovieData, setSimilarMovieData] = useState();
  const { id } = useParams();
  useEffect(()=>{
    const similarMovie=async()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`,API_OPTIONS);
      const json =await data.json();
      setSimilarMovieData(json.results)
    }
    similarMovie()
  },[id]);
  if (!similarMovieData) return <div className="mt-10"><MovieListShimmer /></div>;
  return (
    <>
      <p className="lg:text-3xl md:text-2xl text-xl text-white my-4">Similar Movies</p>
      <div className="flex overflow-x-scroll movies-wrapper gap-6">
        {similarMovieData.map((movie) => (
          <MovieCard
            obj={movie}
            id={movie.id}
            key={movie.id}
            movieKey={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
};

export default SimilarMovie;
