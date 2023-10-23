import React from "react";
import back from "../../../assets/main/back.svg";
import avtoyul from "../../../assets/portfolio/portfolio10.svg";
import avtoyul1 from "../../../assets/portfolio/avtoyul/1.png";
import avtoyul2 from "../../../assets/portfolio/avtoyul/2.png";
import avtoyul3 from "../../../assets/portfolio/avtoyul/3.png";
import avtoyul4 from "../../../assets/portfolio/avtoyul/4.png";
import avtoyul5 from "../../../assets/portfolio/avtoyul/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.svg";
import portfolio4 from "../../../assets/portfolio/portfolio4.svg";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Uzavtoyul = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">www.uzavtoyul.uz</p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              O‘zbekiston Respublikasi avtomobil yo‘llari qo‘mitasi
            </p>
          </div>
        </div>
        <div className="portfolio-inner w-full">
          <img
            width="100%"
            src={avtoyul}
            alt="avtoyul"
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
                Saytni ishlab chiqishdan maqsad — Qoʻmitaning faoliyati bilan
                tanishish, mavjud, ishonchli, tezkor maʼlumotlarni olish hamda
                foydalanuvchilarga qoʻmita haqidagi maʼlumotlarni ochiqligini,
                shaffoﬂikni taʼminlashdan iboratdir
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={avtoyul1} alt="avtoyul" className="w-[45%] h-[45%]" />
            <img src={avtoyul2} alt="avtoyul" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Sayt barcha foydalanuvchilarni Qoʻmita tomonidan amalga
                oshirilayotgan faoliyati va ishlar haqida internet tarmogʻi
                orqali tezkor taqdim etib borish, interaktiv xizmatlarni onlayn
                koʻrsatish, rasmiy materiallar (hujjatlar, fotosuratlar,
                videolar) bilan taʼminlaydi
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={avtoyul5} alt="avtoyul" className="w-full" />
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
                Avtomobil yoʻllarini moliyalashtirish, loyihalashtirish, qurish,
                taʼmirlash haqida ma’lumotlar taqdim etish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={avtoyul3} alt="avtoyul" className="w-[45%] h-[45%]" />
            <img src={avtoyul4} alt="avtoyul" className="w-[45%] h-[45%]" />
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

export default Uzavtoyul;
