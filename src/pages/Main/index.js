import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/main/logo.svg";
import menu from "../../../src/assets/main/menu.svg";
import first from "../../../src/assets/main/1.png";
import second from "../../../src/assets/main/2.jpg";
import third from "../../../src/assets/main/3.png";
import fourth from "../../../src/assets/main/4.png";
import fifth from "../../../src/assets/main/5.png";
import sixth from "../../../src/assets/main/6.png";

const Main = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col py-5">
          <div className="flex justify-between mb-5">
            <Link to="/services" className="block w-[58%] h-[100%]">
              <div className="main-img">
                <p className="main-text">Bizning xizmatlar</p>
              </div>
            </Link>
            <Link to="/about" className="block w-[38%] h-[100%]">
              <div className="main-img-second">
                <p className="main-text">Biz haqimizda</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-between mb-5">
            <Link to="/partners" className="block w-[38%] h-[100%]">
              <div className="main-img-third">
                <p className="main-text">hamkorlarimiz</p>
              </div>
            </Link>
            <Link to="/portfolio" className="block w-[58%] h-[100%]">
              <div className="main-img-fourth">
                <p className="main-text">Portfolio</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-between mb-5">
            <Link to="/team" className="block w-[58%] h-[100%]">
              <div className="main-img-fifth">
                <p className="main-text">Bizning jamoa</p>
              </div>
            </Link>
            <Link to="/audit" className="block w-[38%] h-[100%]">
              <div className="main-img-sixth">
                <p className="main-text">Akt va AX Audit</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="contacts">Kontaktlar</p>
          <p className="portfolio-inner-purpose-title">+998 (55) 501-43-00</p>
        </div>
      </div>
    </div>
  );
};

export { Main };
