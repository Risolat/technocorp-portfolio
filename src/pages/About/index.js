import React from "react";
import back from "../../assets/main/back.svg";
import team from "../../assets/main/team.svg";
import teamPng from "../../assets/main/team-png.png";
import { Link } from "react-router-dom";

const About = () => {
  const about = [
    {
      count: "100+",
      text: "Muvaffaqiyatli loyihalar",
    },
    {
      count: "80+",
      text: "Malakali xodimlar",
    },
    {
      count: "50+",
      text: "Hamkor tashkilotlar",
    },
    {
      count: "30+",
      text: "Xalqaro sertifikatlar",
    },
  ];
  return (
    <div>
      <Link to="/" className="flex items-center mb-[30px]">
        <img src={back} alt="back" />
        <p className="subtitle">Biz haqimizda</p>
      </Link>
      <div className="bg-[#2A2A2A] p-4 mb-5">
        <p className="font-medium text-[18px] leading-6">
          O‘zbekiston Respublikasi Prezidentining 2019-yil 14-sentabrdagi
          “Axborot texnologiyalari va kommunikatsiyalarining joriy etilishini
          nazorat qilish, ularni himoya qilish tizimini takomillashtirishga oid
          qo‘shimcha chora-tadbirlar to‘g‘risida”gi PQ-4452-son qaroriga muvoﬁq
          tashkil etilgan.
        </p>
      </div>
      <ul className="w-full flex justify-between flex-wrap">
        {about.map((item) => (
          <li className="w-[48%] mx-1 p-4 mb-4 bg-[#7EDD93] rounded-md">
            <div className="w-full">
              <p className="about-count mb-3">{item.count}</p>
              <p className="text-[19px] leading-6 font-medium text-[#222] mb-3">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="relative w-full h-full">
        <img src={team} alt="team" className="w-full h-full" />
        <div className="absolute block bottom-0 py-3 w-[94%] mx-auto -translate-y-[2/4] left-0 right-0 rounded-t-md z-1 bg-[#17983F]">
          <p className="service-title text-center text-[18px]">
            Bizning Maqsad
          </p>
          <p className="text-[20px] max-w-lg mx-auto my-0 leading-6 font-medium text-center">
            Axborot texnologiyalar yordamida insonlar hayotini yengillashtirish
            va ularning muammolariga yechim berish
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
