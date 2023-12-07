import React from "react";
import back from "../../../assets/main/back.svg";
import audioBooks from "../../../assets/portfolio/audioBooks/big1.png";
import audioBooks1 from "../../../assets/portfolio/audioBooks/1.png";
import audioBooks2 from "../../../assets/portfolio/audioBooks/2.png";
import audioBooks3 from "../../../assets/portfolio/audioBooks/3.png";
import audioBooks4 from "../../../assets/portfolio/audioBooks/4.png";
import audioBooks5 from "../../../assets/portfolio/audioBooks/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.png";
import portfolio4 from "../../../assets/portfolio/portfolio4.png";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const AudioBooks = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              “Audiokitoblar” mobil ilovasi
            </p>
          </Link>
          <div className="hidden md:block">
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              O‘zbeksiton Respublikasi Madaniyat vazirligi
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            width="100%"
            src={audioBooks}
            alt="audioBooks"
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
                Oʻzbekiston Respublikasi Madaniyat vazirligi huzuridagi Koʻzi
                ojizlar markaziy kutubxonasidagi mavjud audiomateriallar
                bazasini shakllantirish va ularni saqlashni tashkil etish
                platformasini yaratish hamda foydalanuvchilarga
                audiomateriallardan keng foydalanish imkoniyatini taʼminlash.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img
              src={audioBooks1}
              alt="audioBooks"
              className="w-full md:w-[45%] h-[45%] mb-5 rounded-lg"
            />
            <img
              src={audioBooks2}
              alt="audioBooks"
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
                Kutubxona resurslarini keng kitobxonlarga taqdim etish, global
                Internet tarmogʻi, jumladan, mobil ilova orqali keng foydalanish
                imkoniyatini yaratish, internet tarmogʻining milliy segmentida
                adabiyotlarni izlash, tinglash uchun zarur vositalar bilan
                taʼminlash orqali aholining, ayniqsa, yoshlarning axborot
                resurslariga boʻlgan ehtiyojini qondirish, kutubxona resurslari
                maʼlumotlar bazasini shakllantirish va yuritish.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={audioBooks5} alt="audioBooks" className="w-full" />
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
                {/* audioBooks vazirligi faoliyati, yangiliklari shaffoﬂigi
                yuzasidan doimiy ravishda ma'lumotlar berib borish */}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img
              src={audioBooks3}
              alt="audioBooks"
              className="w-full md:w-[45%] h-[45%] mb-5 rounded-lg"
            />
            <img
              src={audioBooks4}
              alt="audioBooks"
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

export default AudioBooks;
