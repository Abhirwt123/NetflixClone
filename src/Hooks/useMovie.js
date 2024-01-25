import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispath = useDispatch()
    const nowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json()
        dispath(addMovie(json.results))
        console.log(json.results)
    }
    useEffect(() => {
        nowPlayingMovies()
    }, [])

}
export default useNowPlayingMovies;