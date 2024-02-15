import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, DUMMY_PROFILE_PATH} from "../../utils/constant";

const MovieCast = () => {
  const [castData, setCastData] = useState();
  const { id } = useParams();
  useEffect(()=>{
    const movieCast=async()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`,API_OPTIONS);
      const json =await data.json();
      setCastData(json)
    }
    movieCast()
  },[id])
  if (!castData) return;
  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl text-xl text-white my-4">Movie Cast</h1>
      <div className="flex overflow-x-scroll gap-12 movies-wrapper">
        {castData?.cast?.map((actor) => (
          <div key={actor.id}>
            <div className="h-32 aspect-square rounded-full overflow-hidden">
              <img
                src={ actor.profile_path?`https://image.tmdb.org/t/p/w500/${actor.profile_path}`:DUMMY_PROFILE_PATH}
                alt="cast-img"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="lg:text-xl md:text-lg text-sm text-white text-center">{actor?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
