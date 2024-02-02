import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux";
import "../App.css"

const RecommendedMoviesList = () => {
  const movies = useSelector((store) => store.movie?.addNowPlayingMovie);
  const popularMovies = useSelector((store) => store.movie?.popularMovie);
  const topRatedMovie = useSelector((store) => store.movie?.topRatedMovie);
  const UpComingMovie = useSelector((store) => store.movie?.UpComingMovie);
  const FavMovies =useSelector((store)=>store.FavMovie.MoviesList)
  // if(!FavMovies) return;
  // console.log(FavMovies)
  return (
    <div className='z-20 bg-black movies-wrapper'>
      <div className=' relative lg:-mt-24 cardMovie'>
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovie} />
        <MovieList title={"Up Comming"} movies={UpComingMovie} />
        <MovieList title="Favourite Movies" movies={FavMovies}/>
      </div>
    </div>
  )
}

export default RecommendedMoviesList
