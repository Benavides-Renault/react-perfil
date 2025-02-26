import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Phone, Mail, Home } from "lucide-react";

interface FooterProps {
  isEnglish: boolean;
}

const Footer = ({ isEnglish }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isEnglish ? "Contact Information" : "Información de Contacto"}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+506 8347-6182</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>orlanisbe02@hotmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-gray-400" />
                <span>Alajuela, Costa Rica</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isEnglish ? "Quick Links" : "Enlaces Rápidos"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {isEnglish ? "About Me" : "Sobre Mí"}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  {isEnglish ? "Skills" : "Habilidades"}
                </a>
              </li>
              <li>
                <a href="#extracurricular" className="text-gray-400 hover:text-white transition-colors">
                  {isEnglish ? "Extracurricular" : "Extracurriculares"}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {isEnglish ? "Contact" : "Contacto"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isEnglish ? "Social Media" : "Redes Sociales"}
            </h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {currentYear} Orlando. {isEnglish ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
