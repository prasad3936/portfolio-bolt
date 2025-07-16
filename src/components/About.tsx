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
                A passionate and skilled DevOps and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring. I have completed RHCSA and been certified by kodekloud  for AWS Certified Cloud Practitioner and Linux Foundation Certified System Administrator (LFCS). 

Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS  as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and logging tools like  Grafana to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort. 

With a Bachelor's degree in Computer Science and a strong GPA, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps, SRE and cloud engineering projects.
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