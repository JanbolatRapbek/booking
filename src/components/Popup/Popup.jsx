import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../App";
import "./Popup.scss";
import TimePick from "./TimePick";
import GuestPicker from "./GuestPicker";
import DatePicker from "./DatePicker";
import axios from "axios";
const Popup = ({ restaurant }) => {
  const [calendarVisible, setCalendarVisible] = useState(true);
  const [guestVisible, setGuestVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const { settogglePopup, booking, setBooking } = useContext(SearchContext);

  // const onAddList = (obj) => {
  //   const newBooking = [...booking, obj];
  //   setBooking(newBooking);
  // };

  function next() {
    if (calendarVisible) {
      setCalendarVisible(false);
      setTimeVisible(true);
    } else if (timeVisible) {
      setTimeVisible(false);
      setGuestVisible(true);
    }
  }
  function back() {
    if (guestVisible) {
      setGuestVisible(false);
      setTimeVisible(true);
    } else if (timeVisible) {
      setTimeVisible(false);
      setCalendarVisible(true);
    }
  }

  const onAdd = () => {
    if (!date) {
      alert("Выбирите дату");
      return;
    }
    if (!time) {
      alert("Выбирите время");
      return;
    }
    if (!guests) {
      alert("Укажите число гостей");
      return;
    }
    axios
      .post(" http://localhost:3000/booking", {
        restaurant,
        date: date,
        time: time,
        guests: guests,
      })
      .then((response) => {
        setBooking([...booking, response.data]);
      }, {})
      .catch((err) => console.log(err.response.data));
  };

  return (
    <SearchContext.Provider value={{ next }}>
      <div className="popup_wrapper">
        <div className="popup_book">
          <h3>Бронирования</h3>
          <svg
            onClick={() => settogglePopup(false)}
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Close_SM">
              <path
                id="Vector"
                d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          {calendarVisible && (
            <DatePicker
              date={date}
              setDate={setDate}
              next={() => next()}
            ></DatePicker>
          )}
          {timeVisible && (
            <TimePick
              time={time}
              setTime={setTime}
              next={() => next()}
              back={() => back()}
            ></TimePick>
          )}
          {guestVisible && (
            <GuestPicker
              onAdd={onAdd}
              guests={guests}
              setGuests={setGuests}
              next={() => next()}
              back={() => back()}
              onClick={() => settogglePopup(false)}
            ></GuestPicker>
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
};
export default Popup;
