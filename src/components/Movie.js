import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
const Movie = (props) => {
  let movie = props.data;
  let [heart, setHeart] = useState(false);

  let { user } = UserAuth();
  let movieId = doc(db, "users", `${user?.email}`);
  let saveShow = async () => {
    if (user?.email) {
      setHeart(!heart);

      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
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
        <h3 className="flex justify-center items-center  h-full">
          {movie?.title}
        </h3>

        <p onClick={saveShow}>
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
        </p>
      </div>
    </div>
  );
};

export default Movie;
