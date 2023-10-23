import React from "react";
import back from "../../../assets/main/back.svg";
import aoka from "../../../assets/portfolio/aoka/big1.png";
import aoka1 from "../../../assets/portfolio/aoka/1.png";
import aoka2 from "../../../assets/portfolio/aoka/2.png";
import aoka3 from "../../../assets/portfolio/aoka/3.png";
import aoka4 from "../../../assets/portfolio/aoka/4.png";
import aoka5 from "../../../assets/portfolio/aoka/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.png";
import portfolio4 from "../../../assets/portfolio/portfolio4.png";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Aoka = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              AOKA uchun “MEDIA REJA” axborot tizimi
            </p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              Axborot va ommaviy kommunikatsiyalar agentligi
            </p>
          </div>
        </div>
        <div className="portfolio-inner-ivv w-full">
          <img
            width="100%"
            src={aoka}
            alt="aoka"
            className="block max-w-full rounded-lg"
          />
        </div>
        <div className="mx-[24px]">
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha maqsadi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Davlat va xoʻjalik boshqaruvi organlari, mahalliy ijro etuvchi
                hokimiyat organlari, boshqa tashkilot va idoralarda turli
                yoʻnalishlarda rejalashtirilgan tadbirlar haqidagi
                (media-rejalarga kiritilgan) maʼlumotlarni toʻplash, saqlash,
                qayta ishlash va monitoring qilish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={aoka1} alt="aoka" className="w-[45%] h-[45%]" />
            <img src={aoka2} alt="aoka" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Axborot tizimni qoʻllash sohasi sifatida davlat organlarida
                amalga oshirilishi kerak boʻlgan turli tadbirlarni Agentlik va
                davlat organlari tomonidan ATga kiritib media-rejalarni
                shakllantirilishiga qaratilgan
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={aoka5} alt="aoka" className="w-full" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">
                Loyiha funksiyalari
              </p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Tadbirlar haqida umumiy maʼlumotlarni shakllantirish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={aoka3} alt="aoka" className="w-[45%] h-[45%]" />
            <img src={aoka4} alt="aoka" className="w-[45%] h-[45%]" />
          </div>
          <div className="my-[50px]">
            {/* <div className="flex items-center mb-5">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">
                Ishlatilgan texnalogiyalar
              </p>
            </div>
            <div className="flex items-center">
              <img src={figma} alt="figma" className="mr-3" />
              <img src={figma} alt="figma" className="mr-3" />
              <img src={figma} alt="figma" className="mr-3" />
              <img src={figma} alt="figma" className="mr-3" />
            </div> */}
          </div>
          <p className="portfolio-inner-text">O‘xshash proyektlar</p>
          <div className="flex flex-wrap justify-between w-full">
            <Link to="/portfolio/madaniyat" className="w-[48%]">
              <img src={portfolio3} alt="qwerty" className="rounded-xl" />
              <p className="portfolio-item-link">
                O‘zbekiston Respublikasi Madaniyat Vazirligi
              </p>
              <p className="portfolio-item-text">
                “Madaniyat markazlari” yagona portali
              </p>
            </Link>
            <Link to="/portfolio/hududiyElektr" className="w-[48%]">
              <img src={portfolio4} alt="qwerty" className="rounded-xl" />
              <p className="portfolio-item-link">
                “Hududiy elektr tarmoqlari” AJ
              </p>
              <p className="portfolio-item-text">
                “Energetikaning virtual ish stoli” axborot tizimi
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aoka;
