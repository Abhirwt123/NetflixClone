import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"

const useRecommendationMovie=(id,setRecommendData)=>{
    const recommendationMovie=async()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`,API_OPTIONS);
      const json =await data.json();
      // console.log(json)
      setRecommendData(json.results)
    }
    useEffect(()=>{
        recommendationMovie();
    },[])
}

export default useRecommendationMovie;