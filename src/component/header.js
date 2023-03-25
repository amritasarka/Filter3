import React from "react";
import h from "./filterbutton.module.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const Header = ({ontiktokclick,oninstagramclick,}) => {
 
  return (
    <>
      <div className={h.headercontainer}>
        <div className={h.tiktokicons}>
          <FaTiktok size={32} color="#69C9D0" onClick={ontiktokclick}/>
          <FaInstagram size={32} color="#E4405F" onClick={oninstagramclick}/>
        </div>
      </div>
    </>
  );
};

export default Header;
