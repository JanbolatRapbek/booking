import React, { useContext, useState } from "react";
import "./Book.scss";
import Popup from "../Popup/Popup";
import { SearchContext } from "../../App";

const Book = ({ items }) => {
  const { togglePopup, settogglePopup } = React.useContext(SearchContext);
  const [restaurant, setRestaurant] = useState([]);

  return (
    <div className="wrapper">
      <div className="content">
        {items.map((item, index) => (
          <div key={index} className="content_card">
            <img alt="restaurant" src={item.imgUrl}></img>
            <h2>{item.name}</h2>

            <button
              className="btn"
              onClick={() => {
                settogglePopup(!togglePopup);
                setRestaurant(item.name);
              }}
            >
              Бронировать
              <svg
                onClick={() => settogglePopup(!togglePopup)}
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#000000"
                  fillRule="evenodd"
                  d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
                />
              </svg>
            </button>
          </div>
        ))}

        {togglePopup && (
          <div className="popup-form">
            <Popup settogglePopup={settogglePopup} restaurant={restaurant} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
