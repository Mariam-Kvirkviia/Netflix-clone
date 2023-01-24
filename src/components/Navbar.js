import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  let { user, setUser, logOut } = UserAuth();
  console.log(user);
  let history = useHistory();
  let handleLoggingOut = async () => {
    try {
      await logOut();
      history.replace("/");
      setUser(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center w-full p-4  absolute z-[100]  justify-between ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <Link to="/sign">
            <button
              className="bg-red-700 px-6 text-white py-2 rounded"
              onClick={handleLoggingOut}
            >
              Sign out
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign in</button>
          </Link>
          <Link to="/sign">
            <button className="bg-red-700 px-6 text-white py-2 rounded">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
