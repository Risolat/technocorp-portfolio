import React from "react";
import back from "../../../assets/main/back.svg";
import hudud from "../../../assets/portfolio/portfolio4.svg";
import hudud1 from "../../../assets/portfolio/hudud/1.png";
import hudud2 from "../../../assets/portfolio/hudud/2.png";
import hudud3 from "../../../assets/portfolio/hudud/3.png";
import hudud4 from "../../../assets/portfolio/hudud/4.png";
import hudud5 from "../../../assets/portfolio/hudud/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.svg";
import portfolio5 from "../../../assets/portfolio/portfolio5.svg";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const HududiyElektr = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              “Energetikaning virtual ish stoli” axborot tizimi
            </p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              “Hududiy elektr tarmoqlari” AJ
            </p>
          </div>
        </div>
        <div className="portfolio-inner-hudud w-full">
          <img
            width="100%"
            src={hudud}
            alt="hudud"
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
                Axborot tizimini ishlab chiqishdan maqsad Jamiyat faoliyatidagi
                energetika obyektlarining qurilishva taʼmirlash bilan bogʻliq
                boʻlgan jarayonlarni raqamlashtirishdan iboratdir
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={hudud1} alt="hudud" className="w-[45%] h-[45%]" />
            <img src={hudud2} alt="hudud" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                “Hududiy elektr tarmoqlari” AJ faoliyatidagi energetika
                obyektlarining qurilish va taʼmirlash bilan bogʻliq boʻlgan
                jarayonlarni raqamlashtirish
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={hudud5} alt="hudud" className="w-full" />
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
                Energetika obyektlarining qurilish va taʼmirlash bilan bogʻliq
                boʻlgan jarayonlarni raqamlashtirish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={hudud3} alt="hudud" className="w-[45%] h-[45%]" />
            <img src={hudud4} alt="hudud" className="w-[45%] h-[45%]" />
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
            <Link to="/portfolio/uzarxiv" className="w-[48%]">
              <img src={portfolio3} alt="qwerty" className="rounded-xl" />
              <p className="portfolio-item-link">
                O‘zbekiston Respublikasi Madaniyat Vazirligi
              </p>
              <p className="portfolio-item-text">
                “Madaniyat markazlari” yagona portali
              </p>
            </Link>
            <Link to="/portfolio/hududiyElektr" className="w-[48%]">
              <img src={portfolio5} alt="qwerty" className="rounded-xl" />
              <p className="portfolio-item-link">“O‘zarxiv” agentligi</p>
              <p className="portfolio-item-text">
                KINOFOTOFONO ARXIV HUJJATLARI TIZIMI
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HududiyElektr;
