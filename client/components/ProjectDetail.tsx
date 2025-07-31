import React from 'react';
import { X, Clock, User, Phone, ExternalLink, Github, BarChart3, TrendingUp, DollarSign } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    duration: string;
    manager: string;
    supportContact: string;
    features: string[];
    outcomes: string[];
  };
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const relatedServices = [
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Data analysis and actionable insights. Database optimization and analytics focused.'
    },
    {
      icon: TrendingUp,
      title: 'Strategy Consulting', 
      description: 'Strategic planning and business optimization expert guidance advice.'
    },
    {
      icon: DollarSign,
      title: 'Financial Planning',
      description: 'Financial projections and business growth planning services.'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-portfolio-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-portfolio-border">
          <div>
            <h2 className="text-2xl font-bold text-portfolio-text">{project.title}</h2>
            <p className="text-portfolio-text-muted">Project Details</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-portfolio-border rounded-lg transition-colors duration-200"
          >
            <X className="h-6 w-6 text-portfolio-text-muted" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 p-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-portfolio-text mb-4">{project.title}</h3>
              <p className="text-portfolio-text-muted leading-relaxed mb-6">{project.description}</p>
              
              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-portfolio-text mb-3">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-3"></div>
                      <span className="text-portfolio-text-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Outcomes */}
              <div className="mb-6">
                <h4 className="font-semibold text-portfolio-text mb-3">Project Outcomes:</h4>
                <div className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-3 mt-2"></div>
                      <span className="text-portfolio-text-muted text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-portfolio-text mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-portfolio-border text-portfolio-text-muted text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center px-6 py-3 border border-portfolio-border text-portfolio-text rounded-lg hover:bg-portfolio-border transition-all duration-200"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Information */}
            <div className="portfolio-card p-6">
              <h3 className="text-lg font-semibold text-portfolio-text mb-4">Project Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
                  <div>
                    <div className="font-medium text-portfolio-text">Project Duration</div>
                    <div className="text-sm text-portfolio-text-muted">{project.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
                  <div>
                    <div className="font-medium text-portfolio-text">Project Manager</div>
                    <div className="text-sm text-portfolio-text-muted">{project.manager}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
                  <div>
                    <div className="font-medium text-portfolio-text">Contact Support</div>
                    <div className="text-sm text-portfolio-text-muted">{project.supportContact}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="portfolio-card p-6">
              <h3 className="text-lg font-semibold text-portfolio-text mb-4">Related Services</h3>
              
              <div className="space-y-4">
                {relatedServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <service.icon className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
                    <div>
                      <div className="font-medium text-portfolio-text text-sm">{service.title}</div>
                      <div className="text-xs text-portfolio-text-muted">{service.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
