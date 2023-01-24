import { createContext, useContext, useEffect, useState } from "react";
let apiKey = "AIzaSyA4wtGrODPPnHrjrdA7oHHgHwHaI58u3qQ";
let AuthContext = createContext({});
export function AuthContextProvider({ children }) {
  let [user, setUser] = useState({});
  function signUp(email, password) {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        body: {
          email,
          password,
          returnSecureToken: true,
        },
      }
    );
  }
  function logIn(email, password) {
    fetch(
      `identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        body: {
          email,
          password,
          returnSecureToken: true,
        },
      }
    );
  }
  function logOut(email, password) {}
  return (
    <AuthContext.Provider value={(user, setUser, signUp, logIn, logOut)}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
