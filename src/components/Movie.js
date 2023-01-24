import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Movie = (props) => {
  let movie = props.data;
  let [heart, setHeart] = useState(false);
  let [saved, setSaved] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      {movie?.backdrop_path ? (
        <img
          id={movie?.id}
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      ) : (
        ""
      )}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <h3 className="flex justify-center items-center h-full">
          {movie?.title}
        </h3>

        {!heart ? (
          <FaRegHeart
            className="absolute top-3 left-3"
            onClick={() => setHeart(!heart)}
          />
        ) : (
          <FaHeart
            className="absolute top-3 left-3"
            onClick={() => setHeart(!heart)}
          />
        )}
      </div>
    </div>
  );
};

export default Movie;
