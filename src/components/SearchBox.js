import React, { useRef} from "react";
import { useSelector } from "react-redux";
import { SEARCH_BOX_LANG_CONFIG } from "../utils/constant";

const SearchBox = () => {
  const searchText=useRef()
  const changedlang = useSelector((store) => store.supportedlang.Lang);
  const handelMovieSaerch=()=>{
    console.log(searchText.current.value)
  }
  return (
    <div className="flex justify-center items-center pt-[8%] drop-shadow-2xl">
      <div className="grid grid-cols-12 justify-between searchBox bg-black p-4 rounded-lg w-5/12 items-center">
        <div className="input-wrap col-span-9 ">
          <input
            ref={searchText}
            type="text"
            placeholder={SEARCH_BOX_LANG_CONFIG[changedlang].placeholderText}
            className="px-2 py-1 bg-transparent text-white w-full border-none outline-none"
          />
        </div>
        <div className="btn-wrap col-span-3">
          <button className="px-4 py-2 bg-red-700 text-white rounded-md" onClick={handelMovieSaerch}>
            {SEARCH_BOX_LANG_CONFIG[changedlang].btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
