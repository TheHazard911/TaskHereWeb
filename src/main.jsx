// main.jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./components/Loginform";
import Register from "./components/Registerform";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

function AuthWrapper() {
  return (
    <BrowserRouter basename="/TaskHereWeb">
      {/* Añade la propiedad basename */}
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Comprobar si hay un usuario en localStorage al cargar la aplicación
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />}
      />
      <Route
        path="/register"
        element={
          <RegisterPage onRegisterSuccess={() => setIsAuthenticated(true)} />
        }
      />
      <Route
        path="/"
        element={isAuthenticated ? <App /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

function LoginPage({ onLoginSuccess }) {
  const navigate = useNavigate();

  const handleLoginSuccessInternal = () => {
    onLoginSuccess();
    navigate("/");
  };

  return (
    <Login
      onLoginSuccess={handleLoginSuccessInternal}
      onNavigateToRegister={() => navigate("/register")}
    />
  );
}

function RegisterPage({ onRegisterSuccess }) {
  const navigate = useNavigate();

  const handleRegisterSuccessInternal = newUser => {
    localStorage.setItem("user", JSON.stringify(newUser));
    onRegisterSuccess();
    navigate("/");
  };

  return (
    <Register
      onRegisterSuccess={handleRegisterSuccessInternal}
      onNavigateToLogin={() => navigate("/login")}
    />
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Crea la raíz una sola vez

root.render(
  <React.StrictMode>
    <AuthWrapper />
  </React.StrictMode>
);
