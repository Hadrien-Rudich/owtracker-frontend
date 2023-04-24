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
      <div className="login_container flex justify-center py-12">
        <div className=" inputandbutton_container flex flex-col items-center justify-evenly bg-inactiveColor text-mainText w-60 h-60 shadow-lg rounded-sm">
          <div className="input_container flex flex-col gap-4 text-black">
            <label type="email">
              <p className="">Email</p>
              <input
                className="inner-shadow shadow-md"
                value={email}
                onChange={handleEmailChange}
                required
                type="email"
              />
            </label>
            <label type="password">
              <p className=" ">Password</p>
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                required
                className="inner-shadow shadow-md"
              />
            </label>
          </div>
          <div className="button_container flex flex-row gap-4">
            <button
              onClick={handleCancel}
              type="reset"
              className="w-16 h-6 text-mainText  bg-secondaryColor  hover:scale-110 shadow-md rounded-sm"
            >
              <p className="">Cancel</p>
            </button>
            <button
              onClick={handleLogIn}
              type="submit"
              className="w-16 h-6 text-secondaryText bg-thirdColor  hover:scale-110 shadow-md rounded-sm"
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
