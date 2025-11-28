import React from "react";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "DevOps Development Engineer",
      company: "Real IT Solutions",
      location: "Pune",
      period: "May 2024 – Nov 2024",
      responsibilities: [
        "Designed and optimized CI/CD pipelines using Jenkins, GitHub, and SonarQube with webhook automation",
        "Built and maintained multi-stage Dockerfiles and pushed secure images to private registries",
        "Managed Docker networks, volumes, and multi-container orchestration using Docker Compose",
        "Deployed & managed Kubernetes workloads on EKS including Deployments, Services, and Ingress controllers",
        "Implemented and maintained Helm charts for versioned application deployments",
        "Managed AWS VPC, subnets, EC2, RDS, IAM, Route53, S3, EFS, EBS, CloudFront and CloudFormation",
        "Administered RDS MySQL databases including backups, tuning, and migrations",
        "Developed automation scripts for server provisioning, Docker/k3s setup, backups and cleanups",
        "Created Lambda + EventBridge automation to schedule server uptime, reducing idle costs by 60–70%",
        "Developed cron-based disk cleanup improving storage efficiency by 30–40%",
        "Migrated archival logs from EFS to S3 with lifecycle rules, reducing storage costs by 95–99%",
        "Performed EBS volume expansion with zero downtime and maintained SOP documentation",
        "Implemented SSL via Certbot and managed DNS records on hosting providers",
        "Managed Gitea source control infrastructure for internal development teams",
        "Set up monitoring dashboards with Grafana, Prometheus, Datadog and Splunk",
        "Assisted in developing an in-house observability/monitoring tool using Flask",
        "Wrote detailed documentation for deployments, automation scripts, and DevOps workflows",
      ],
    },
    {
      title: "System Administrator Intern",
      company: "LinuxWorld Informatics",
      location: "Jaipur",
      period: "Jul 2023 – Sep 2023",
      responsibilities: [
        "Hands-on Red Hat Linux System Administration",
        "Configured secure, scalable Linux-based server infrastructures",
      ],
    },
    {
      title: "AWS Intern",
      company: "Maxgen Technologies",
      location: "Pune",
      period: "Mar 2023 – Jun 2023",
      responsibilities: [
        "Worked with AWS services: EC2, RDS, VPC, S3, ECS, CloudFormation, IAM",
        "Implemented IaC using Terraform and CloudFormation",
        "Hosted WordPress using AWS infrastructure with secure IAM and CloudWatch monitoring",
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
