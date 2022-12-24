import React from "react";
import { useEffect, useState } from "react";
import Movie from "./Movie";
const Row = ({ title, fetchURL }) => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white fond-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id="slider">
          {movies.length > 0
            ? movies.map((movie) => {
                return <Movie data={movie} key={movie.id} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};
export default Row;
