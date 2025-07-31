import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import ProjectDetail from '../components/ProjectDetail';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = ['All Projects', 'Web Design', 'Mobile Apps', 'UI/UX', 'Backend'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80',
      description: 'Modern e-commerce solution with advanced filtering and payment integration. Built with scalability and user experience in mind, featuring real-time inventory management and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
      githubUrl: 'https://github.com/alexanderchen/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.alexanderchen.dev',
      duration: '4 months',
      manager: 'Sarah Johnson',
      supportContact: '+1 (555) 123-4567',
      features: [
        'Advanced product filtering and search',
        'Secure payment integration with Stripe',
        'Real-time inventory management',
        'Mobile-responsive design',
        'Admin dashboard with analytics',
        'Multi-language support'
      ],
      outcomes: [
        'Increased conversion rate by 35%',
        'Reduced page load time by 60%',
        'Improved user engagement by 45%',
        'Successfully handled 10k+ concurrent users'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format&q=80',
      description: 'Cross-platform mobile app for team collaboration and project management with real-time synchronization and offline capabilities.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      githubUrl: 'https://github.com/alexanderchen/task-manager',
      liveUrl: 'https://taskapp.alexanderchen.dev',
      duration: '3 months',
      manager: 'Mike Rodriguez',
      supportContact: '+1 (555) 987-6543',
      features: [
        'Real-time task synchronization',
        'Offline functionality',
        'Team collaboration tools',
        'Push notifications',
        'File attachments',
        'Time tracking'
      ],
      outcomes: [
        'Adopted by 500+ teams',
        '99.9% uptime achieved',
        'Reduced project delays by 40%',
        'Increased team productivity by 25%'
      ]
    },
    {
      id: 3,
      title: 'Digital Banking Interface',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80',
      description: 'Intuitive banking interface design focused on user experience and accessibility, with modern design principles and security features.',
      technologies: ['Figma', 'Sketch', 'Principle', 'Adobe XD'],
      githubUrl: 'https://github.com/alexanderchen/banking-ui',
      liveUrl: 'https://banking-demo.alexanderchen.dev',
      duration: '2 months',
      manager: 'Emma Wilson',
      supportContact: '+1 (555) 456-7890',
      features: [
        'Accessible design (WCAG 2.1 AA)',
        'Biometric authentication UI',
        'Transaction visualization',
        'Dark/light mode support',
        'Multi-device consistency',
        'Security-first approach'
      ],
      outcomes: [
        'Improved user satisfaction by 50%',
        'Reduced support tickets by 30%',
        'Achieved 100% accessibility compliance',
        'Decreased transaction time by 45%'
      ]
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format&q=80',
      description: 'Complete real estate marketplace with advanced search, virtual tours, and comprehensive property management system.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com/alexanderchen/realestate-platform',
      liveUrl: 'https://realestate.alexanderchen.dev',
      duration: '6 months',
      manager: 'David Chen',
      supportContact: '+1 (555) 321-0987',
      features: [
        'Advanced property search filters',
        '360° virtual tours',
        'Interactive maps integration',
        'Mortgage calculator',
        'Agent dashboard',
        'Automated property valuation'
      ],
      outcomes: [
        'Listed 10,000+ properties',
        'Generated $2M+ in leads',
        'Reduced time-to-sale by 20%',
        'Achieved 95% user retention'
      ]
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'Backend',
      image: '/api/placeholder/400/300',
      description: 'Real-time analytics dashboard with data visualization and reporting capabilities for enterprise-level data processing.',
      technologies: ['Python', 'Django', 'Chart.js', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/alexanderchen/analytics-dashboard',
      liveUrl: 'https://analytics.alexanderchen.dev',
      duration: '5 months',
      manager: 'Lisa Park',
      supportContact: '+1 (555) 654-3210',
      features: [
        'Real-time data processing',
        'Custom dashboard creation',
        'Automated report generation',
        'API integrations',
        'Data export capabilities',
        'Role-based access control'
      ],
      outcomes: [
        'Processed 1TB+ data daily',
        'Reduced report generation time by 80%',
        'Improved decision-making speed by 60%',
        'Achieved 99.95% data accuracy'
      ]
    },
    {
      id: 6,
      title: 'Social Media App',
      category: 'Mobile Apps',
      image: '/api/placeholder/400/300',
      description: 'Social networking platform with real-time messaging, content sharing, and advanced community features.',
      technologies: ['Flutter', 'Firebase', 'WebRTC', 'Node.js'],
      githubUrl: 'https://github.com/alexanderchen/social-app',
      liveUrl: 'https://social.alexanderchen.dev',
      duration: '4 months',
      manager: 'James Thompson',
      supportContact: '+1 (555) 789-0123',
      features: [
        'Real-time messaging',
        'Video/voice calls',
        'Content creation tools',
        'Community groups',
        'Live streaming',
        'Content moderation AI'
      ],
      outcomes: [
        'Gained 50k+ active users',
        'Achieved 98% message delivery rate',
        'Reduced content moderation time by 70%',
        'Increased user engagement by 85%'
      ]
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
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="p-3 bg-portfolio-accent rounded-full text-white hover:bg-opacity-80 transition-all duration-200 hover:scale-110"
                      title="View Details"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-portfolio-card rounded-full text-portfolio-text hover:bg-portfolio-border transition-all duration-200 hover:scale-110"
                      title="View Source Code"
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
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex items-center text-portfolio-accent hover:text-portfolio-text transition-colors duration-200 text-sm font-medium"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetail
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}
