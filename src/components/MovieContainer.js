import React from 'react';
import RecommendedMoviesList from './RecommendedMoviesList';
import BackgroundPlayingMovie from './BackgroundPlayingMovie';
import BackgroundMovieTitle from './BackgroundMovieTitle';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
    const movie = useSelector((store) => store.movie?.addNowPlayingMovie);
    // console.log(id)
    if (!movie) return;
    const mainMovie = movie[1];
    const { title, overview } = mainMovie;
    return (
        <div className='wrapper relative '>
            <BackgroundPlayingMovie />
            <BackgroundMovieTitle title={title} des={overview} />
            <RecommendedMoviesList />
        </div>
    )
}

export default MovieContainer;
