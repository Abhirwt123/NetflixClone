import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { topRatedMovie } from "../utils/moviesSlice";

const useTopRatedMovie = () => {
    const dispath = useDispatch()
    const nowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
        const json = await data.json()
        dispath(topRatedMovie(json.results))
        // console.log(json)
    }
    useEffect(() => {
        nowPlayingMovies()
    }, [])

}
export default useTopRatedMovie;