import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"

const useSearchMovies=(movieName,setSearchData)=>{
    const searchMovies=async()=>{
      const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}`,API_OPTIONS);
      const json =await data.json();
      setSearchData(json.results)
    //   setRecommendData(json.results)
    }
    useEffect(()=>{
        searchMovies();
    },[])
}

export default useSearchMovies;