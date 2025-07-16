import React from 'react';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'HeyDevOps Job Ready Course',
      provider: 'HeyDevOps',
      description: 'Comprehensive DevOps training covering industry best practices, real-world projects, and job preparation.',
      topics: ['CI/CD Pipelines', 'Docker & Kubernetes', 'AWS Cloud Services', 'Infrastructure as Code', 'Monitoring & Logging'],
      status: 'Completed',
      certificate: true
    },
    {
      title: 'DevOps Course',
      provider: 'Udemy - Imran Teli',
      description: 'In-depth DevOps course covering essential tools and practices for modern software development lifecycle.',
      topics: ['Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'Terraform', 'Git'],
      status: 'Completed',
      certificate: true
    },
    {
      title: 'AWS Cloud Practitioner',
      provider: 'KodeKloud',
      description: 'Foundational AWS cloud computing course covering core services and cloud concepts.',
      topics: ['EC2', 'S3', 'VPC', 'IAM', 'RDS', 'CloudFormation'],
      status: 'Completed',
      certificate: true
    },
    {
      title: 'Kubernetes for Beginners',
      provider: 'KodeKloud',
      description: 'Comprehensive introduction to Kubernetes container orchestration platform.',
      topics: ['Pods', 'Services', 'Deployments', 'ConfigMaps', 'Secrets', 'Ingress'],
      status: 'Completed',
      certificate: true
    },
    {
      title: 'Ansible Basics',
      provider: 'KodeKloud',
      description: 'Configuration management and automation using Ansible playbooks and modules.',
      topics: ['Playbooks', 'Modules', 'Inventory', 'Variables', 'Templates', 'Roles'],
      status: 'Completed',
      certificate: true
    },
    {
      title: 'Linux Foundation Certified System Administrator (LFCS)',
      provider: 'KodeKloud',
      description: 'Linux system administration fundamentals and advanced concepts.',
      topics: ['System Administration', 'Networking', 'Storage', 'Security', 'Troubleshooting'],
      status: 'Completed',
      certificate: true
    }
  ];

  return (
    <section id="courses" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Courses & Training</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                      <BookOpen size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>
                      <p className="text-blue-400 text-sm font-medium">{course.provider}</p>
                    </div>
                  </div>
                  {course.certificate && (
                    <div className="flex items-center bg-green-500/10 px-2 py-1 rounded-full">
                      <Award size={14} className="text-green-400 mr-1" />
                      <span className="text-green-400 text-xs font-medium">Certified</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{course.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Key Topics</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-zinc-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    course.status === 'Completed' 
                      ? 'bg-green-500/10 text-green-400' 
                      : 'bg-yellow-500/10 text-yellow-400'
                  }`}>
                    {course.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;