import React, { useState } from "react";

const SearchBox = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="flex justify-center items-center pt-[8%] drop-shadow-2xl">
      <div className="grid grid-cols-12 justify-between searchBox bg-black p-4 rounded-lg w-5/12 items-center">
        <div className="input-wrap col-span-9 ">
          <input
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value)
            }}
            type="text"
            placeholder="Search Movies Here"
            className="px-2 py-1 bg-transparent text-white w-full border-none outline-none"
          />
        </div>
        <div className="btn-wrap col-span-3">
          <button className="px-4 py-2 bg-red-700 text-white rounded-md">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
