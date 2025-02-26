
import { Github, ExternalLink, Building, Dumbbell, ShoppingBag } from "lucide-react";

interface ProjectsProps {
  isEnglish: boolean;
}

const Projects = ({ isEnglish }: ProjectsProps) => {
  const projects = [
    {
      title: isEnglish ? "Titanium Fitness Gym" : "Titanium Fitness Gym",
      description: isEnglish 
        ? "Complete web platform for gym management, including membership system, routine tracking and user progress, and class schedule."
        : "Plataforma web completa para gestión de gimnasio, incluyendo sistema de membresías, seguimiento de rutinas y progreso de usuarios, y calendario de clases.",
      icon: Dumbbell,
      image: "/img/012c55e0-678f-4ac5-b1cc-2455a61be0ff.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "SpartanArmory Store" : "SpartanArmory Tienda",
      description: isEnglish
        ? "E-commerce specialized in sports equipment and training items, with integrated payment system, inventory management and order tracking."
        : "E-commerce especializado en equipamiento deportivo y artículos de entrenamiento, con sistema de pagos integrado, gestión de inventario y seguimiento de pedidos.",
      icon: ShoppingBag,
      image: "/img/67a5e77e-bfec-4ff5-ada6-bc6b1e848b64.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Institutional Renovation" : "Renovación Institucional",
      description: isEnglish
        ? "Institutional management system that modernizes administrative processes, including document management, internal communications and project tracking."
        : "Sistema de gestión institucional que moderniza procesos administrativos, incluyendo gestión documental, comunicaciones internas y seguimiento de proyectos.",
      icon: Building,
      image: "/img/67a5e77e-bfec-4ff5-ada6-bc6b1e848b64.png",
      demoUrl: "#",
      downloadUrl: "#"
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        {isEnglish ? "Featured Projects" : "Proyectos Destacados"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="glass-card overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <project.icon className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{project.description}</p>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a 
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  {isEnglish ? "Code" : "Código"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
