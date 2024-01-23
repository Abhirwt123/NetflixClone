import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/moviesSlice";

const useBackgroundMovieTrailer = () => {
  const dispath = useDispatch();
  const bgMovieId = useSelector((store) => store?.movie?.addNowPlayingMovie);
  // if (!bgMovieId) return;
  const id = bgMovieId[1].id;
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterdMovieTrailer = json.results.filter((video) => {
      return video.type === "Trailer";
    });
    // console.log(filterdMovieTrailer)
    const TrailerVideo = filterdMovieTrailer[0];
    dispath(addMovieTrailer(TrailerVideo));
  };
    useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useBackgroundMovieTrailer;
