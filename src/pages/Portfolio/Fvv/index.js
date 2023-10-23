import React from "react";
import back from "../../../assets/main/back.svg";
import fvv from "../../../assets/portfolio/fvv/big1.png";
import fvv1 from "../../../assets/portfolio/fvv/1.png";
import fvv2 from "../../../assets/portfolio/fvv/2.png";
import fvv3 from "../../../assets/portfolio/fvv/3.png";
import fvv4 from "../../../assets/portfolio/fvv/4.png";
import fvv5 from "../../../assets/portfolio/fvv/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.svg";
import portfolio4 from "../../../assets/portfolio/portfolio4.svg";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Fvv = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">www.fvv.uz</p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              Toshkent viloyati FV vazirligi
            </p>
          </div>
        </div>
        <div className="portfolio-inner w-full">
          <img
            width="100%"
            src={fvv}
            alt="fvv"
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
                Favqulodda vaziyatlar sohasida yongʻin qutqaruv qismlari
                faoliyatini elektronlashtirish va maʼlumotlar bazalarini yagona
                platformada toʻplash orqali faoliyatda zaruriy maʼlumotlarga ega
                boʻlish va yongʻin qutqaruv qismlaridagi jarayonlar
                toʻgʻrisidagi maʼlumotlarni elektron tarzda shakllantirish hamda
                yongʻin qutqaruv qismlariga biriktirilgan qutqaruv texnikalarni
                (anjomlarni) ekspluatatsiyasini elektron tarzda shakllantirish
                va nazoratini olib borish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={fvv1} alt="fvv" className="w-[45%] h-[45%]" />
            <img src={fvv2} alt="fvv" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Favqulodda vaziyatlar sohasida yongʻin qutqaruv qismlari
                faoliyatini elektronlashtirish va yagona maʼlumotlar bazasini
                shakllantirish orqali zaruriy maʼlumotlarga ega boʻlish va
                yongʻin qutqaruv qismlaridagi jarayonlar toʻgʻrisidagi
                maʼlumotlarni to‘plash
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={fvv5} alt="fvv" className="w-full" />
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
                Yongʻin qutqaruv qismlari faoliyatini elektronlashtirish va
                yagona maʼlumotlar bazasini shakllantirish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={fvv3} alt="fvv" className="w-[45%] h-[45%]" />
            <img src={fvv4} alt="fvv" className="w-[45%] h-[45%]" />
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

export default Fvv;
