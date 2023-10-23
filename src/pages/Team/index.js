import React from "react";
import back from "../../assets/main/back.svg";
import { Link } from "react-router-dom";
import team from "../../assets/team/team.jpg";
import team2 from "../../assets/team/team2.jpg";
import team3 from "../../assets/team/team3.jpg";
import team4 from "../../assets/team/team4.jpg";
import team5 from "../../assets/team/team5.jpg";
import team6 from "../../assets/team/team6.jpg";
import team7 from "../../assets/team/team7.jpg";
import team8 from "../../assets/team/team8.jpg";
import team9 from "../../assets/team/team9.jpg";
import team10 from "../../assets/team/team10.jpg";
import team11 from "../../assets/team/team11.jpg";
import team12 from "../../assets/team/team12.jpg";

const Team = () => {
  const teamList = [
    {
      img: team,
      name: "Javohir Jo'rayev",
      position: "CEO deputy",
    },
    {
      img: team2,
      name: "Sardor Abdug'aniyev",
      position: "UI/UX dizayner",
    },
    {
      img: team3,
      name: "Shahnoza Xodjabekova",
      position: "Beckend dasturchi",
    },
    {
      img: team4,
      name: "Risolat Islamova",
      position: "Frontend dasturchi",
    },
    {
      img: team5,
      name: "Rustam Xasanov",
      position: "Frontend dasturchi",
    },
    {
      img: team6,
      name: "Abdumannon Tojiboyev",
      position: "Frontend dasturchi",
    },
    {
      img: team7,
      name: "Umidullo Suyunov",
      position: "Frontend dasturchi",
    },
    {
      img: team8,
      name: "Arslan Murazikov",
      position: "Beckend dasturchi",
    },
    {
      img: team9,
      name: "Javlon Uchqunov",
      position: "UI/UX dizayner",
    },
    {
      img: team10,
      name: "Ahad Mansurov",
      position: "Beckend dasturchi",
    },
    {
      img: team11,
      name: "Behzod Mavlonov",
      position: "UI/UX dizayner",
    },
    {
      img: team12,
      name: "Xojiakbar Madaminov",
      position: "Beckend dasturchi",
    },
  ];
  return (
    <div>
      <Link to="/" className="flex items-center mb-[30px]">
        <img src={back} alt="back" />
        <p className="subtitle">Bizning jamoa</p>
      </Link>
      <ul className="flex flex-wrap justify-center lg:justify-between">
        {teamList.map((item) => (
          <li className="relative w-[260px] block bg-[#2B2B2B] mb-5 rounded-md flex flex-col items-center">
            <img
              className="w-[250px] h-[280px] object-cover object-top rounded-md"
              src={item.img}
              alt={item.name}
              width={250}
              height={280}
            />
            <div className="team-info">
              <p className="team-info-name">{item.name}</p>
              <p className="team-info-position">{item.position}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
