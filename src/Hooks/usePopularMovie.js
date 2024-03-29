import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { popularMovie } from "../utils/moviesSlice";

const usePopularMovie = () => {
    const dispath = useDispatch()
    const nowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const json = await data.json()
        dispath(popularMovie(json.results))
        // console.log(json)
    }
    useEffect(() => {
        nowPlayingMovies()
    }, [])

}
export default usePopularMovie;