import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Navigate } from "react-router-dom";
import Book from "../../components/Book/Book.jsx";
import { useAuth } from "../../hooks/use-auth.jsx";
import DB from "../../assets/DB.json";

const HomePage = () => {
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <Navbar email={email}></Navbar>
      <Book items={DB.lists}></Book>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
