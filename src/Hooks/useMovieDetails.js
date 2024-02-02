import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieDetails=(id,setdata)=>{
    const Moviedata=async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}`,API_OPTIONS);
        const json =await data.json();
        setdata(json)
    }
    useEffect(()=>{
        Moviedata();
    },[])
}
export default useMovieDetails;