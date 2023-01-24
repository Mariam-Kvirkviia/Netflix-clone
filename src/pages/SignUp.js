import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
let apiKey = "AIzaSyA4wtGrODPPnHrjrdA7oHHgHwHaI58u3qQ";
const SignUp = () => {
  let { user,setUser } = UserAuth();
  let passwordREF = useRef();
  let emailREF = useRef();
  let history = useHistory();
  function handleForm(e) {
    e.preventDefault();
    let email = emailREF.current.value;
    let password = passwordREF.current.value;
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          history.replace("/");
          console.log(user);
        } else {
          return response.json().then((data) => {
            throw new Error(data?.error?.message || "something went wrong!");
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
    emailREF.current.value = "";
    passwordREF.current.value = "";
  }
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        alt="netflix-background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/cc64d770-7293-4227-a688-12dc56973c86/GE-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <div className="bg-black/60 h-screen w-full fixed top-0 left-0"></div>
      <div className="fixed px-4 py-24 z-50 w-full">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <form onSubmit={handleForm}>
              <input
                type="email"
                placeholder="Email or phone number"
                className=" my-[30px] w-full h-[50px] rounded-md bg-slate-100 p-2 text-black"
                ref={emailREF}
              ></input>
              <input
                type="password"
                ref={passwordREF}
                placeholder="Password"
                className=" mb-[30px] w-full h-[50px] rounded-md bg-slate-100 p-2 text-black"
              ></input>
              <button className="text-xl w-full bg-[#e50914] my-[10px] rounded-md p-[10px]">
                Sign up
              </button>
              <div className="text-gray-400 flex justify-between items-center">
                <p>
                  <input type="checkbox" className="" />
                  <span className="ml-1 ">Remember me</span>
                </p>
                <p>Need help?</p>
              </div>
              <div className="text-gray-400 flex justify-start items-center mt-6">
                <p>Already subscribed to Netflix?</p>
                <Link to="/login" className="text-white ml-1">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
