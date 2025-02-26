
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

interface HeaderProps {
  initialLanguage: boolean;
}

const Header = ({ initialLanguage }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSpanish, setIsSpanish] = useState(initialLanguage);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "technical-skills", "extracurricular", "soft-skills", "projects", "contact"];
      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    if (isDarkMode) {
      document.documentElement.style.setProperty('--background', '0 0% 100%');
      document.documentElement.style.setProperty('--foreground', '240 10% 3.9%');
    } else {
      document.documentElement.style.setProperty('--background', '240 10% 3.9%');
      document.documentElement.style.setProperty('--foreground', '0 0% 98%');
    }
  };

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
    navigate(isSpanish ? '/en' : '/');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/img/logo.png" 
              alt="Logo" 
              className="w-10 h-10 rounded-xl object-cover skills-icon hover:scale-110 transition-transform"
            />
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Orlando B.
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === "about" 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSpanish ? 'Sobre Mí' : 'About'}
            </a>
            <a 
              href="#technical-skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("technical-skills");
              }} 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === "technical-skills" 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSpanish ? 'Habilidades Técnicas' : 'Technical Skills'}
            </a>
            <a 
              href="#extracurricular"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("extracurricular");
              }} 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === "extracurricular" 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSpanish ? 'Extracurricular' : 'Extracurricular'}
            </a>
            <a 
              href="#soft-skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("soft-skills");
              }} 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === "soft-skills" 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSpanish ? 'Habilidades Blandas' : 'Soft Skills'}
            </a>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }} 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === "projects" 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSpanish ? 'Proyectos' : 'Projects'}
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }} 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === "contact" 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSpanish ? 'Contacto' : 'Contact'}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg">
              <Sun className="h-4 w-4" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-white/20"
              />
              <Moon className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg">
              <span className="text-sm">ES</span>
              <Switch
                checked={isSpanish}
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-white/20"
              />
              <span className="text-sm">EN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
