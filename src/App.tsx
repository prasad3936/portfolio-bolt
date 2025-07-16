import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Courses from './components/Courses';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';

const Portfolio = () => (
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

const Portfolio = () => (
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

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </ContentProvider>
    </AuthProvider>
            />
          </Routes>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;