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


export default function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="main__container">
          <FadeInSection><Hero /></FadeInSection>
          <FadeInSection><Presentation /></FadeInSection>
          <FadeInSection><Skill /></FadeInSection>
          <Project />
          <FadeInSection><Quote /></FadeInSection>
          <FadeInSection><Interest /></FadeInSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
