import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center w-full p-4  absolute z-[100]  justify-between ">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4">Sign in</button>
        <button className="bg-red-700 px-6 text-white py-2 rounded">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
