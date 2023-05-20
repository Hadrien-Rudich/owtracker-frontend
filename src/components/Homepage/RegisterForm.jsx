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

  const handleCancelClick = () => {
    navigate("/");
  };

  const handleRegister = (e) => {
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
    <div className="register_container flexdiv row lg:my-96 my-24">
      <form action="submit">
        <div className=" inputandbutton_container flexdiv col gap-8 w-60 py-8 bg-inactiveColor shadow-lg rounded-sm">
          <div className="input_container flexdiv col gap-4">
            <label type="email">
              <p className="">Email</p>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                required
                className="input"
              />
            </label>
            <label type="password">
              <p className="">Password</p>
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                required
                className="input"
              />
            </label>
            <label type="password">
              <p className="">Confirm Password</p>
              <input
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                type="password"
                required
                className="input"
              />
            </label>
          </div>
          <div className="button_container flexdiv gap-4">
            <button
              onClick={handleCancelClick}
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
      </form>
    </div>
  );
};

export default RegisterForm;
