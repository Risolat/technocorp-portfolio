import React, { useState } from "react";
import back from "../../assets/main/back.svg";
import { Link, useNavigate } from "react-router-dom";
import portfolio from "../../assets/portfolio/ivv/cover.png";
import portfolio2 from "../../assets/portfolio/adliya/cover.png";
import portfolio3 from "../../assets/portfolio/madaniyat/cover.png";
import portfolio4 from "../../assets/portfolio/hudud/cover.png";
import portfolio5 from "../../assets/portfolio/uzarxiv/cover.png";
import portfolio6 from "../../assets/portfolio/aoka/cover.png";
import portfolio7 from "../../assets/portfolio/mt/cover.png";
import portfolio8 from "../../assets/portfolio/fvv/cover.png";
import portfolio9 from "../../assets/portfolio/innofund/cover.png";
import portfolio10 from "../../assets/portfolio/avtoyul/cover.png";
import portfolio11 from "../../assets/portfolio/aloqa/cover.png";
import portfolio12 from "../../assets/portfolio/audioBooks/cover.png";
import portfolio13 from "../../assets/portfolio/agrolizing/cover.png";
import portfolio14 from "../../assets/portfolio/metkom/cover.png";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);
  const navigate = useNavigate();

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const portfolioAll = [
    {
      img: portfolio,
      clientName: "O‘zbekiston IIV",
      text: "E Voyaga yetmaganlar",
      link: "iiv",
    },
    {
      img: portfolio2,
      clientName: "O‘zbekiston Respublikasi Adliya Vazirligi",
      text: "www.adliya.uz",
      link: "adliya",
    },
    {
      img: portfolio3,
      clientName: "O‘zbekiston Respublikasi Madaniyat Vazirligi",
      text: "“Madaniyat markazlari” yagona portali",
      link: "madaniyat",
    },
    {
      img: portfolio4,
      clientName: "“Hududiy elektr tarmoqlari” AJ",
      text: "“Energetikaning virtual ish stoli” axborot tizimi",
      link: "hududiyElektr",
    },
    {
      img: portfolio5,
      clientName: "“O‘zarxiv” agentligi",
      text: "Kinofotofono arxiv hujjatlari tizimi",
      link: "uzarxiv",
    },
    {
      img: portfolio6,
      clientName: "AOKA",
      text: "AOKA uchun “Media Reja” axborot tizimi",
      link: "aoka",
    },
    {
      img: portfolio7,
      clientName: "Milliy tiklanish demokratik partiyasi",
      text: "mt.technocorp.uz",
      link: "mt",
    },
    {
      img: portfolio8,
      clientName: "Toshkent viloyati FV boshqarmasi",
      text: "www.fvv.uz",
      link: "fvv",
    },
    {
      img: portfolio9,
      clientName:
        "Ilm-fanni moliyalashtirish va innovatsiyalarni qo‘llab quvvatlash jamg‘armasi",
      text: "www.innofund.uz",
      link: "innofund",
    },
    {
      img: portfolio10,
      clientName: "O‘zbekiston Respublikasi avtomobil yo‘llari qo‘mitasi",
      text: "www.uzavtoyul.uz",
      link: "uzavtoyul",
    },
    {
      img: portfolio13,
      clientName: "“O‘zagrolizing” Aksiyadorlik jamiyati",
      text: "“Qishloq xo‘jaligi korxonalariga lizing asosida yetkazib beriladigan texnikalar uchun mobil ilova",
      link: "agrolizing",
    },
    {
      img: portfolio11,
      clientName: "“O‘zkomnazorat” inspeksiyasi",
      text: "“Aloqa nazorati” mobil ilovasi",
      link: "aloqa",
    },
    {
      img: portfolio12,
      clientName: "O‘zbeksiton Respublikasi Madaniyat vazirligi",
      text: "“Audiokitoblar” mobil ilovasi",
      link: "audioBooks",
    },
    {
      img: portfolio14,
      clientName: "“O‘zmetkombinat” Aksiyadorlik jamiyati",
      text: "“Metkom-taxi” mobil ilovasi",
      link: "metkom",
    },
  ];
  const portfolioWeb = [
    {
      img: portfolio2,
      clientName: "O‘zbekiston Respublikasi Adliya Vazirligi",
      text: "www.adliya.uz",
      link: "adliya",
    },
    {
      img: portfolio7,
      clientName: "Milliy tiklanish demokratik partiyasi",
      text: "mt.technocorp.uz",
      link: "mt",
    },
    {
      img: portfolio9,
      clientName:
        "Ilm-fanni moliyalashtirish va innovatsiyalarni qo‘llab quvvatlash jamg‘armasi",
      text: "www.innofund.uz",
      link: "innofund",
    },
    {
      img: portfolio10,
      clientName: "O‘zbekiston Respublikasi avtomobil yo‘llari qo‘mitasi",
      text: "www.uzavtoyul.uz",
      link: "uzavtoyul",
    },
  ];
  const portfolioMobile = [
    {
      img: portfolio13,
      clientName: "“O‘zagrolizing” Aksiyadorlik jamiyati",
      text: "“Qishloq xo‘jaligi korxonalariga lizing asosida yetkazib beriladigan texnikalar uchun mobil ilova",
      link: "agrolizing",
    },
    {
      img: portfolio11,
      clientName: "“O‘zkomnazorat” inspeksiyasi",
      text: "“Aloqa nazorati” mobil ilovasi",
      link: "aloqa",
    },
    {
      img: portfolio12,
      clientName: "O‘zbeksiton Respublikasi Madaniyat vazirligi",
      text: "“Audiokitoblar” mobil ilovasi",
      link: "audioBooks",
    },
    {
      img: portfolio14,
      clientName: "“O‘zmetkombinat” Aksiyadorlik jamiyati",
      text: "“Metkom-taxi” mobil ilovasi",
      link: "metkom",
    },
  ];
  const portfolioCrm = [
    {
      img: portfolio,
      clientName: "O‘zbekiston IIV",
      text: "E Voyaga yetmaganlar",
      link: "iiv",
    },
    {
      img: portfolio3,
      clientName: "O‘zbekiston Respublikasi Madaniyat Vazirligi",
      text: "“Madaniyat markazlari” yagona portali",
      link: "madaniyat",
    },
    {
      img: portfolio4,
      clientName: "“Hududiy elektr tarmoqlari” AJ",
      text: "“Energetikaning virtual ish stoli” axborot tizimi",
      link: "hududiyElektr",
    },
    {
      img: portfolio5,
      clientName: "“O‘zarxiv” agentligi",
      text: "Kinofotofono arxiv hujjatlari tizimi",
      link: "uzarxiv",
    },
    {
      img: portfolio6,
      clientName: "AOKA",
      text: "AOKA uchun “Media Reja” axborot tizimi",
      link: "aoka",
    },
    {
      img: portfolio8,
      clientName: "Toshkent viloyati FV boshqarmasi",
      text: "www.fvv.uz",
      link: "fvv",
    },
  ];
  return (
    <div>
      <div className="flex items-end justify-between">
        <Link to="/" className="flex items-center">
          <img src={back} alt="back" />
          <p className="subtitle">Portfolio</p>
        </Link>
        <div className="hidden md:block">
          <p className="portfolio-text">100+ loyihalar</p>
        </div>
      </div>

      <div className="block-tabs md:flex-row mt-[20px] ">
        <div
          className={
            toggleState === 1
              ? "tabs active-tabs opacity-1 rounded-lg md:w-[22%]"
              : "tabs rounded-lg md:w-[22%]"
          }
          onClick={() => toggleTab(1)}
        >
          Barchasi
        </div>
        <div
          className={
            toggleState === 2
              ? "tabs active-tabs opacity-1 rounded-lg md:w-[22%]"
              : "tabs rounded-lg md:w-[22%]"
          }
          onClick={() => toggleTab(2)}
        >
          Veb saytlar
        </div>
        <div
          className={
            toggleState === 3
              ? "tabs active-tabs opacity-1 rounded-lg md:w-[22%]"
              : "tabs rounded-lg md:w-[22%]"
          }
          onClick={() => toggleTab(3)}
        >
          Mobil ilovalar
        </div>
        <div
          className={
            toggleState === 4
              ? "tabs active-tabs opacity-1 rounded-lg md:w-[22%]"
              : "tabs rounded-lg md:w-[22%]"
          }
          onClick={() => toggleTab(4)}
        >
          Axborot tizimlari
        </div>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "block" : "hidden"}>
          <div className="flex flex-col md:flex-row flex-wrap justify-between">
            {portfolioAll.map((item) => (
              <Link to={`/portfolio/${item.link}`} className="w-full md:w-[48%]">
                <img src={item.img} alt={item.text} className="rounded-xl " />
                <p className="portfolio-item-link">{item.text}</p>
                <p className="portfolio-item-text">{item.clientName} </p>
              </Link>
            ))}
          </div>
        </div>
        <div className={toggleState === 2 ? "block" : "hidden"}>
          <div className="flex flex-col md:flex-row flex-wrap justify-between">
            {portfolioWeb.map((item) => (
              <Link to={`/portfolio/${item.link}`} className="w-full md:w-[48%]">
                <img src={item.img} alt={item.text} className="rounded-xl " />
                <p className="portfolio-item-link line-clamp-2 truncate">
                  {item.text}
                </p>
                <p className="portfolio-item-text">{item.clientName} </p>
              </Link>
            ))}
          </div>
        </div>
        <div className={toggleState === 3 ? "block" : "hidden"}>
          <div className="flex flex-col md:flex-row flex-wrap justify-between">
            {portfolioMobile.map((item) => (
              <Link to={`/portfolio/${item.link}`} className="w-full md:w-[48%]">
                <img src={item.img} alt={item.text} className="rounded-xl " />
                <p className="portfolio-item-link line-clamp-2 truncate">
                  {item.text}
                </p>
                <p className="portfolio-item-text">{item.clientName} </p>
              </Link>
            ))}
          </div>
        </div>
        <div className={toggleState === 4 ? "block" : "hidden"}>
          <div className="flex flex-col md:flex-row flex-wrap justify-between">
            {portfolioCrm.map((item) => (
              <Link to={`/portfolio/${item.link}`} className="w-full md:w-[48%]">
                <img src={item.img} alt={item.text} className="rounded-xl " />
                <p className="portfolio-item-link line-clamp-2 truncate">
                  {item.text}
                </p>
                <p className="portfolio-item-text">{item.clientName} </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
