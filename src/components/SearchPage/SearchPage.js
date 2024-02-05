import React from 'react'
import Header from '../ResuedComponent/Header'
import SearchBox from './SearchBox'
import SearchedMovie from './SearchedMovie'

const SearchPage = () => {
    return (
        <div className="bg-gray-800 w-full min-h-screen">
            <Header />
            <SearchBox />
            <SearchedMovie/>
        </div>
    )
}

export default SearchPage;
