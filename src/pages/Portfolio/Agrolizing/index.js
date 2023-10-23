import React from "react";
import back from "../../../assets/main/back.svg";
import agrolizing from "../../../assets/portfolio/agrolizing/big1.png";
import agrolizing1 from "../../../assets/portfolio/agrolizing/1.png";
import agrolizing2 from "../../../assets/portfolio/agrolizing/2.png";
import agrolizing3 from "../../../assets/portfolio/agrolizing/3.png";
import agrolizing4 from "../../../assets/portfolio/agrolizing/4.png";
import agrolizing5 from "../../../assets/portfolio/agrolizing/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.svg";
import portfolio4 from "../../../assets/portfolio/portfolio4.svg";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Agrolizing = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              “Qishloq xo‘jaligi korxonalariga lizing asosida yetkazib
              beriladigan texnikalar uchun mobil ilova
            </p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              “O‘zagrolizing” Aksiyadorlik jamiyati
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            width="100%"
            src={agrolizing}
            alt="agrolizing"
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
                Lizing asosida beriladigan texnikalar, lizing shartlari va
                boshqa maʼlumotlarni keng ommaga yoritish, mobil ilovadan
                roʻyxatdan oʻtgan fermer xoʻjaliklari va yuridik shaxslar uchun
                qulayliklarni taqdim etish, mobil ilovadan foydalanuvchilarning
                lizing bilan bogʻliq boʻlgan harakatlardagi vaqtining tejalishi
                va boshqalar.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img
              src={agrolizing1}
              alt="agrolizing"
              className="w-[45%] h-[45%] rounded-lg"
            />
            <img
              src={agrolizing2}
              alt="agrolizing"
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
                Mobil ilova orqali ro‘yxatdan o‘tgan fermer xo‘jaliklari va
                yuridik shaxslardan qishloq xo‘jaligi texnikalari uchun
                onlayn-buyurtma berish va lizing asosida olgan qishloq xo‘jaligi
                texnikalari uchun muddatli onlayn to‘lovlarni amalga oshirish.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={agrolizing5} alt="agrolizing" className="w-full" />
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
                {/* agrolizing vazirligi faoliyati, yangiliklari shaffoﬂigi
                yuzasidan doimiy ravishda ma'lumotlar berib borish */}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img
              src={agrolizing3}
              alt="agrolizing"
              className="w-[45%] h-[45%] rounded-lg"
            />
            <img
              src={agrolizing4}
              alt="agrolizing"
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

export default Agrolizing;
