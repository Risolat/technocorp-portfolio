import React from "react";
import back from "../../../assets/main/back.svg";
import ivv from "../../../assets/portfolio//portfolio.png";
import ivv1 from "../../../assets/portfolio/ivv/1.png";
import ivv2 from "../../../assets/portfolio/ivv/2.png";
import ivv3 from "../../../assets/portfolio/ivv/3.png";
import ivv4 from "../../../assets/portfolio/ivv/4.png";
import ivv5 from "../../../assets/portfolio/ivv/big2.png";
import portfolio3 from "../../../assets/portfolio/portfolio3.png";
import portfolio4 from "../../../assets/portfolio/portfolio4.png";
import figma from "../../../assets/portfolio/figms.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Ivv = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-between mb-[30px] ml-[24px]">
          <Link to="/portfolio" className="flex items-center mb-3">
            <img src={back} alt="back" className="mr-2" />
            <p className="portfolio-inner-subtitle">
              “E-voyaga yetmaganlar” axborot tizimi
            </p>
          </Link>
          <div className="hidden md:block">
            <p className="mb-2 text-right">Buyurtma beruvchi</p>
            <p className="portfolio-green-text text-right">
              O‘zbekiston Respublikasi Ichki ishlar vazirligi
            </p>
          </div>
        </div>
        <div className="portfolio-inner-ivv w-full">
          <img
            width="100%"
            src={ivv}
            alt="ivv"
            className="block max-w-full rounded-lg"
          />
        </div>
        <div className="mx-[24px]">
          <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
            <div className="flex items-center w-full md:w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title mb-2">Loyiha maqsadi</p>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Voyaga yetmagan va ota onasi qarovsiz qolgan bolalarni davlat
                qamroviga olish tizimni avtomatlashtirish qarovsiz qolgan
                bolalarni IIV markazlariga joylashtirish, bolalar shaxsini
                aniqlash va ularni keyingi taqdiri boʻyicha qaror qabul qilishda
                Respublika boʻyicha tezkor maʼlumot almashish imkoniyatini
                ishlab chiqish va qarovsiz qolgan voyaga yetmaganlarning yagona
                bazasini shakllantirish
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img src={ivv1} alt="ivv" className="w-full md:w-[45%] mb-5 h-[45%]" />
            <img src={ivv2} alt="ivv" className="w-full md:w-[45%] h-[45%]" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
            <div className="flex items-center w-full md:w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title mb-2">Loyiha vazifasi</p>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Markazga qabul qilingan bola bilan yakka tartibdagi proﬁlaktik
                tadbirlarni sifatli tashkil etish uchun bolaning Markazgacha
                boʻlgan ijtimoiy turmush tarziga baho berish, zarur hollarda
                bolani qonunchilikda belgilangan Davlat muassasalariga
                joylashtirish choralarini koʻrish
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={ivv5} alt="ivv" className="w-full" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start my-[50px]">
            <div className="flex items-center w-full md:w-[35%]">
              <span className="w-[42px] h-[3px] rounded bg-[#D9D9D9] mr-[20px]"></span>
              <p className="portfolio-inner-purpose-title mb-2">
                Loyiha funksiyalari
              </p>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="portfolio-inner-purpose-text px-4">
                Qarovsiz qolgan bollarni aniqlashva ularning yagona bazasini
                shakllantirish
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img src={ivv3} alt="ivv" className="w-full md:w-[45%] mb-5 h-[45%]" />
            <img src={ivv4} alt="ivv" className="w-full md:w-[45%] h-[45%]" />
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

export default Ivv;
