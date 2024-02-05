import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"

const useMovieCast=(id,setCastData)=>{
    const movieCast=async()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`,API_OPTIONS);
      const json =await data.json();
      // console.log(json)
      setCastData(json)
    }
    useEffect(()=>{
        movieCast();
    },[])
}

export default useMovieCast;