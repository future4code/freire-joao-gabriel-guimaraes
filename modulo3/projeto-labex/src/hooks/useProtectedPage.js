import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      navigate("/login");
    }
  }, [navigate]);
};
export default useProtectedPage;
