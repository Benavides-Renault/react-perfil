
import { Phone, Mail, Home } from "lucide-react";

interface ContactProps {
  isEnglish: boolean;
}

const Contact = ({ isEnglish }: ContactProps) => {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto glass-card p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          {isEnglish ? "Contact Me" : "Contáctame"}
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mb-8 text-center">
          {isEnglish 
            ? "If you want to learn more about my projects, collaborate on any initiative or have any questions, don't hesitate to contact me."
            : "Si deseas obtener más información sobre mis proyectos, colaborar en alguna iniciativa o tienes alguna consulta, no dudes en ponerte en contacto conmigo."
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <a 
            href="https://wa.me/50683476182" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 flex items-center justify-center gap-3 hover:bg-white/20 transition-colors text-gray-800 dark:text-white"
          >
            <Phone className="w-6 h-6" />
            WhatsApp
          </a>
          <a 
            href="mailto:orlanisbe02@hotmail.com"
            className="glass-card p-4 flex items-center justify-center gap-3 hover:bg-white/20 transition-colors text-gray-800 dark:text-white"
          >
            <Mail className="w-6 h-6" />
            Email
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-800 dark:text-white">+506 8347-6182</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-800 dark:text-white">orlanisbe02@hotmail.com</span>
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <Home className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-800 dark:text-white">Alajuela, Costa Rica</span>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder={isEnglish ? "Your name" : "Tu nombre"}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-background border border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={isEnglish ? "Your email" : "Tu email"}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-background border border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <textarea
              placeholder={isEnglish ? "Your message" : "Tu mensaje"}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-background border border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-background font-semibold py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            {isEnglish ? "Send Message" : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
