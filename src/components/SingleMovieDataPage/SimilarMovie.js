import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSimilarMovie from "../../Hooks/useSimilarMovie";
import MovieCard from "../ResuedComponent/MovieCard";
import MovieListShimmer from "../ShimmerUI/MovieListShimmer";

const SimilarMovie = () => {
  const [similarMovieData, setSimilarMovieData] = useState();
  const { id } = useParams();
  useSimilarMovie(id, setSimilarMovieData);
  if (!similarMovieData) return <div className="mt-10"><MovieListShimmer/></div> ;
  // console.log(similarMovieData);
  return (
    <>
      <p className="text-3xl text-white my-4">Similar Movies</p>
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
