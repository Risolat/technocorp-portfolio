import React from "react";
import back from "../../assets/main/back.svg";
import { Link } from "react-router-dom";
import partner from "../../assets/partner/partner.svg";
import partner2 from "../../assets/partner/partner2.svg";
import partner3 from "../../assets/partner/partner3.svg";
import partner4 from "../../assets/partner/partner4.svg";
import partner5 from "../../assets/partner/partner5.svg";
import partner6 from "../../assets/partner/partner6.svg";
import partner7 from "../../assets/partner/partner7.svg";
import partner8 from "../../assets/partner/partner8.svg";
import partner9 from "../../assets/partner/partner9.svg";

const Partners = () => {
  const partnerList = [
    {
      img: partner,
      title: "O‘zbekiston Respublikasi Ichki ishlar Vazirligi",
    },
    {
      img: partner2,
      title: "O‘zbekiston Respublikasi Adliya Vazirligi",
    },
    {
      img: partner3,
      title: "Axborot va ommaviy kommunikatsiyalar agentligi",
    },
    {
      img: partner4,
      title: "O‘zbekiston Respublikasi Madaniyat Vazirligi",
    },
    {
      img: partner5,
      title: "O‘zbekiston Respublikasi Togʻ-kon sanoati va geologiya Vazirligi",
    },
    {
      img: partner6,
      title:
        "O‘zbekiston Respublikasi Adliya vazirligi huzuridagi “O‘zarxiv” agentligi",
    },
    {
      img: partner7,
      title: "O‘zbekiston Respublikasi Avtomobillar yo‘llari qo‘mitasi",
    },
    {
      img: partner8,
      title: "“Toshshahartransxizmati” AJ",
    },
    {
      img: partner9,
      title: "O‘zbekiston Respublikasi Ekologik partiyasi",
    },
  ];
  return (
    <div>
      <Link to="/" className="flex items-center mb-[30px]">
        <img src={back} alt="back" />
        <p className="subtitle">hamkorlarimiz</p>
      </Link>
      <ul className="flex flex-col md:flex-row flex-wrap justify-between">
        {partnerList.map((item) => (
          <li className="w-full md:w-[48%] lg:w-[32%] block bg-[#2B2B2B] mb-5 py-[50px] border border-[#757575] rounded-md flex flex-col items-center">
            <img src={item.img} alt={item.title} className="mb-4" />
            <p className="mb-3 px-5 audit-title text-center">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
