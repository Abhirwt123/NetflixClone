import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../ResuedComponent/MovieCard'
import MovieListShimmer from '../ShimmerUI/MovieListShimmer'
import { API_OPTIONS } from '../../utils/constant'

const RecommendateMovie = () => {
    const [recommendateData,setRecommendData]=useState()
    const {id}=useParams()
    useEffect(()=>{
      const recommendationMovie=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`,API_OPTIONS);
        const json =await data.json();
        setRecommendData(json.results)
      }
      recommendationMovie()
    },[id])
    if(!recommendateData) return <div className='mt-10'><MovieListShimmer/></div> ;
  return (
    <>
      <p className="lg:text-3xl md:text-2xl text-xl text-white my-4">Recommendate Movies</p>
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
