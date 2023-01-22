import Navbar from "./components/Navbar";
import { Fragment } from "react";
import HomePage from "./pages/Home";
import Sign from "./pages/Sign";
import Main from "./components/Main";
import Auth from "./pages/Auth";
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
          <Sign />
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}
export default App;
