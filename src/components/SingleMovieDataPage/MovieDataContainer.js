import React from "react";
import MovieDetails from "./MovieDetails";
import MovieCast from "./MovieCast";
import SimilarMovie from "./SimilarMovie";
import Footer from "../ResuedComponent/Footer";
import RecommendateMovie from "./RecommendateMovie";

const MovieDataContainer = () => {
  return (
    <>
      <div className="bg-gray-800 lg:px-32 md:px-24 px-6 py-14">
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
