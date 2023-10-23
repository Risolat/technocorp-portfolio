import React from "react";
import back from "../../../assets/main/back.svg";
import madaniyat from "../../../assets/portfolio/portfolio3.png";
import madaniyat1 from "../../../assets/portfolio/madaniyat/1.png";
import madaniyat2 from "../../../assets/portfolio/madaniyat/2.png";
import madaniyat3 from "../../../assets/portfolio/madaniyat/3.png";
import madaniyat4 from "../../../assets/portfolio/madaniyat/4.png";
import madaniyat5 from "../../../assets/portfolio/madaniyat/big2.png";
import portfolio5 from "../../../assets/portfolio/portfolio5.png";
import portfolio4 from "../../../assets/portfolio/portfolio4.png";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Madaniyat = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              "Madaniyat markazlari" yagona portali
            </p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              O'zbekiston Respublikasi Madaniyat vazirligi
            </p>
          </div>
        </div>
        <div className="portfolio-inner-ivv w-full">
          <img
            width="100%"
            src={madaniyat}
            alt="madaniyat"
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
                Madaniyat markazlari pasportlari, xodimlar toʻgʻrisidagi
                maʼlumotlar, mavjud binolar holati hamda ularni taʼmirlash,
                rekonstruksiya qilish yoki yangi bino qurib berishni
                asoslantiruvchi aniq tahliliy maʼlumotlar tayyorlash va
                madaniyat markazlarida mavjud badiiy havaskorlik jamoalari va
                toʻgaraklari, ulardagi ishtirokchilar va ular toʻgʻrisidagi
                maʼlumotlarni yigʻib borish va monitoring oʻtkazish hamda badiiy
                jamoalarni repertuarni yagona bazasini shakllantirishdan iborat
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={madaniyat1} alt="madaniyat" className="w-[45%] h-[45%]" />
            <img src={madaniyat2} alt="madaniyat" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Madaniyat markazlari pasportlari, xodimlar toʻgʻrisidagi
                maʼlumotlar, mavjud binolar holati haqida maʼlumotlar
                tayyorlash, madaniyat markazlarida mavjud jamoalar, ulardagi
                ishtirokchilar va ular toʻgʻrisidagi maʼlumotlarni yigʻib borish
                va monitoring oʻtkazish
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={madaniyat5} alt="madaniyat" className="w-full" />
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
                Madaniyat markazlari faoliyatini raqamlashtirish va havaskor
                jamoalar ijodini ommaga yoritish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={madaniyat3} alt="madaniyat" className="w-[45%] h-[45%]" />
            <img src={madaniyat4} alt="madaniyat" className="w-[45%] h-[45%]" />
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
              <img src={portfolio5} alt="qwerty" className="rounded-xl" />
              <p className="portfolio-item-link">“O‘zarxiv” agentligi</p>
              <p className="portfolio-item-text">
                KINOFOTOFONO ARXIV HUJJATLARI TIZIMI
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

export default Madaniyat;
