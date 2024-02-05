import React from "react";
import MovieDetails from "./MovieDetails";
import MovieCast from "./MovieCast";
import SimilarMovie from "./SimilarMovie";
import Footer from "../ResuedComponent/Footer";
import RecommendateMovie from "./RecommendateMovie";

const MovieDataContainer = () => {
  return (
    <>
      <div className="bg-gray-800 px-32 py-14">
        <MovieDetails />
        <MovieCast />
        <SimilarMovie />
        <RecommendateMovie />
      </div>
      <Footer />
    </>
  );
};

export default MovieDataContainer;
