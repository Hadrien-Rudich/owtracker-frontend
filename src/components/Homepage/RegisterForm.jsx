import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoggedIn, logIn } = authStore();

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleRegister = (e) => {
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
      <div className="register_container flex justify-center my-24">
      <div className=" inputandbutton_container flex flex-col justify-center items-center gap-8 w-60 py-8 bg-inactiveColor shadow-lg rounded-sm">
      <div className="input_container flex flex-col gap-4">
            <label type="email">
              <p className="">Email</p>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                required
                className="inner-shadow shadow-md rounded-sm"
              />
            </label>
            <label type="password">
              <p className="">Password</p>
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                required
                className="inner-shadow shadow-md rounded-sm"
              />
            </label>
            <label type="password">
              <p className="">Confirm Password</p>
              <input
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
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
              className="button cancel"
            >
              Cancel
            </button>
            <button
              onClick={handleRegister}
              type="submit"
              className="button validate"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
