import React from "react";

const BackgroundMovieTitle = ({ title, des, date, rating }) => {
    const popularity=rating.toFixed(1)
  return (
    <div className="pt-[18%] w-full aspect-video absolute text-white top-0 bg-gradient-to-r from-gray-900">
      <div className="lg:px-12 md:px-8 px-2  pt-20">
        <div className="title lg:mb-4 md:md-4">
          <h1 className="lg:text-6xl text-xl text-bold lg:w-8/12">{title}</h1>
        </div>
        <div className="decription">
          <p className="py-4 w-6/12 lg:text-lg text-sm lg:block md:blockl">
            {des}
          </p>
        </div>
        <div className="flex gap-4 mb-4 lg:mt-0">
          <p className="text-xl border-e pe-2">
            Release: <span className="text-gray-500 text-lg">{date}</span>
          </p>
          <p className="text-xl">
            Rating: <span className="text-gray-500 text-lg">{popularity+"/10"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMovieTitle;
