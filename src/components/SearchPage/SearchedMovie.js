import React, { useState } from 'react'
import useSearchMovies from '../../Hooks/useSearchMovies'
import MovieCard from '../ResuedComponent/MovieCard';
import { useSelector } from 'react-redux';

const SearchedMovie = () => {
    const movieName=useSelector((store)=>store.movie.searchMovie);
    const [searchData,setSearchData]=useState()
    console.log(movieName);
    useSearchMovies(movieName,setSearchData);
    if(searchData===null||!searchData)return;
  return (
    <div className='px-32 mt-8 py-10 justify-center items-center'>
    <div className="flex flex-wrap movies-wrapper gap-16">
        {searchData.map((movie) => (
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
