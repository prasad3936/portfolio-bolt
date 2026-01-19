import React from "react";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "DevOps Intern",
      company: "Hisan Labs Pvt Ltd",
      location: "Pune",
      period: "March 2025 – Nov 2025",
      responsibilities: [
        "Designed and optimized end-to-end CI/CD pipelines using Jenkins, GitHub, and SonarQube, integrating plugins and webhook triggers to automate build, test, and deployment workflows across multiple environments.",
        "Built and maintained multi-stage Dockerfiles for various tech stacks, created container images, and pushed them toprivate registries. Managed Docker networks and volumes using Docker Compose for seamless container orchestration.",
        "Deployed and managed EKS Kubernetes clusters, configuring core objects such as Deployments, Services, and Ingress controllers to ensure scalable and resilient application delivery.",
        "Handled Helm chart repositories, including addition, update, and removal of charts based on evolving deployment requirements and versioning strategies.",
        "Automated infrastructure provisioning using Terraform, developing reusable modules and managing state with remote backends to ensure consistent and scalable infrastructure deployments.",
        "Worked extensively with AWS services including EC2, Auto Scaling Groups, Load Balancers, VPC with Route53,IAM, RDS, S3, Lambda, CloudFront, and CloudFormation to architect and maintain cloud-native environments.",
        "Configured servers using Ansible Playbooks for automated provisioning, environment setup, and configuration management across multiple Linux distributions.",
        "Implemented monitoring and observability solutions tailored to client needs using Grafana, Prometheus, Datadog, and Splunk, enabling real-time metrics tracking and alerting.",
        "Administered Linux environments (Ubuntu, RedHat, CentOS) for server setup, performance tuning, and troubleshooting, ensuring system stability and uptime.",
        "Collaborated with development and operations teams for source code management using GitHub and GitLab, enforcing version control best practices and streamlined Git workflows.",
      ],
    },
    {
      title: "DevOps Development Engineer",
      company: "Real IT Solutions",
      location: "Pune",
      period: "May 2024 – Nov 2024",
      responsibilities: [
        "Architected and maintained scalable cloud environments using EC2, RDS, VPC, EFS, and EBS for seamless application deployment and performance optimization. Created and maintained users with IAM for various roles and responsibilities",
        "Developed robust shell scripts to automate server provisioning tasks including Docker and k3s installation, disk partitioning, codebase backups, and cleanup routines—boosting operational efficiency.",
        "Maintained and patched Docker images and databases, ensuring secure and up-to-date deployments across environments.",
        "Designed and implemented an AWS Lambda function integrated with EventBridge to schedule the startup and shutdown of development servers during off-hours, minimizing idle server runtime. Achieved a 60-70% reduction in idle server costs, contributing significantly to cloud cost savings.",
        "Developed cronjobs with shell scripts to periodically clean up disk storage by removing unused Docker containers, images, and volumes. Improved disk utilization efficiency by 30-40%, reducing the need for frequent storage upgrades and associated expenses.",
        "Maintained SOPs and documentations for newly implemented architectures, increasing EBS volume with zero downtime.",
        "Built multi-stage Dockerfiles for diverse tech stacks (Node.js, Vue.js, Flutter, Angular, Next.js). Managed volumes and networks with Docker Compose, used private registries with Trivy vulnerability scanning for secure image delivery.",
        "Assisted In Development of In-House monitoring and observability tool with flask.",
        "Implemented secure HTTPS protocols by setting up SSL certifications with Certbot and Integrated DNS Records and domain management with hostme.com",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech",
      institution: "Marathwada Institute Of Technology",
      period: "2019–2023",
    },
    {
      degree: "HSC",
      institution: "Toshniwal College, Hingoli",
      period: "2017–2019",
    },
  ];

  return (
    <section id="resume" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg p-8 border border-zinc-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-blue-400 mr-3 mt-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg p-6 border border-zinc-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center">
                    <GraduationCap size={24} className="text-blue-400 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
