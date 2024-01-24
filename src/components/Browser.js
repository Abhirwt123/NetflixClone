import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useMovie';
import MovieContainer from './MovieContainer';
import usePopularMovie from '../Hooks/usePopularMovie';
import useTopRatedMovie from '../Hooks/useTopRatedMovie';
import useUpComingMovie from '../Hooks/useUpComingMovie';
import { useSelector } from 'react-redux';
import SearchPage from './SearchPage';
import Footer from './Footer';


const Browser = () => {
  const searchMovie = useSelector((store) => store.Gpt.searchMovie);
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpComingMovie();
  return (
    <div>
      <Header/>
      {searchMovie ? <SearchPage /> :<MovieContainer /> }
      <Footer/>
    </div>
  )
}

export default Browser;
