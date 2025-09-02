import React from 'react';
import { Cloud, Container, Settings, Code, Server, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Cloud', items: ['AWS', 'OpenStack', 'Azure'], icon: Cloud },
    { category: 'Containers', items: ['Docker', 'Podman'], icon: Container },
    { category: 'Orchestration', items: ['Kubernetes'], icon: Settings },
    { category: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'Gitea Actions', 'ArgoCD'], icon: GitBranch },
    { category: 'IaC', items: ['Terraform'], icon: Code },
    { category: 'Config Mgmt', items: ['Ansible'], icon: Settings },
    { category: 'Languages', items: ['Bash', 'Python'], icon: Code },
    { category: 'Linux', items: ['Red Hat', 'Ubuntu', 'CentOS'], icon: Server },
    { category: 'Version Control', items: ['Git', 'Gitea', 'GitHub'], icon: GitBranch }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          
          <div className="mb-16">
            <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
               👋 Hi, I’m [Your Name]

Cloud × DevOps Engineer | Creator | Blogger

💡 “Push to Prod — bringing ideas to life with code.”

I code, I write YAMLs, and I love turning ideas into products. From designing infrastructure to deploying containers, I bring concepts to life using AWS, Kubernetes, Docker, GitHub Actions, and ArgoCD.

I document the journey along the way — sharing what I learn through blogs on Medium so others in the DevOps and cloud community can benefit too.

When I’m not working with tech, you’ll probably find me:
📚 Reading books on mythology & history
🏍️ Riding through countryside roads
🌱 Spending time on my farm

🚀 What I Do

Cloud Infrastructure with AWS

Containerization & Orchestration (Docker, Kubernetes, Podman)

CI/CD Pipelines with GitHub Actions, Jenkins, ArgoCD

Infrastructure as Code (Ansible, Terraform, YAML-driven automation)

App Development & Automation Workflows
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.category}
                  className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent size={24} className="text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
