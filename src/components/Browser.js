import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useMovie';
import MovieContainer from './MovieContainer';
import usePopularMovie from '../Hooks/usePopularMovie';
import useTopRatedMovie from '../Hooks/useTopRatedMovie';
import useUpComingMovie from '../Hooks/useUpComingMovie';

const Browser = () => {
 useNowPlayingMovies()
 usePopularMovie()
 useTopRatedMovie()
 useUpComingMovie()
  return (
    <div>
      <Header />
      <div className='browser-body'>
       <MovieContainer/>
      </div> 
    </div>
  )
}

export default Browser;
