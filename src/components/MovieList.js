import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  return (
    <div className="py-2 px-8">
      <h1 className="py-2 lg:text-2xl text-xl font-normal text-white">
        {title}
      </h1>
      <div className="overflow-x-scroll">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieKey={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
