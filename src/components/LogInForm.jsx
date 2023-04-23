import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authStore } from "../store/authStore";

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
      <div className="login_container flex justify-center py-12">
        <div className=" inputandbutton_container flex flex-col items-center justify-evenly bg-inactiveColor text-mainText w-60 h-60 ">
          <div className="input_container flex flex-col gap-4 text-black">
            <label type="email">
              <p>Email</p>
              <input value={email} onChange={handleEmailChange} type="email" />
            </label>
            <label type="password">
              <p>Password</p>
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
              />
            </label>
          </div>
          <div className="button_container flex flex-row gap-4">
            <button
              onClick={handleCancel}
              type="reset"
              className=" text-mainText  bg-secondaryColor w-16 h-6 hover:scale-110"
            >
              Cancel
            </button>
            <button
              onClick={handleLogIn}
              type="submit"
              className="text-secondaryText bg-thirdColor w-16 h-6 hover:scale-110"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
