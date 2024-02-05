import React from 'react'
import Header from '../ResuedComponent/Header';
import useNowPlayingMovies from '../../Hooks/useMovie';
import MovieContainer from '../BrowsePage/MovieContainer';
import usePopularMovie from '../../Hooks/usePopularMovie';
import useTopRatedMovie from '../../Hooks/useTopRatedMovie';
import useUpComingMovie from '../../Hooks/useUpComingMovie';
import { useSelector } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage';
import Footer from '../ResuedComponent/Footer';


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
