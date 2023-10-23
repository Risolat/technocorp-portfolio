import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import About from "./pages/About";
import Team from "./pages/Team";
import Audit from "./pages/Audit";
import Partners from "./pages/Partners";
import Portfolio from "./pages/Portfolio";
import Ivv from "./pages/Portfolio/Ivv";
import Adliya from "./pages/Portfolio/Adliya";
import Madaniyat from "./pages/Portfolio/Madaniyat";
import Aoka from "./pages/Portfolio/Aoka";
import Fvv from "./pages/Portfolio/Fvv";
import HududiyElektr from "./pages/Portfolio/HududiyElektr";
import Innofund from "./pages/Portfolio/Innofund";
import Mt from "./pages/Portfolio/Mt";
import Uzarxiv from "./pages/Portfolio/Uzarxiv";
import Uzavtoyul from "./pages/Portfolio/Uzavtoyul";
import Agrolizing from "./pages/Portfolio/Agrolizing";
import Aloqa from "./pages/Portfolio/Aloqa";
import AudioBooks from "./pages/Portfolio/AudioBooks";
import Metkom from "./pages/Portfolio/Metkom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
        <Route path="/portfolio/iiv" element={<Ivv />} />
        <Route path="/portfolio/adliya" element={<Adliya />} />
        <Route path="/portfolio/madaniyat" element={<Madaniyat />} />
        <Route path="/portfolio/aoka" element={<Aoka />} />
        <Route path="/portfolio/fvv" element={<Fvv />} />
        <Route path="/portfolio/hududiyElektr" element={<HududiyElektr />} />
        <Route path="/portfolio/innofund" element={<Innofund />} />
        <Route path="/portfolio/mt" element={<Mt />} />
        <Route path="/portfolio/uzarxiv" element={<Uzarxiv />} />
        <Route path="/portfolio/uzavtoyul" element={<Uzavtoyul />} />
        <Route path="/portfolio/agrolizing" element={<Agrolizing />} />
        <Route path="/portfolio/aloqa" element={<Aloqa />} />
        <Route path="/portfolio/audioBooks" element={<AudioBooks />} />
        <Route path="/portfolio/metkom" element={<Metkom />} />
      </Routes>
    </>
  );
}
