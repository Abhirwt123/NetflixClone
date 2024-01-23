import React from 'react'
import Header from './Header'
import SearchBox from './SearchBox'

const SearchPage = () => {
    return (
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg')] w-full h-screen">
            <Header />
            <SearchBox />
        </div>
    )
}

export default SearchPage;
