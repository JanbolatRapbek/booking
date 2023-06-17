import React, { useState } from "react";

import "./Navbar.scss";

import Overlay from "../Overlay/Overlay";

const Navbar = ({ email, booking }) => {
  const [openUser, setOpenUser] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <h2 className="logo">Booking</h2>
      </div>
      <div className="navbarItems">
        <h4>{email}</h4>
        <svg
          onClick={() => setOpenUser(!openUser)}
          fill="#000000"
          width="55px"
          height="55px"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M228,128A100,100,0,1,0,60.71,201.90967a3.97048,3.97048,0,0,0,.842.751,99.79378,99.79378,0,0,0,132.8982-.00195,3.96558,3.96558,0,0,0,.83813-.74756A99.76267,99.76267,0,0,0,228,128ZM36,128a92,92,0,1,1,157.17139,64.87207,75.616,75.616,0,0,0-44.50782-34.04053,44,44,0,1,0-41.32714,0,75.61784,75.61784,0,0,0-44.50782,34.04A91.70755,91.70755,0,0,1,36,128Zm92,28a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,156ZM68.86475,198.417a68.01092,68.01092,0,0,1,118.27.00049,91.80393,91.80393,0,0,1-118.27-.00049Z" />
        </svg>
      </div>
      {openUser && <Overlay booking={booking} setOpenUser={setOpenUser} />}
    </div>
  );
};

export default Navbar;
