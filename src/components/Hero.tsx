
import { Phone, Globe, Download } from "lucide-react";

interface HeroProps {
  isEnglish: boolean;
}

const Hero = ({ isEnglish }: HeroProps) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="smooth-fade">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {isEnglish ? "Hi, I'm Orlando" : "Hola, soy Orlando"}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            {isEnglish 
              ? "Scientist and Programmer passionate about technology and industrial electronics. I specialize in web development and industrial automation, combining my knowledge in programming and electronics to create innovative solutions."
              : "Científico y Programador apasionado por la tecnología y la electrónica industrial. Me especializo en desarrollo web y automatización industrial, combinando mis conocimientos en programación y electrónica para crear soluciones innovadoras."
            }
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {isEnglish ? "Contact Me" : "Contáctame"}
            </a>
            <a 
              href="#projects" 
              className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              {isEnglish ? "View Projects" : "Ver Proyectos"}
            </a>
            <a 
              href="/cv.pdf" 
              download
              className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {isEnglish ? "Download CV" : "Descargar CV"}
            </a>
          </div>
        </div>
        <div className="glass-card p-4 smooth-fade flex items-center justify-center" style={{animationDelay: "0.2s"}}>
          <img 
            src="/lovable-uploads/c15c827c-da80-408f-b0db-8adc7c65c3c0.png"
            alt="Orlando" 
            className="w-full h-[350px] object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
