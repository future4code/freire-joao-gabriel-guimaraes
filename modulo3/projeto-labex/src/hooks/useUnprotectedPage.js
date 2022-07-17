import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      navigate("/admin/trips/list");
    }
  }, [navigate]);
};
export default useUnprotectedPage;
