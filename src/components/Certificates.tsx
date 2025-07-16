import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      name: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'Red Hat',
      date: '2023',
      description: 'Linux system administration and Red Hat Enterprise Linux expertise',
      category: 'Linux Administration',
      verified: true
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'KodeKloud',
      date: '2023',
      description: 'AWS cloud fundamentals and core services knowledge',
      category: 'Cloud Computing',
      verified: true
    },
    {
      name: 'Linux Foundation Certified System Administrator (LFCS)',
      issuer: 'KodeKloud',
      date: '2023',
      description: 'Linux system administration skills and troubleshooting',
      category: 'Linux Administration',
      verified: true
    },
    {
      name: 'Kubernetes for Beginners',
      issuer: 'KodeKloud',
      date: '2023',
      description: 'Container orchestration with Kubernetes',
      category: 'Container Orchestration',
      verified: true
    },
    {
      name: 'Ansible Basics',
      issuer: 'KodeKloud',
      date: '2023',
      description: 'Configuration management and automation',
      category: 'Automation',
      verified: true
    },
    {
      name: 'DevOps Course Completion',
      issuer: 'HeyDevOps',
      date: '2023',
      description: 'Comprehensive DevOps practices and tools',
      category: 'DevOps',
      verified: true
    },
    {
      name: 'OpenShift DO101',
      issuer: 'Red Hat',
      date: '2023',
      description: 'Introduction to OpenShift container platform',
      category: 'Container Platform',
      verified: true
    }
  ];

  const categories = [...new Set(certificates.map(cert => cert.category))];

  return (
    <section id="certificates" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Award size={24} className="text-blue-400" />
                  </div>
                  {cert.verified && (
                    <div className="bg-green-500/10 px-2 py-1 rounded-full">
                      <span className="text-green-400 text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <span className="text-blue-400 font-medium text-sm">{cert.issuer}</span>
                  <span className="text-gray-500 mx-2">•</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-zinc-700 text-gray-300 px-2 py-1 rounded text-xs">
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <Award size={20} className="text-blue-400 mr-3" />
              <span className="text-gray-300">
                <span className="text-white font-semibold">{certificates.length}</span> Professional Certifications Earned
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;