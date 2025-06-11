'use client';

import Image from "next/image";
import '../../styles/pages/home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Presentation from "../../components/Presentation";
import Skill from "../../components/Skill";
import Project from "../../components/Project";
import Quote from "../../components/Quote";
import Footer from "../../components/Footer";
import Interest from "../../components/Interest";
import FadeInSection from "../../components/FadeInSection";
import ChatForm from "../../components/ChatForm"; 

export default function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="main__container">
          <Hero />
          <FadeInSection><Presentation /></FadeInSection>
          <FadeInSection><Skill /></FadeInSection>
          <FadeInSection><Project /></FadeInSection>
          <FadeInSection><Quote /></FadeInSection>
          <FadeInSection><Interest /></FadeInSection>
        </div>
      </main>
      <Footer />
      <ChatForm />  {/* <-- Widget chat intégré ici, toujours présent */}
    </div>
  );
}
