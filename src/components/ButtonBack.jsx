import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate;
  function goBack() {
    navigate("/");
  }
  return (
    <Button type="primary" onClick={goBack}>
      Back
    </Button>
  );
}

export default ButtonBack;
