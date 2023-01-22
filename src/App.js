import Navbar from "./components/Navbar";
import { Fragment } from "react";
import HomePage from "./pages/Home";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Main from "./components/Main";
import Auth from "./pages/Auth";
import LogIn from "./pages/LogIn";
import { AuthContextProvider } from "./context/AuthContext";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sign" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <LogIn />
        </Route>
        <Route path="/account" exact>
          <Account />
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}
export default App;
