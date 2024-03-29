import React from "react";
import MovieCard from "../ResuedComponent/MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  // console.log(movies);
  return (
    <div className="py-2 lg:px-8 md:px-4 px-2">
      <h1 className="py-2 lg:text-2xl text-xl font-normal text-white">
        {title}
      </h1>
      <div className="overflow-x-scroll movies-wrapper">
        <div className="flex lg:gap-4 gap-2">
          {movies.map((movie) => (
            <MovieCard
              obj={movie}
              id={movie.id}
              key={movie.id}
              movieKey={movie.poster_path}
              movieName={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
