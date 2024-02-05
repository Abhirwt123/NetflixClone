import React, { useState } from 'react'
import useRecommendationMovie from '../../Hooks/useRecommendationMovie'
import { useParams } from 'react-router-dom'
import MovieCard from '../ResuedComponent/MovieCard'
import MovieListShimmer from '../ShimmerUI/MovieListShimmer'

const RecommendateMovie = () => {
    const [recommendateData,setRecommendData]=useState()
    const {id}=useParams()
    useRecommendationMovie(id,setRecommendData);
    if(!recommendateData) return <div className='mt-10'><MovieListShimmer/></div> ;
  return (
    <>
      <p className="text-3xl text-white my-4">Recommendate Movies</p>
      <div className="flex overflow-x-scroll movies-wrapper gap-6">
        {recommendateData.map((movie) => (
          <MovieCard
          obj={movie}
            id={movie.id}
            key={movie.id}
            movieKey={movie.poster_path}
          />
        ))}
      </div>
    </>
  )
}

export default RecommendateMovie
