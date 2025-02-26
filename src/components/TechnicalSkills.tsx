
import { Code, Cpu, Atom, Workflow, Brain } from "lucide-react";

interface TechnicalSkillsProps {
  isEnglish: boolean;
}

const TechnicalSkills = ({ isEnglish }: TechnicalSkillsProps) => {
  return (
    <section id="technical-skills" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {isEnglish ? "Technical Skills" : "Habilidades Técnicas"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 smooth-fade skill-card">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 mr-4" />
            <h3 className="text-2xl font-semibold">
              {isEnglish ? "Web Development" : "Desarrollo Web"}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-900 dark:text-gray-400">JavaScript • HTML • CSS • React</p>
            <p className="text-gray-800 dark:text-gray-400">
              {isEnglish 
                ? "Experience in modern web application development using the latest technologies. Specialized in React and its ecosystem, creating interactive and responsive interfaces. Mastery of modern JavaScript and its frameworks."
                : "Experiencia en desarrollo de aplicaciones web modernas utilizando las últimas tecnologías. Especializado en React y su ecosistema, creando interfaces interactivas y responsivas. Dominio de JavaScript moderno y sus frameworks."}
            </p>
          </div>
        </div>
        
        <div className="glass-card p-8 smooth-fade skill-card">
          <div className="flex items-center mb-6">
            <Brain className="w-8 h-8 mr-4" />
            <h3 className="text-2xl font-semibold">
              {isEnglish ? "Python and Data Science" : "Python y Ciencia de Datos"}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-900 dark:text-gray-400">Python • NumPy • Pandas • Machine Learning</p>
            <p className="text-gray-800 dark:text-gray-400">
              {isEnglish
                ? "Development of advanced solutions using Python for data analysis and machine learning. Experience in processing and analyzing large datasets. Implementation of predictive models and machine learning algorithms."
                : "Desarrollo de soluciones avanzadas utilizando Python para análisis de datos y machine learning. Experiencia en procesamiento y análisis de grandes conjuntos de datos. Implementación de modelos predictivos y algoritmos de aprendizaje automático."}
            </p>
          </div>
        </div>

        <div className="glass-card p-8 smooth-fade skill-card">
          <div className="flex items-center mb-6">
            <Cpu className="w-8 h-8 mr-4" />
            <h3 className="text-2xl font-semibold">
              {isEnglish ? "PLC and Automation" : "PLC y Automatización"}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-900 dark:text-gray-400">
              {isEnglish ? "Industrial Automation • Process Control" : "Automatización Industrial • Control de Procesos"}
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              {isEnglish
                ? "Design and implementation of industrial control systems using PLCs. Experience in programming logic controllers and SCADA systems. Optimization of industrial processes through automation."
                : "Diseño e implementación de sistemas de control industrial utilizando PLCs. Experiencia en programación de controladores lógicos y sistemas SCADA. Optimización de procesos industriales mediante automatización."}
            </p>
          </div>
        </div>

        <div className="glass-card p-8 smooth-fade skill-card">
          <div className="flex items-center mb-6">
            <Atom className="w-8 h-8 mr-4" />
            <h3 className="text-2xl font-semibold">
              {isEnglish ? "Physics and Mathematics" : "Física y Matemáticas"}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-900 dark:text-gray-400">
              {isEnglish ? "Analysis • Modeling • Problem Solving" : "Análisis • Modelado • Resolución de Problemas"}
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              {isEnglish
                ? "Solid background in physics and mathematics applied to industrial problems. Ability to model and analyze complex systems. Application of physical principles in engineering solutions."
                : "Sólida formación en física y matemáticas aplicadas a problemas industriales. Capacidad para modelar y analizar sistemas complejos. Aplicación de principios físicos en soluciones de ingeniería."}
            </p>
          </div>
        </div>

        <div className="glass-card p-8 smooth-fade skill-card">
          <div className="flex items-center mb-6">
            <Workflow className="w-8 h-8 mr-4" />
            <h3 className="text-2xl font-semibold">
              {isEnglish ? "Process Automation" : "Automatización de Procesos"}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-900 dark:text-gray-400">
              {isEnglish ? "Optimization • Efficiency • Control" : "Optimización • Eficiencia • Control"}
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              {isEnglish
                ? "Design and implementation of automated systems for industrial processes. Integration of technologies to improve operational efficiency. Development of customized solutions according to specific needs."
                : "Diseño e implementación de sistemas automatizados para procesos industriales. Integración de tecnologías para mejorar la eficiencia operativa. Desarrollo de soluciones personalizadas según necesidades específicas."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
