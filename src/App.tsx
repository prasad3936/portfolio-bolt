import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Courses from "./components/Courses";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaDownload,
  FaBriefcase,
} from "react-icons/fa";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { FaMedium } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Courses />
      <Certificates />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
