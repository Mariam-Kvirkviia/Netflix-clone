import React from "react";

const Movie = (props) => {
  let movie = props.data;

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        id={movie?.id}
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
    </div>
  );
};

export default Movie;
