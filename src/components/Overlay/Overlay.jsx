import "./Overlay.scss";
import React from "react";
import { SearchContext } from "../../App";

const Overlay = ({ setOpenUser }) => {
  const { booking, onRemoveBook, settogglePopup, togglePopup, onEdit } =
    React.useContext(SearchContext);

  return (
    <div className="overlay">
      <div className="list">
        <div className="list_header">
          <h1>Бронирование</h1>
          <svg
            onClick={() => {
              setOpenUser(false);
            }}
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
        </div>

        <div className="list_content">
          {!booking.length && <h2>Бронирование отсутствует </h2>}
          {booking.map((item, index) => (
            <div className="card" key={index}>
              <div className="svg">
                <svg
                  onClick={() => onRemoveBook(item)}
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
              </div>
              <div className="list_info">
                {" "}
                <h3>Называние ресторана:{item.restaurant}</h3>
                <h3>Дата:{item.date}</h3>
                <h3>Время:{item.time}</h3>
                <h3>Число гостей:{item.guests}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
