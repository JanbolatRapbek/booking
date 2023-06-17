import { Link } from "react-router-dom";
import SignUp from "../../components/SignUp";
import "../style.scss";

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="register_form">
        <h1> Регистрация</h1>
        <SignUp></SignUp>
        <p>
          Есть аккаунт ? <Link to="/login">Войти</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
