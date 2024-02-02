import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import useMovieDetails from "../Hooks/useMovieDetails"
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [data, setdata] = useState();
  const { id } = useParams()
  useMovieDetails(id, setdata);
  if (!data) return
  console.log(data)
  return (
    <div className='bg-gray-800 px-52 py-14 flex gap-16'>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <div className='img-wrap w'>
            <img className='h-96 object-cover' src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} />
          </div>

        </div>
        <div className='col-span-8'>
          <div className='detail'>
            <div className='name'>
              <p className='text-4xl font-bold text-gray-200'>{data?.title}</p>
            </div>
            <div className='genrs flex mt-4 gap-2'>
              {data.genres.map((elm) => <p key={elm.id} className='bg-pink-700 text-white text-sm px-2 py-1 rounded-full'>{elm?.name}</p>)}
            </div>
            <div className='rating mt-4'>
              <div className='w-16 h-16 border-4 border-white rounded-full text-white text-center text-4xl p-2'>
                {Math.floor(data?.vote_average)}
              </div>
            </div>
            <div className='overview mt-4'>
              <h1 className="text-4xl text-gray-200"> Overview</h1>
              <p className='mt-2 text-gray-300 text-lg'>{data?.overview}</p>
            </div>
            <div className='flex border-t-2 border-gray-500 mt-4 gap-2 py-2'>
              <p className='text-white text-2xl border-e-2 border-gray px-2'> Status : <span className='text-xl text-gray-500'>{data.status}</span></p>
              <p className='text-white text-2xl border-e-2 border-gray px-2'> Release : <span className='text-xl text-gray-500'>{data.release_date}</span></p>
              <p className='text-white text-2xl px-2'> Run Time : <span className='text-xl text-gray-500'>{Math.round(data.runtime/60)+"hr"}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;
