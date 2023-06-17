import React from "react";
import { useState } from "react";
import { Provider } from "react-redux";
export const SearchContext = React.createContext();
const DatePicker = ({ onAdd, date, setDate, next }) => {
  return (
    <div className="date">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={() => next()}>Далее</button>
    </div>
  );
};

export default DatePicker;
