// components/LoginForm.jsx
import React, { useState } from "react";
import styled from "styled-components";
import icon from "../images/icon.png";
import { useNavigate } from 'react-router-dom';

const StyledWrapper = styled.div`
  .form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
  }

  .form .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form input[type="email"],
  .form input[type="password"] {
    border-radius: 0.5rem;
    padding: 1rem 0.75rem;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
  }

  .form input[type="email"]:focus,
  .form input[type="password"]:focus {
    outline: 2px solid var(--clr);
  }

  .label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
  }

  .form .submit {
    padding: 1rem 0.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .form .submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
  }

  .span {
    text-decoration: none;
    color: var(--bg-dark);
  }

  .span a {
    color: var(--clr);
  }
`;

const LoginForm = ({ onLoginSuccess, onNavigateToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        onLoginSuccess();
      } else {
        alert("Credenciales incorrectas");
      }
    } else {
      alert("No hay usuario registrado con esas credenciales");
    }
  };

  const navigate = useNavigate();
  const handleNavigateToRegister = () => {
    navigate("/register");
  };


  return (
    <StyledWrapper>
      <form className="form login-form" onSubmit={handleSubmit}>
        <img src={icon} alt="Logo" height={90} width={90} />
        <h1>TaskHere</h1>
        <p>Tu app de tareas</p>
        <span className="input-span">
          <label htmlFor="email" className="label">
            Correo
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </span>
        <span className="span">
          <a href="" onClick={handleNavigateToRegister}>
            No tienes cuenta? Registrarse
          </a>
        </span>
        <input className="submit" type="submit" defaultValue="Log in" />
      </form>
    </StyledWrapper>
  );
};

export default LoginForm;
