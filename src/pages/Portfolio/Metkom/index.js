import React from "react";
import back from "../../../assets/main/back.svg";
import metkom from "../../../assets/portfolio/metkom/big1.png";
import metkom1 from "../../../assets/portfolio/metkom/1.png";
import metkom2 from "../../../assets/portfolio/metkom/2.png";
import metkom3 from "../../../assets/portfolio/metkom/3.png";
import metkom4 from "../../../assets/portfolio/metkom/4.png";
import metkom5 from "../../../assets/portfolio/metkom/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.png";
import portfolio4 from "../../../assets/portfolio/portfolio4.png";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Metkom = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              “Metkom-taxi” mobil ilovasi
            </p>
          </Link>
          <div className="hidden md:block">
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              “O‘zmetkombinat” Aksiyadorlik jamiyati
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            width="100%"
            src={metkom}
            alt="metkom"
            className="block max-w-full"
          />
        </div>
        <div className="mx-[24px]">
          <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
            <div className="flex items-center w-full md:w-[35%] mb-2">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha maqsadi</p>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                “O‘zkombinat” Aksiyadorlik jamiyati hududida belgilangan
                marshrut yo‘nalishi bo‘yicha avtotransport vositalari harakati,
                kelib-ketish jadvali, geojoylashuvi onlayn tarzda kuzatish hamda
                buyurtma berish orqali avtotransport vositasini chaqirish.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img
              src={metkom1}
              alt="metkom"
              className="w-full md:w-[45%] mb-5 h-[45%] rounded-lg"
            />
            <img
              src={metkom2}
              alt="metkom"
              className="w-full md:w-[45%] h-[45%] rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
            <div className="flex items-center w-full md:w-[35%] mb-2">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                “Oʻzkombinat” Aksiyadorlik jamiyati hududida belgilangan
                marshrut yoʻnalishilarini onlayn tarzda kuzatish va monitoring
                olib borish.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={metkom5} alt="metkom" className="w-full" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
            <div className="flex items-center w-full md:w-[35%] mb-2">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">
                Loyiha funksiyalari
              </p>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                {/* metkom vazirligi faoliyati, yangiliklari shaffoﬂigi
                yuzasidan doimiy ravishda ma'lumotlar berib borish */}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img
              src={metkom3}
              alt="metkom"
              className="w-full md:w-[45%] mb-5 h-[45%] rounded-lg"
            />
            <img
              src={metkom4}
              alt="metkom"
              className="w-full md:w-[45%] h-[45%] rounded-lg"
            />
          </div>
          <div className="my-[50px]">
          </div>
          <p className="portfolio-inner-text">O‘xshash proyektlar</p>
          <div className="flex flex-col md:flex-row flex-wrap justify-between w-full">
            <Link to="/portfolio/madaniyat" className="w-full md:w-[48%]">
              <img src={portfolio3} alt="qwerty" className="rounded-xl" />
              <p className="portfolio-item-link">
                O‘zbekiston Respublikasi Madaniyat Vazirligi
              </p>
              <p className="portfolio-item-text">
                “Madaniyat markazlari” yagona portali
              </p>
            </Link>
            <Link to="/portfolio/hududiyElektr" className="w-full md:w-[48%]">
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

export default Metkom;
