import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authStore from '../../store/authStore';
import InputField from '../InputField';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    navigate('/');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    logIn();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profiles');
    }
  });

  return (
    <div className="register_container flexdiv row lg:mt-44 my-24">
      <form action="submit">
        <div className=" inputandbutton_container containerbox">
          <div className="input_container flexdiv col gap-4">
            <InputField
              label="Email"
              type="email"
              value={email}
              required
              onChange={handleEmailChange}
            />

            <InputField
              label="Password"
              type="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />

            <InputField
              label="Confirm"
              type="password"
              value={confirmPassword}
              required
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="button_container flexdiv gap-6">
            <button
              onClick={handleCancelClick}
              type="button"
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
}

export default RegisterForm;
