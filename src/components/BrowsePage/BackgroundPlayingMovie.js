import React from "react";
import useBackgroundMovieTrailer from "../../Hooks/useBackgroundMovieTrailer";
import { useSelector } from "react-redux";

const BackgroundPlayingMovie = () => {
  const TrailerKey = useSelector((store) => store.movie?.addTrailer);
  useBackgroundMovieTrailer();
  return (
    <div>
      <iframe
        className="w-full aspect-video border-none outline-none"
        src={
          "https://www.youtube.com/embed/" +
          TrailerKey?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundPlayingMovie;                                                                      
