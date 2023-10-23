import React from "react";
import back from "../../../assets/main/back.svg";
import uzarxiv from "../../../assets/portfolio/uzarxiv/big1.svg";
import uzarxiv1 from "../../../assets/portfolio/uzarxiv/1.png";
import uzarxiv2 from "../../../assets/portfolio/uzarxiv/2.png";
import uzarxiv3 from "../../../assets/portfolio/uzarxiv/3.png";
import uzarxiv4 from "../../../assets/portfolio/uzarxiv/4.png";
import uzarxiv5 from "../../../assets/portfolio/uzarxiv/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.svg";
import portfolio4 from "../../../assets/portfolio/portfolio4.svg";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Uzarxiv = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] mx-[24px]">
          <Link to="/portfolio" className="flex items-center">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              Kinofotofono arxiv hujjatlari tizimi
            </p>
          </Link>
          <div>
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              “O‘zarxiv” agentligi
            </p>
          </div>
        </div>
        <div className="portfolio-inner-ivv w-full">
          <img
            width="100%"
            src={uzarxiv}
            alt="uzarxiv"
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
                Tadqiqotchilar, talabalar, kinoijodkorlar va keng auditoriya
                uchun kinofotofono arxiv hujjatlariga qulay va masofaviy kirish
                orqali ularga tarixiy kadrlar, hujjatli ﬁlmlar, badiiy ﬁlmlar va
                audio materiallardan onlayn foydalanish imkonini beruvchi
                video-portal tizimini yaratishdan iborat
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={uzarxiv1} alt="uzarxiv" className="w-[45%] h-[45%]" />
            <img src={uzarxiv2} alt="uzarxiv" className="w-[45%] h-[45%]" />
          </div>
          <div className="flex justify-between items-start my-[50px]">
            <div className="flex items-center w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title">Loyiha vazifasi</p>
            </div>
            <div className="w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Tadqiqotchilar, talabalar, kinoijodkorlar va keng auditoriya
                uchun kinofotofono arxiv hujjatlariga qulay va masofaviy kirish
                orqali ularga tarixiy kadrlar, hujjatli ﬁlmlar, badiiy ﬁlmlar va
                audio materiallardan onlayn bazasini yaratish
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={uzarxiv5} alt="uzarxiv" className="w-full" />
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
                Hududlarda olib borilayotgan tadbirlar natijalarini tezkor
                tarzda kuzatib, ularni tahlil qilish
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img src={uzarxiv3} alt="uzarxiv" className="w-[45%] h-[45%]" />
            <img src={uzarxiv4} alt="uzarxiv" className="w-[45%] h-[45%]" />
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
                O‘zbekiston Respublikasi uzarxiv Vazirligi
              </p>
              <p className="portfolio-item-text">
                “uzarxiv markazlari” yagona portali
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

export default Uzarxiv;
