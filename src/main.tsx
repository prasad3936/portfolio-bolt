import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
