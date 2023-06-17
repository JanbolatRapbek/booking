import React, { useState } from "react";
import "./Popup.scss";

const TimePick = ({ onAdd, setTime, time, next, back }) => {
  return (
    <div className="time">
      <div className="time_pick">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={() => next()}>Далее</button>
      <button onClick={() => back()}>Назад</button>
    </div>
  );
};
export default TimePick;
