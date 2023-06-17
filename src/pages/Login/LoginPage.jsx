import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import "../style.scss";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login_form">
        <h1>Войти</h1>
        <Login></Login>
        <p>
          или <Link to="/register">Регистрация</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
