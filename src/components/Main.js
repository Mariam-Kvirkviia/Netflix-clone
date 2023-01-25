import React, { useEffect, useState } from "react";
import request from "./Request";
const Main = () => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(request.requestPopular)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  let movie = movies[Math.floor(Math.random() * movies.length)];
  let shorter = function (str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute z-200 w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-center"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>

          <div className="mt-7">
            <p className="text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {movie?.overview ? shorter(movie?.overview, 150) : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
