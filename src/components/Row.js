import React from "react";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
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
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full left-0 absolute opacity-50 hidden z-10 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id="slider"
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
        >
          {movies.length > 0
            ? movies.map((movie) => {
                return <Movie data={movie} key={movie.id} />;
              })
            : null}
        </div>
        <MdChevronRight
          className="bg-white rounded-full right-0 absolute opacity-50 z-10 hidden hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};
export default Row;
