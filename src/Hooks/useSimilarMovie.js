import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"

const useSimilarMovie=(id,setSimilarMovieData)=>{
    const similarMovie=async()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`,API_OPTIONS);
      const json =await data.json();
      // console.log(json)
      setSimilarMovieData(json.results)
    }
    useEffect(()=>{
        similarMovie();
    },[])
}

export default useSimilarMovie;