import React from "react";
import { DollarSign, GitBranch, Zap, BarChart, ServerCog } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Automation for Android Releases",
      description:
        "Designed and implemented a production-grade CI/CD pipeline using multi-stage Docker builds and GitHub Actions to automate signed Android release APK generation in a fully reproducible environment.",
      icon: ServerCog,
      technologies: [
        "Docker (Multi-stage Builds)",
        "GitHub Actions",
        "Android SDK",
        "Gradle",
        "CI/CD Pipelines",
        "Release Engineering",
      ],
      highlights: [
        "Automated end-to-end Android release pipeline, reducing manual effort by ~80%",
        "Improved release consistency to 100% across local, CI, and Docker environments",
        "Reduced build and validation time by ~40–50%",
        "Implemented secure keystore handling via CI secrets with zero leaks",
      ],
    },

    {
      title: "Cloud Cost Optimization",
      description:
        "Automated AWS Lambda & CloudWatch-based server lifecycle management with Docker cleanup via cronjobs, achieving 60–70% cloud cost reduction.",
      icon: DollarSign,
      technologies: ["AWS Lambda", "CloudWatch", "Docker", "Cronjobs"],
      highlights: [
        "60-70% cost reduction",
        "Automated lifecycle management",
        "Efficient resource cleanup",
      ],
    },

    {
      title: "End-to-End CI/CD Pipeline",
      description:
        "Real-time server monitoring application with Flask and Docker, implementing Jenkins & Gitea Actions CI/CD pipeline with Kubernetes deployment using ArgoCD.",
      icon: GitBranch,
      technologies: [
        "Flask",
        "Docker",
        "Jenkins",
        "Gitea Actions",
        "Kubernetes",
        "ArgoCD",
      ],
      highlights: [
        "Real-time monitoring",
        "Automated deployment",
        "GitOps implementation",
      ],
    },
  ];

  const certificates = [
    "RHCSA",
    "AWS Cloud Practitioner – KodeKloud",
    "Ansible Basics – KodeKloud",
    "DevOps Course – HeyDevOps",
    "OpenShift DO101",
    "LFCS – KodeKloud",
    "Kubernetes for Beginners – KodeKloud",
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                      <IconComponent size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="text-gray-300 flex items-start"
                        >
                          <Zap
                            size={16}
                            className="text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Certificates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <div className="flex items-center">
                  <BarChart
                    size={20}
                    className="text-blue-400 mr-3 flex-shrink-0"
                  />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
