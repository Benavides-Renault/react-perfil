
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import TechnicalSkills from "../components/TechnicalSkills";
import SoftSkills from "../components/SoftSkills";
import Projects from "../components/Projects";
import Extracurricular from "../components/Extracurricular";
import Contact from "../components/Contact";

interface IndexProps {
  isEnglish: boolean;
}

const Index = ({ isEnglish }: IndexProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/about-1.jpg', '/about-2.jpg', '/about-3.jpg', '/about-4.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          element.classList.add('fade-in-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header initialLanguage={!isEnglish} />
      <main className="flex-grow mt-16">
        <Hero isEnglish={isEnglish} />
        <About isEnglish={isEnglish} />
        <TechnicalSkills isEnglish={isEnglish} />
        <Extracurricular isEnglish={isEnglish} />
        <SoftSkills isEnglish={isEnglish} />
        <Projects isEnglish={isEnglish} />
        <Contact isEnglish={isEnglish} />
      </main>
      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Index;
