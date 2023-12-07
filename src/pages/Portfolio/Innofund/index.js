import React from "react";
import back from "../../../assets/main/back.svg";
import innofund from "../../../assets/portfolio/portfolio9.png";
import innofund1 from "../../../assets/portfolio/innofund/1.png";
import innofund2 from "../../../assets/portfolio/innofund/2.png";
import innofund3 from "../../../assets/portfolio/innofund/3.png";
import innofund4 from "../../../assets/portfolio/innofund/4.png";
import innofund5 from "../../../assets/portfolio/innofund/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.png";
import portfolio from "../../../assets/portfolio/portfolio.png";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Innofund = () => {
  return (
    <div>
      <Navbar />
      <div className="p-[24px]">
        <div className="flex items-end justify-between mb-[30px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">www.innofund.uz</p>
          </Link>
          <div className="hidden md:block">
            <p className="portfolio-item-link text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">Innofund</p>
          </div>
        </div>
      </div>
      <div className="portfolio-innofund w-full">
        <img src={innofund} alt="innofund" className="w-full" />
      </div>
      <div className="p-[24px]">
        <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
          <div className="flex items-center w-full md:w-[35%] mb-2">
            <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
            <p className="portfolio-inner-purpose-title">Loyiha maqsadi</p>
          </div>
          <div className="w-full md:w-[65%]">
            <p className="portfolio-inner-purpose-text px-4">
              Ilm-fanni moliyalashtirish va innovatsiyalarni qoʻllab-quvvatlash
              jamgʻarmasi rasmiy veb-sayti foydalanuvchilariga Jamgʻarma
              faoliyati toʻgʻrisida barcha zarur maʼlumotlarni internet tarmogʻi
              orqali tezkor taqdim etib borish, interaktiv xizmatlarni onlayn
              koʻrsatish hamda zarur maʼlumotlar bazasini shakllantirish
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src={innofund1} alt="adliya" className="w-full md:w-[45%] mb-5 h-[45%]" />
          <img src={innofund2} alt="adliya" className="w-full md:w-[45%] h-[45%]" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
          <div className="flex items-center w-full md:w-[35%] mb-2">
            <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
            <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
          </div>
          <div className="w-full md:w-[65%]">
            <p className="portfolio-inner-purpose-text px-4">
              Jamgʻarma faoliyati toʻgʻrisida amalga oshirilgan tashabbuslar,
              innovatsion loyihalar toʻgʻrisidagi maʼlumotlarni internet
              tarmogʻi orqali tezkor taqdim etib borish, interaktiv xizmatlarni
              onlayn koʻrsatish
            </p>
          </div>
        </div>
        <div className="w-full">
          <img src={innofund5} alt="innofund" className="w-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
          <div className="flex items-center w-full md:w-[35%] mb-2">
            <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
            <p className="portfolio-inner-purpose-title">Loyiha funksiyalari</p>
          </div>
          <div className="w-full md:w-[65%]">
            <p className="portfolio-inner-purpose-text px-4">
              Internet foydalanuvchilari orasida innovatsion muhitni
              shakllantirishga hissa qoʻshish
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src={innofund3} alt="adliya" className="w-full md:w-[45%] mb-5 h-[45%]" />
          <img src={innofund4} alt="adliya" className="w-full md:w-[45%] h-[45%]" />
        </div>
        <div className=" my-[50px]">
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
            <img src={portfolio} alt="qwerty" className="rounded-xl" />
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
  );
};

export default Innofund;
