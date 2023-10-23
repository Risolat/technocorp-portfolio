import React from "react";
import back from "../../../assets/main/back.svg";
import adliya from "../../../assets/portfolio/portfolio2.svg";
import adliya1 from "../../../assets/portfolio/adliya/1.png";
import adliya2 from "../../../assets/portfolio/adliya/2.png";
import adliya3 from "../../../assets/portfolio/adliya/3.png";
import adliya4 from "../../../assets/portfolio/adliya/4.png";
import adliya5 from "../../../assets/portfolio/adliya/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.svg";
import portfolio4 from "../../../assets/portfolio/portfolio4.svg";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Adliya = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">www.adliya.uz</p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              O'zbekiston Respublikasi Adliya vazirligi
            </p>
          </div>
        </div>
        <div className="portfolio-inner w-full">
          <img
            width="100%"
            src={adliya}
            alt="adliya"
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
                Adliya vazirligi vakolatiga kiruvchi dasturlarning amalga
                oshirilishi, hisobot davridagi faoliyat rejalari, ochiq
                tanlovlar, kim oshdi savdolari, tenderlar, ekspertizalar,
                fuqarolar murojaatlarini va foydalanuvchilar soʻrovlarini koʻrib
                chiqish tartibi, tegishli soʻrovni rasmiylashtirishning taxminiy
                namunasi, mavjud vakant lavozimlar, qonun hujjatlariga muvoﬁq
                davlat hokimiyati va boshqaruv organining faoliyati
                toʻgʻrisidagi boshqa axborotlarni joylashtirib borish
                rejalashtirilgan
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={adliya1} alt="adliya" className="w-[45%] h-[45%]" />
            <img src={adliya2} alt="adliya" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Aloqa, axborotlashtirish va telekommunikatsiya texnologiyalari
                va O'zkomnazorat inspeksiyasi faoliyati toʻgʻrisida barcha zarur
                maʼlumotlarni internet tarmogʻi orqali tezkor taqdim etib
                borish, interaktiv xizmatlarni onlayn koʻrsatish hamda zarur
                maʼlumotlar bazasini shakllantirish.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={adliya5} alt="adliya" className="w-full" />
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
                Adliya vazirligi faoliyati, yangiliklari shaffoﬂigi yuzasidan
                doimiy ravishda ma'lumotlar berib borish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={adliya3} alt="adliya" className="w-[45%] h-[45%]" />
            <img src={adliya4} alt="adliya" className="w-[45%] h-[45%]" />
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

export default Adliya;
