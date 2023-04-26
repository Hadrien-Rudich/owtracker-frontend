import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authStore } from "../../store/authStore";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, logIn } = authStore();

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    logIn();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/game");
    }
    [isLoggedIn, navigate];
  });

  return (
    <form action="submit">
      <div className="login_container flex justify-center my-24">
        <div className=" inputandbutton_container flex flex-col justify-center items-center gap-8 w-60 py-8 bg-inactiveColor shadow-lg rounded-sm">
          <div className="input_container flex flex-col gap-4">
            <label type="email">
              <p className="text-sm">Email</p>
              <input
                className="inner-shadow shadow-md rounded-sm"
                value={email}
                onChange={handleEmailChange}
                required
                type="email"
              />
            </label>
            <label type="password">
              <p className="text-sm">Password</p>
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                required
                className="inner-shadow shadow-md rounded-sm"
              />
            </label>
          </div>
          <div className="button_container flex gap-4">
            <button
              onClick={handleCancel}
              type="reset"
              className="w-16 h-6 text-sm text-mainText  bg-secondaryColor  hover:scale-110 shadow-md rounded-sm"
            >
              <p className="">Cancel</p>
            </button>
            <button
              onClick={handleLogIn}
              type="submit"
              className="w-16 h-6 text-sm text-secondaryText bg-thirdColor  hover:scale-110 shadow-md rounded-sm"
            >
              <p className="">Log in</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
