import React from "react";

const MovieDetailShimmer = () => {
  return (
    <div className=" flex gap-16 mt-96 h-screen">
      <div className="grid grid-cols-12 gap-12 items-center">
        <div className="parent-container col-span-4">
          <div className=" shimmer-container img-wrap ">
            <div className="shimmer w-80 h-96"></div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="detail">
            <div className="name">
              <p className="w-full h-3 bg-white" />
            </div>
            <div className="genrs flex mt-4 gap-2">
              <p className="w-full h-3 bg-white" />
            </div>
            <div className="rating mt-4">
              <div className="w-20 h-20 p-2 leading-2">
                <p className="w-full h-3 bg-white" />
              </div>
            </div>
            <div className="overview mt-4">
              <p className="w-full h-3 bg-white" />
              <p className="w-full h-3 bg-white py-2" />
              <p className="w-full h-3 bg-white py-2" />
            </div>
            <div className="flex  border-gray-500 mt-4 gap-2 py-2">
              <p className="w-full h-3 bg-white" />
              <p className="text-white text-2xl border-e border-gray px-2">
                <p className="w-full h-3 bg-white" />
              </p>
              <p className="text-white text-2xl px-2">
                <p className="w-full h-3 bg-white" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailShimmer;
