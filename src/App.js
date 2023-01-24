import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
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
        <ProtectedRoute>
          <Route path="/account" exact>
            <Account />
          </Route>
        </ProtectedRoute>
      </Switch>
    </AuthContextProvider>
  );
}
export default App;
