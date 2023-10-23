import React from "react";
import back from "../../../assets/main/back.svg";
import mt from "../../../assets/portfolio/mt/big1.png";
import mt1 from "../../../assets/portfolio/mt/1.png";
import mt2 from "../../../assets/portfolio/mt/2.png";
import mt3 from "../../../assets/portfolio/mt/3.png";
import mt4 from "../../../assets/portfolio/mt/4.png";
import mt5 from "../../../assets/portfolio/mt/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.svg";
import portfolio4 from "../../../assets/portfolio/portfolio4.svg";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Mt = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">mt.technocorp.uz</p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              Milliy tiklanish demokratik partiyasi
            </p>
          </div>
        </div>
        <div className="portfolio-inner-ivv w-full">
          <img
            width="100%"
            src={mt}
            alt="mt"
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
                Oʻzbekiston “Milliy tiklanish” demokratik partiyasi rasmiy
                veb-sayti foydalanuvchilariga partiya faoliyati toʻgʻrisida
                barcha zarur maʼlumotlarni internet tarmogʻi orqali tezkor
                taqdim etib borish hamda zarur maʼlumotlar bazasini
                shakllantirish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={mt1} alt="mt" className="w-[45%] h-[45%]" />
            <img src={mt2} alt="mt" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Partiya faoliyati toʻgʻrisida barcha zarur maʼlumotlarni
                internet tarmogʻi orqali tezkor taqdim etib borish, shaffoﬂigi
                ochiqligini ta'minlash
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={mt5} alt="mt" className="w-full" />
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
                Partiya faoliyati maʼlumotlarni internet tarmogʻi orqali tezkor
                berib borish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={mt3} alt="mt" className="w-[45%] h-[45%]" />
            <img src={mt4} alt="mt" className="w-[45%] h-[45%]" />
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
            <Link to="/portfolio/mt" className="w-[48%]">
              <img src={portfolio3} alt="qwerty" className="rounded-xl" />
              <p className="portfolio-item-link">
                O‘zbekiston Respublikasi mt Vazirligi
              </p>
              <p className="portfolio-item-text">
                “mt markazlari” yagona portali
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

export default Mt;
