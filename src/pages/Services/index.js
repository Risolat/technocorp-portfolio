import React from "react";
import back from "../../assets/main/back.svg";
import { Link } from "react-router-dom";
import service from "../../assets/main/service.svg";
import service2 from "../../assets/main/service2.svg";
import service3 from "../../assets/main/service3.svg";
import service4 from "../../assets/main/service4.svg";
import service5 from "../../assets/main/service5.svg";
import service6 from "../../assets/main/service6.svg";

const Services = () => {
  const services = [
    {
      img: service,
      title: "ERP, CRM ishlabchiqish xizmati",
      description:
        "Axborot tizimlari (ERP, CRM) Markazlashgan nazorat Axborot almashinuvi tezligi Umumlashtirilgan dashboard Integratsiya imkoniyati",
    },
    {
      img: service2,
      title: "Veb-sayt va telegram botlar ishlab chiqish",
      description:
        "Veb-portallar va veb-saytlar Internet do‘konlar Interaktiv telegram botlar va standart telegram botlar Online platformalar",
    },
    {
      img: service3,
      title: "AKT auditdan o‘tkazish xizmati",
      description:
        "Tashkilot ish faoliyatini AKT va AX talablariga muvofiqligi bo'yicha auditdan o'tkazish Axborot tizimlar va resurlarni texnik topshiriq talablariga muvofiqligini auditdan o'tkazish Veb-saytni AKT talablariga muvofiqligi bo'yicha auditdan o'tkazish",
    },
    {
      img: service4,
      title: "Texnik hujjat ishlab chiqish xizmati",
      description:
        "Loyiha konsepsiyasini ishlab chiqish Loyihani texnik talabini ishlab chiqish Texnik topshiriq ishlab chiqish Loyiha foydalanish qo‘llanmasi ishlab chiqish Metodik hujjatlar ishlab chiqish",
    },
    {
      img: service5,
      title: "Mobil ilovalarni ishlab chiqish xizmati",
      description:
        "Android va iOS operatsion tizimlari Google Play va App Store platformalariga joylash Ilovalarni texnik qo‘llab-quvvatlash",
    },
    {
      img: service6,
      title: "UI/UX va grafik dizayn xizmati",
      description:
        "Veb-saytlar va mobil ilovalar uchun dizayn ishlab chiqish AR texnologiyasi va 360º tur bo‘yicha mijozlarga xizmat ko‘rsatish",
    },
  ];
  return (
    <div>
      <Link to="/" className="flex items-center mb-[30px]">
        <img src={back} alt="back" />
        <p className="subtitle">Bizning xizmatlar</p>
      </Link>
      <ul className="flex flex-col md:flex-row flex-wrap justify-between">
        {services.map((item) => (
          <li className="md:w-[48%] sm:w-full bg-[#2B2B2B] mb-5 p-5">
            <img src={item.img} alt={item.title} className="mb-4" />
            <p className="mb-3 service-title">{item.title}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
