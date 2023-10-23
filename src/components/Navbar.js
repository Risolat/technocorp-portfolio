import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/main/logo.svg";
import facebook from "../assets/main/facebook.svg";
import insta from "../assets/main/insta.svg";
import telegram from "../assets/main/telegram.svg";
import youtube from "../assets/main/youtube.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="p-[24px]">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[80%] h-[80%]" />
          </Link>
          <div className="social-media-list">
            <Link to="https://facebook.com/technocorpuzb" target="_blank">
              <img src={facebook} alt="photo" />
            </Link>
            <Link to="http://instagram.com/technocorp.uz" target="_blank">
              <img src={insta} alt="photo" />
            </Link>
            <Link to="https://t.me/technocorpuz" target="_blank">
              <img src={telegram} alt="photo" />
            </Link>
            <Link to="https://www.youtube.com/@technocorpuzb" target="_blank">
              <img src={youtube} alt="photo" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
