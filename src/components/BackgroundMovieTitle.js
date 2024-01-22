import React from 'react';

const BackgroundMovieTitle = ({ title, des }) => {
    return (
        <div className='pt-[18%] w-full aspect-video absolute text-white top-0 bg-gradient-to-r from-gray-900'>
           <div className='px-12'>
           <div className='title'>
                <h1 className='lg:text-6xl text-lg text-bold lg:w-8/12'>{title}</h1>
            </div>
            <div className='decription'>
                <p className='py-8 lg:w-6/12 lg:text-lg text-sm lg:block md:block hidden'>{des}</p>
            </div>
            <div className='flex gap-4 mb-4'>
                <button className='lg:px-6 px-4 py-2 border-2 rounded-md bg-white text-black'>Play</button>
                <button className='lg:px-6 px-4 py-2 border-2 rounded-md bg-gray-500 text-white'>More INfo</button>
            </div>
           </div>
        </div>
    )
}

export default BackgroundMovieTitle
