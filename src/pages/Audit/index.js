import React from "react";
import back from "../../assets/main/back.svg";
import { Link } from "react-router-dom";
import audit from "../../assets/audit/audit.svg";
import audit2 from "../../assets/audit/audit2.svg";
import audit3 from "../../assets/audit/audit3.svg";
import audit4 from "../../assets/audit/audit4.svg";
import audit5 from "../../assets/audit/audit5.svg";
import audit6 from "../../assets/audit/audit6.svg";

const Audit = () => {
  const auditList = [
    {
      img: audit,
      title: "“O‘ztransgaz” aksiyadorlik jamiyati ",
    },
    {
      img: audit2,
      title: "Agrosanoat majmui ustidan nazorat qilish inspeksiyasi",
    },
    {
      img: audit3,
      title: "O‘zbeksiton Respublikasi Avtomobillar yo‘llari qo‘mitasi",
    },
    {
      img: audit4,
      title: "Toshkent shahar hokimligi",
    },
    {
      img: audit5,
      title: "Axborot va ommaviy kommunikatsiyalar agentligi",
    },
    {
      img: audit6,
      title: "O‘zbekiston Respublikasi Madaniyat Vazirligi",
    },
    {
      img: audit5,
      title: "Ta’lim Sifatini Nazorat Qilish Davlat Inspеksiyasi",
    },
    {
      img: audit5,
      title: "Xorazm viloyati hokimligi",
    },
  ];
  return (
    <div>
      <Link to="/" className="flex items-center mb-[30px]">
        <img src={back} alt="back" />
        <p className="subtitle">Akt va ax audit</p>
      </Link>
      <ul className="flex flex-wrap justify-between">
        {auditList.map((item) => (
          <li className="w-[48%] bg-[#2B2B2B] mb-5 p-5 border border-[#757575] rounded-lg flex flex-col items-center">
            <img src={item.img} alt={item.title} className="mb-4" />
            <p className="mb-3 audit-title text-center">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Audit;
