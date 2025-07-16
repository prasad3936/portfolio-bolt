import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  topics: string[];
  status: string;
  certificate: boolean;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  category: string;
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  medium: string;
  about: string;
}

interface ContentContextType {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  courses: Course[];
  certificates: Certificate[];
  projects: Project[];
  blogPosts: BlogPost[];
  updatePersonalInfo: (info: PersonalInfo) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, experience: Omit<Experience, 'id'>) => void;
  deleteExperience: (id: string) => void;
  addEducation: (education: Omit<Education, 'id'>) => void;
  updateEducation: (id: string, education: Omit<Education, 'id'>) => void;
  deleteEducation: (id: string) => void;
  addCourse: (course: Omit<Course, 'id'>) => void;
  updateCourse: (id: string, course: Omit<Course, 'id'>) => void;
  deleteCourse: (id: string) => void;
  addCertificate: (certificate: Omit<Certificate, 'id'>) => void;
  updateCertificate: (id: string, certificate: Omit<Certificate, 'id'>) => void;
  deleteCertificate: (id: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Omit<Project, 'id'>) => void;
  deleteProject: (id: string) => void;
  addBlogPost: (blogPost: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, blogPost: Omit<BlogPost, 'id'>) => void;
  deleteBlogPost: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Default data
const defaultPersonalInfo: PersonalInfo = {
  name: 'Prasad Chandrakant Zungare',
  title: 'DevOps and Cloud Engineer',
  location: 'Pune',
  email: 'prasadcpatil246@gmail.com',
  phone: '9637370116',
  whatsapp: '919637370116',
  github: 'https://github.com/prasad3936',
  linkedin: 'https://linkedin.com/in/prasad-zungare',
  medium: 'https://medium.com/@prasadcpatil246',
  about: 'A passionate and skilled DevOps and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring...'
};

const defaultExperiences: Experience[] = [
  {
    id: '1',
    title: 'DevOps Development Engineer',
    company: 'Real IT Solutions',
    location: 'Pune',
    period: 'May 2024 – Nov 2024',
    responsibilities: [
      'AWS VPC and subnet management',
      'Docker microservices deployment',
      'RDS MySQL database administration',
      'Gitea SCM management',
      'Automation, monitoring, logging, and documentation'
    ]
  }
];

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(defaultPersonalInfo);
  const [experiences, setExperiences] = useState<Experience[]>(defaultExperiences);
  const [education, setEducation] = useState<Education[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolio_content');
    if (savedData) {
      const data = JSON.parse(savedData);
      setPersonalInfo(data.personalInfo || defaultPersonalInfo);
      setExperiences(data.experiences || defaultExperiences);
      setEducation(data.education || []);
      setCourses(data.courses || []);
      setCertificates(data.certificates || []);
      setProjects(data.projects || []);
      setBlogPosts(data.blogPosts || []);
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    const data = {
      personalInfo,
      experiences,
      education,
      courses,
      certificates,
      projects,
      blogPosts
    };
    localStorage.setItem('portfolio_content', JSON.stringify(data));
  }, [personalInfo, experiences, education, courses, certificates, projects, blogPosts]);

  const generateId = () => Date.now().toString();

  const updatePersonalInfo = (info: PersonalInfo) => {
    setPersonalInfo(info);
  };

  // Experience methods
  const addExperience = (experience: Omit<Experience, 'id'>) => {
    setExperiences(prev => [...prev, { ...experience, id: generateId() }]);
  };

  const updateExperience = (id: string, experience: Omit<Experience, 'id'>) => {
    setExperiences(prev => prev.map(exp => exp.id === id ? { ...experience, id } : exp));
  };

  const deleteExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

  // Education methods
  const addEducation = (education: Omit<Education, 'id'>) => {
    setEducation(prev => [...prev, { ...education, id: generateId() }]);
  };

  const updateEducation = (id: string, education: Omit<Education, 'id'>) => {
    setEducation(prev => prev.map(edu => edu.id === id ? { ...education, id } : edu));
  };

  const deleteEducation = (id: string) => {
    setEducation(prev => prev.filter(edu => edu.id !== id));
  };

  // Course methods
  const addCourse = (course: Omit<Course, 'id'>) => {
    setCourses(prev => [...prev, { ...course, id: generateId() }]);
  };

  const updateCourse = (id: string, course: Omit<Course, 'id'>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...course, id } : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  // Certificate methods
  const addCertificate = (certificate: Omit<Certificate, 'id'>) => {
    setCertificates(prev => [...prev, { ...certificate, id: generateId() }]);
  };

  const updateCertificate = (id: string, certificate: Omit<Certificate, 'id'>) => {
    setCertificates(prev => prev.map(cert => cert.id === id ? { ...certificate, id } : cert));
  };

  const deleteCertificate = (id: string) => {
    setCertificates(prev => prev.filter(cert => cert.id !== id));
  };

  // Project methods
  const addProject = (project: Omit<Project, 'id'>) => {
    setProjects(prev => [...prev, { ...project, id: generateId() }]);
  };

  const updateProject = (id: string, project: Omit<Project, 'id'>) => {
    setProjects(prev => prev.map(proj => proj.id === id ? { ...project, id } : proj));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(proj => proj.id !== id));
  };

  // Blog post methods
  const addBlogPost = (blogPost: Omit<BlogPost, 'id'>) => {
    setBlogPosts(prev => [...prev, { ...blogPost, id: generateId() }]);
  };

  const updateBlogPost = (id: string, blogPost: Omit<BlogPost, 'id'>) => {
    setBlogPosts(prev => prev.map(post => post.id === id ? { ...blogPost, id } : post));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <ContentContext.Provider value={{
      personalInfo,
      experiences,
      education,
      courses,
      certificates,
      projects,
      blogPosts,
      updatePersonalInfo,
      addExperience,
      updateExperience,
      deleteExperience,
      addEducation,
      updateEducation,
      deleteEducation,
      addCourse,
      updateCourse,
      deleteCourse,
      addCertificate,
      updateCertificate,
      deleteCertificate,
      addProject,
      updateProject,
      deleteProject,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};