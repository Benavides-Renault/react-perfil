import { Sword, Dumbbell, Tent, Music } from "lucide-react";

interface ExtracurricularProps {
  isEnglish: boolean;
}

const Extracurricular = ({ isEnglish }: ExtracurricularProps) => {
  const achievements = [
    {
      icon: Sword,
      title: isEnglish ? "Martial Arts" : "Artes Marciales",
      description: isEnglish 
        ? "Dedication and experience in multiple martial disciplines."
        : "Dedicación y experiencia en múltiples disciplinas marciales.",
      achievements: isEnglish 
        ? [
            "Black Belt in Karate",
            "Active Judo Practitioner",
            "Training in Jiu-jitsu",
            "Boxing Experience"
          ]
        : [
            "Cinturón negro en Karate",
            "Practicante activo de Judo",
            "Entrenamiento en Jiu-jitsu",
            "Experiencia en Boxeo"
          ],
      image: "/lovable-uploads/7a31e718-1895-437f-9b5c-510334198737.png"
    },
    {
      icon: Dumbbell,
      title: isEnglish ? "Powerlifting" : "Powerlifting",
      description: isEnglish
        ? "Professional competitor and certified judge."
        : "Competidor profesional y juez certificado.",
      achievements: isEnglish
        ? [
            "Competitor at the national level",
            "Certified judge of national competitions",
            "Experience in event organization",
            "Technical advice to other athletes"
          ]
        : [
            "Competidor a nivel nacional",
            "Juez certificado de competencias nacionales",
            "Experiencia en organización de eventos",
            "Asesoramiento técnico a otros atletas"
          ],
      image: "/lovable-uploads/a7018630-1e06-4c53-82e1-d2ed416cd3f4.png"
    },
    {
      icon: Tent,
      title: isEnglish ? "Scout" : "Scout",
      description: isEnglish
        ? "Leadership and personal development in the Scout movement."
        : "Liderazgo y desarrollo personal en el movimiento Scout.",
      achievements: isEnglish
        ? [
            "Maximum Scout advances obtained",
            "National recognition",
            "Participation in international events",
            "Mentor of new generations"
          ]
        : [
            "Máximos adelantos Scout obtenidos",
            "Reconocimiento a nivel nacional",
            "Participación en eventos internacionales",
            "Mentor de nuevas generaciones"
          ],
      image: "/lovable-uploads/a46edb24-b081-4953-99a1-a526e9a0610a.png"
    },
    {
      icon: Music,
      title: isEnglish ? "Music" : "Música",
      description: isEnglish
        ? "Artistic development through music."
        : "Desarrollo artístico a través de la música.",
      achievements: isEnglish
        ? [
            "Experienced saxophonist",
            "Participation in musical ensembles",
            "Presentations at events",
            "Continuous musical training"
          ]
        : [
            "Saxofonista experimentado",
            "Participación en ensambles musicales",
            "Presentaciones en eventos",
            "Formación musical continua"
          ],
      image: "/lovable-uploads/3385f62d-9d2a-418b-91d1-f748e15aa478.png"
    }
  ];

  return (
    <section id="extracurricular" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {isEnglish ? "Extracurricular Activities" : "Actividades Extracurriculares"}
      </h2>
      
      <div className="space-y-12">
        {achievements.map((activity, index) => (
          <div 
            key={index}
            className="glass-card p-6 grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <activity.icon className="w-8 h-8" />
                <h3 className="text-2xl font-semibold">{activity.title}</h3>
              </div>
              <p className="text-gray-400">{activity.description}</p>
              <ul className="space-y-2">
                {activity.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first md:order-last flex items-center justify-center">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-[300px] object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurricular;
