
import { Mail, Users, Puzzle, Lightbulb, Clock, GraduationCap, Target, HeartHandshake, Calendar, Briefcase } from "lucide-react";

interface SoftSkillsProps {
  isEnglish: boolean;
}

const SoftSkills = ({ isEnglish }: SoftSkillsProps) => {
  const skills = [
    {
      title: isEnglish ? "Effective Communication" : "Comunicación Efectiva",
      icon: Mail,
    },
    {
      title: isEnglish ? "Teamwork" : "Trabajo en Equipo",
      icon: Users,
    },
    {
      title: isEnglish ? "Problem Solving" : "Resolución de Problemas",
      icon: Puzzle,
    },
    {
      title: isEnglish ? "Creativity and Innovation" : "Creatividad e Innovación",
      icon: Lightbulb,
    },
    {
      title: isEnglish ? "Time Management" : "Gestión del Tiempo",
      icon: Clock,
    },
    {
      title: isEnglish ? "Adaptability and Learning" : "Adaptabilidad y Aprendizaje",
      icon: GraduationCap,
    },
    {
      title: isEnglish ? "Leadership" : "Liderazgo",
      icon: Target,
    },
    {
      title: isEnglish ? "Customer Service" : "Atención al Cliente",
      icon: HeartHandshake,
    },
    {
      title: isEnglish ? "Punctuality and Responsibility" : "Puntualidad y Responsabilidad",
      icon: Calendar,
    },
    {
      title: isEnglish ? "Remote Work" : "Trabajo Remoto",
      icon: Briefcase,
    }
  ];

  return (
    <section id="soft-skills" className="container mx-auto px-4 py-16 bg-white/5 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {isEnglish ? "Soft Skills" : "Habilidades Blandas"}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 hover:rotate-2"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <skill.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold">{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
