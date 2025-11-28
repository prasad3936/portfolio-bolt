import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaDownload,
  FaBriefcase,
  FaMedium,
} from "react-icons/fa";

import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

const Hero = () => {
  const handleDownloadCV = () => {
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

  const handleHireMe = () => {
    const msg = encodeURIComponent(
      "Hi Prasad, I would like to hire you for a DevOps project. Can we discuss?"
    );
    window.open(`https://wa.me/919637370116?text=${msg}`, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Prasad Chandrakant <br />
            <span className="text-blue-400">Zungare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
            DevOps and Cloud Engineer
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-300">
          <div className="flex items-center gap-2">
            <MdLocationPin size={20} />
            <span>Pune, Maharashtra, India</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail size={20} />
            <a
              href="mailto:prasadcpatil246@gmail.com"
              className="hover:text-blue-400 transition"
            >
              prasadcpatil246@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MdPhone size={20} />
            <span>9637370116, 9637354092</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {/* GitHub */}
          <a
            href="https://github.com/prasad3936"
            target="_blank"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
          >
            <FaGithub size={26} className="text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/prasad-zungare"
            target="_blank"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
          >
            <FaLinkedin size={26} className="text-blue-400" />
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@prasadcpatil246"
            target="_blank"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
          >
            <FaMedium size={26} className="text-white" />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/PrasadP32797493"
            target="_blank"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
          >
            <FaTwitter size={26} className="text-blue-300" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/prasad_zungare_patil/?hl=en"
            target="_blank"
            className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
          >
            <FaInstagram size={26} className="text-pink-400" />
          </a>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppContact}
            className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition"
          >
            <FaWhatsapp size={26} className="text-white" />
          </button>

          {/* Download CV */}
          <button
            onClick={handleDownloadCV}
            className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            <FaDownload size={26} className="text-white" />
          </button>

          {/* Hire Me */}
          <button
            onClick={handleHireMe}
            className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
            title="Hire Me"
          >
            <FaBriefcase size={26} className="text-white" />
          </button>
        </div>

        {/* Scroll Down indicator */}
        <div className="animate-bounce">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-400 hover:text-white transition"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
