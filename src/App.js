import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

import axios from "axios";
import GuestPicker from "./components/Popup/GuestPicker";

export const SearchContext = React.createContext();

function App() {
  const [togglePopup, settogglePopup] = React.useState(false);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/booking")
      .then((data) => setBooking(data.data));
  }, []);

  const onRemove = (id) => {
    const newBooking = booking.filter((item) => item.id !== id);
    setBooking(newBooking);
  };

  const onRemoveBook = (item) => {
    if (
      window.confirm(`"Вы действительно хотите удалить бронь №${item.id}?"`)
    ) {
      axios
        .delete("http://localhost:3000/booking/" + item.id)
        .then(() => {
          onRemove(item.id);
        })
        .catch(() => {
          alert("Не удалось удалить бронь");
        });
    }
  };

  return (
    <div>
      <SearchContext.Provider
        value={{
          settogglePopup,
          booking,
          togglePopup,
          setBooking,
          onRemoveBook,
          onRemove,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/guests" element={<GuestPicker></GuestPicker>}></Route>
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
