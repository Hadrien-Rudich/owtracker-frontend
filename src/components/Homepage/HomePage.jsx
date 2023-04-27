import React from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { authStore } from "../../store/authStore";

const HomePage = () => {
  const { isLoggedIn } = authStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/game");
    }
    [isLoggedIn, navigate];
  });

  return (
    <div className="homepage_container flex justify-center text-secondaryText my-24">
      <div className="button_container flex flex-col justify-center items-center gap-4 w-60 py-8 bg-inactiveColor shadow-lg rounded-sm">
        <Link to="/login">
          <button
            className="button bg-fourthColor"
            type="submit"
          > LOG IN
      
          </button>
        </Link>
        <Link to="/register">
          <button
            className="button validate"
            
            type="submit"
          >
            REGISTER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
