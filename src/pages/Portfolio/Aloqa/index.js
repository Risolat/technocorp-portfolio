import React from "react";
import back from "../../../assets/main/back.svg";
import aloqa from "../../../assets/portfolio/aloqa/big1.png";
import aloqa1 from "../../../assets/portfolio/aloqa/1.png";
import aloqa2 from "../../../assets/portfolio/aloqa/2.png";
import aloqa3 from "../../../assets/portfolio/aloqa/3.png";
import aloqa4 from "../../../assets/portfolio/aloqa/4.png";
import aloqa5 from "../../../assets/portfolio/aloqa/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.png";
import portfolio4 from "../../../assets/portfolio/portfolio4.png";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Aloqa = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              “Aloqa nazorati” mobil ilovasi
            </p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              “O‘zkomnazorat” inspeksiyasi
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            width="100%"
            src={aloqa}
            alt="aloqa"
            className="block max-w-full"
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
                Fuqarolarning “Oʻzkomnazorat” inspeksiyasiga toʻgʻridan-toʻgʻri
                muammolarni yoʻllash va murojaat qilish imkoniyatini yaratish
                hamda murojaatchilarga oʻz murojaati ijro etilish bosqichlarini
                kuzatib turish imkoniyatini taqdim etish va maʼlumotlarni
                tahlil, monitoring qilish jarayonlarida yuzaga kelgan muammolar
                uchun tezkor tegishli chora-tadbirlarni amalga oshiruvchi
                mukammal mexanizmni yaratish.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img
              src={aloqa1}
              alt="aloqa"
              className="w-[45%] h-[45%] rounded-lg"
            />
            <img
              src={aloqa2}
              alt="aloqa"
              className="w-[45%] h-[45%] rounded-lg"
            />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Axborotlashtirish va telekommunikatsiyalar sohasidagi mavjud
                muammo va murojaatlarni (fotosuratni yuklash imkoniyati bilan)
                mobil ilova orqali “Oʻzkomnazorat” inspeksiyasiga tezkorlik
                bilan yuborish, “Oʻzkomnazorat” inspeksiyasiga fuqarolarning
                toʻgʻridan-toʻgʻri muammolarni yoʻllash va murojaat qilish
                imkoniyatini oshirish, Axborotlashtirish va
                telekommunikatsiyalar sohasidagi real vaziyatga baho berish
                imkoniyatini oshirish, Fuqarolarga oʻzlari tomonidan yuborilgan
                murojaatlarning holati, ijrochilari hamda ijro muddatlari
                toʻgʻrisidagi maʼlumotlar berib boorish.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={aloqa5} alt="aloqa" className="w-full" />
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
                {/* aloqa vazirligi faoliyati, yangiliklari shaffoﬂigi
                yuzasidan doimiy ravishda ma'lumotlar berib borish */}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img
              src={aloqa3}
              alt="aloqa"
              className="w-[45%] h-[45%] rounded-lg"
            />
            <img
              src={aloqa4}
              alt="aloqa"
              className="w-[45%] h-[45%] rounded-lg"
            />
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

export default Aloqa;
