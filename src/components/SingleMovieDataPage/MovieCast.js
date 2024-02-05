import React, { useState } from "react";
import useMovieCast from "../../Hooks/useMovieCast";
import { useParams } from "react-router-dom";
import { FAKE_AVATAR } from "../../utils/constant";

const MovieCast = () => {
  const [castData, setCastData] = useState();
  const { id } = useParams();
  useMovieCast(id, setCastData);
  if (!castData) return;
  // console.log(castData);
  return (
    <div>
      <h1 className="text-3xl text-white my-4">Movie Cast</h1>
      <div className="flex overflow-x-scroll gap-12 movies-wrapper">
        {castData?.cast?.map((actor) => (
          <div key={actor.id}>
            <div className="h-32 aspect-square rounded-full overflow-hidden">
              <img
                src={ actor.profile_path?`https://image.tmdb.org/t/p/w500/${actor.profile_path}`:FAKE_AVATAR}
                alt="cast-img"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xl text-white text-center">{actor?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
