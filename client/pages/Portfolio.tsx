import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import ProjectDetail from '../components/ProjectDetail';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const filters = ['All Projects', 'Web Design', 'Mobile Apps', 'UI/UX', 'Backend'];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Design',
      image: '/api/placeholder/400/300',
      description: 'Modern e-commerce solution with advanced filtering and payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile Apps',
      image: '/api/placeholder/400/300',
      description: 'Cross-platform mobile app for team collaboration and project management',
      technologies: ['React Native', 'Firebase', 'Redux'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Digital Banking Interface',
      category: 'UI/UX',
      image: '/api/placeholder/400/300',
      description: 'Intuitive banking interface design focused on user experience and accessibility',
      technologies: ['Figma', 'Sketch', 'Principle'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'Web Design',
      image: '/api/placeholder/400/300',
      description: 'Complete real estate marketplace with advanced search and virtual tours',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'Backend',
      image: '/api/placeholder/400/300',
      description: 'Real-time analytics dashboard with data visualization and reporting',
      technologies: ['Python', 'Django', 'Chart.js', 'Redis'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'Social Media App',
      category: 'Mobile Apps',
      image: '/api/placeholder/400/300',
      description: 'Social networking platform with real-time messaging and content sharing',
      technologies: ['Flutter', 'Firebase', 'WebRTC'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="portfolio-heading">Portfolio</h1>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            Explore my latest projects showcasing innovative solutions across web development, 
            mobile applications, and user interface design. Each project represents a unique 
            challenge solved with modern technologies and best practices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-portfolio-accent text-white'
                  : 'bg-portfolio-card text-portfolio-text-muted hover:text-portfolio-text hover:bg-portfolio-border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card group overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">Project Image</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-portfolio-accent rounded-full text-white hover:bg-opacity-80 transition-all duration-200"
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-portfolio-card rounded-full text-portfolio-text hover:bg-portfolio-border transition-all duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-portfolio-accent font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-portfolio-text mb-2">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-portfolio-border text-portfolio-text-muted text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-portfolio-accent hover:text-portfolio-text transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-portfolio-text-muted hover:text-portfolio-text transition-colors duration-200 text-sm"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="portfolio-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-portfolio-text-muted mb-6">
              I'm always excited to work on new challenges and bring innovative ideas to life. 
              Let's discuss how we can collaborate on your next project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              Start a Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
