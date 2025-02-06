import { useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("/dashboard");
  }
  return 
}

export default ProtectedRoute;
