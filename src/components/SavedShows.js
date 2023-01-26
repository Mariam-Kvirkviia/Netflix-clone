import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { AiOutlineClose } from "react-icons/ai";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { async } from "@firebase/util";
function SavedShows() {
  let [movies, setMovies] = useState([]);
  let { user } = UserAuth();
  let scrollLeft = () => {
    console.log(23);
    let left = document.getElementById("slider");
    left.scrollLeft = left.scrollLeft - 500;
  };
  let scrollRight = () => {
    let left = document.getElementById("slider");
    left.scrollLeft = left.scrollLeft + 500;
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      if (doc.data()?.savedShows) {
        setMovies(doc.data().savedShows);
      }
    });
  }, [user?.email]);
  let movieRef = doc(db, "users", `${user?.email}`);
  let removeMovie = async (passedId) => {
    try {
      let result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="text-white fond-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="cursor-pointer bg-white rounded-full left-0 absolute opacity-50 hidden z-10 hover:opacity-100 group-hover:block"
          size={40}
          onClick={scrollLeft}
        />
        <div
          id="slider"
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, id) => {
            return (
              <div
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                key={id}
              >
                <img
                  id={movie?.id}
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie?.title}
                />

                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <h3 className="flex justify-center items-center h-full">
                    {movie?.title}
                  </h3>
                  <p className="text-white absolute top-3 right-3">
                    <AiOutlineClose
                      onClick={() => {
                        removeMovie(movie.id);
                      }}
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          className="cursor-pointer bg-white rounded-full right-0 absolute opacity-50 z-10 hidden hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default SavedShows;
