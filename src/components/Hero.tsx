import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  MessageCircle,
} from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    // Open Google Drive CV link in new tab
    window.open(
      "https://drive.google.com/file/d/1-6MhKVO70LJo5tUYYu6bNdSUH89hcgYb/view?usp=sharing"
    );
  };

  const handleWhatsAppContact = () => {
    const whatsappMessage = encodeURIComponent(
      "Hi Prasad! I found your portfolio and would like to connect with you regarding DevOps opportunities."
    );
    window.open(`https://wa.me/919637370116?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Prasad Chandrakant
            <br />
            <span className="text-blue-400">Zungare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
            DevOps and Cloud Engineer
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Pune</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a
              href="mailto:prasadcpatil246@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              prasadcpatil246@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>9637370116</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            <button
              onClick={handleWhatsAppContact}
              className="hover:text-green-400 transition-colors"
            >
              WhatsApp
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/prasad3936"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors group"
          >
            <Github
              size={24}
              className="text-gray-300 group-hover:text-white"
            />
          </a>
          <a
            href="https://linkedin.com/in/prasad-zungare"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors group"
          >
            <Linkedin
              size={24}
              className="text-gray-300 group-hover:text-white"
            />
          </a>
          <a
            href="https://medium.com/@prasadcpatil246"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors group"
          >
            <ExternalLink
              size={24}
              className="text-gray-300 group-hover:text-white"
            />
          </a>
          <button
            onClick={handleWhatsAppContact}
            className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors group"
          >
            <MessageCircle size={24} className="text-white" />
          </button>
          <button
            onClick={handleDownloadCV}
            className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors group"
            title="Download CV"
          >
            <Download size={24} className="text-white" />
          </button>
        </div>

        <div className="animate-bounce">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-400 hover:text-white transition-colors"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto mb-2 relative">
              <div className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
