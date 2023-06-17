import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.accesstoken })
        );
        push("/");
      })
      .catch(console.error);
  };

  return <Form title="Создать аккаунт" handleClick={handleRegister}></Form>;
};

export default SignUp;
