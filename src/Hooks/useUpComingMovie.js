import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { UpComingMovie } from "../utils/moviesSlice";

const useUpComingMovie = () => {
    const dispath = useDispatch()
    const nowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
        const json = await data.json()
        dispath(UpComingMovie(json.results))
        // console.log(json)
    }
    useEffect(() => {
        nowPlayingMovies()
    }, [])

}
export default useUpComingMovie;