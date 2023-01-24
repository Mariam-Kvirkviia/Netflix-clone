import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
let apiKey = "AIzaSyA4wtGrODPPnHrjrdA7oHHgHwHaI58u3qQ";

let AuthContext = createContext({});
export function AuthContextProvider({ children }) {
  let [user, setUser] = useState(false);
  let history = useHistory();
  function signUp(email, password) {
    return fetch(
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
          setUser(true);
        } else {
          return response.json().then((data) => {
            throw new Error("something went wrong!");
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function logIn(email, password) {
    console.log(email, password);
    return fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
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
          setUser(true);
        } else {
          return response.json().then((data) => {
            throw new Error("something went wrong!");
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function logOut(email, password) {
    return setUser(false);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signUp,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
