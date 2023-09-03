import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUser, setIsValidUser] = useState(true);

  const emailIsValid = (input: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    setIsValidUser(!emailIsValid(value) || password.length < 7);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    setIsValidUser(!emailIsValid(email) || value.length < 7);
  };

  const formIsValid = isValidUser === true;

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email: `${email}` }));
    navigate('/meals');
  };

  return (
    <form className="meals">
      <input
        type="email"
        data-testid="email-input"
        name="email"
        value={ email }
        onChange={ handleChangeEmail }
      />
      <input
        type="password"
        data-testid="password-input"
        name="password"
        value={ password }
        onChange={ handleChangePassword }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick={ handleSubmit }
        disabled={ formIsValid }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
//