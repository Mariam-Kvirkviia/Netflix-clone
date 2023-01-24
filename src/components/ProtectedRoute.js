import { UserAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
function ProtectedRoute({ children }) {
  let history = useHistory();
  let { user } = UserAuth();
  if (!user) {
    history.replace("/");
  } else {
    return children;
  }
}

export default ProtectedRoute;
