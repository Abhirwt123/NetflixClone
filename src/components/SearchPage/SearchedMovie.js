import React, { useEffect, useState } from 'react'
import MovieCard from '../ResuedComponent/MovieCard';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../../utils/constant';

const SearchedMovie = () => {
  const movieName = useSelector((store) => store.movie.searchMovie);
  const [movieData, setMovieData] = useState()
  useEffect(() => {
    const searchMovies = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}`, API_OPTIONS);
      const json = await data.json();
      setMovieData(json.results)
    }
    searchMovies()
  }, [movieName])
  console.log(movieName)
  if (!movieName) return;
  return (
    <div className='px-32 mt-8 py-10 justify-center items-center'>
      <div className="flex flex-wrap movies-wrapper gap-8 justify-center">
        {movieData.map((movie) => (
          <MovieCard
            obj={movie}
            id={movie.id}
            key={movie.id}
            movieKey={movie.poster_path}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchedMovie
