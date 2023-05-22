import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

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
      navigate("/profiles");
    }
    [isLoggedIn, navigate];
  });

  return (
    <form action="submit">
      <div className="login_container flexdiv lg:my-96 my-24">
        <div className=" inputandbutton_container flexdiv col gap-8 w-60 py-8 bg-inactiveColor shadow-lg rounded-sm">
          <div className="input_container flexdiv col gap-4">

            <InputField
              label="Email"
              type="email"
              value={email}
              required={true}
              onChange={handleEmailChange}
              autoFocus={true}
            />

            <InputField
              label="Password"
              type="password"
              value={password}
              required={true}
              onChange={handlePasswordChange}
            />
            
          </div>
          <div className="button_container flexdiv  gap-4">
            <button
              onClick={handleCancel}
              type="reset"
              className="button cancel "
            >
              <p className="">Cancel</p>
            </button>
            <button
              onClick={handleLogIn}
              type="submit"
              className="button validate"
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
