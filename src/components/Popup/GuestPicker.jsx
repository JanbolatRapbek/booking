import React, { useState, useContext } from "react";
import { SearchContext } from "../../App";
import axios from "axios";

const GuestPicker = ({ guests, setGuests, next, back, onClick, onAdd }) => {
  return (
    <div className="guest">
      <input
        value={guests}
        placeholder="Количество гостей"
        onChange={(e) => setGuests(e.target.value)}
      ></input>
      <button
        onClick={() => {
          next();
          onAdd();
          onClick();
        }}
      >
        Далее
      </button>
      <button onClick={() => back()}>Назад</button>
    </div>
  );
};

export default GuestPicker;
