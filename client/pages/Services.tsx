import React from 'react';
import { Code, Smartphone, Palette, Database, Cloud, Users, Clock, Shield, Zap } from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications using modern frameworks and technologies',
      features: ['React/Next.js Applications', 'Node.js Backend Development', 'Database Design & Implementation', 'API Integration & Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: ['React Native Apps', 'Flutter Development', 'Progressive Web Apps', 'App Store Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance digital experiences',
      features: ['User Interface Design', 'User Experience Research', 'Prototyping & Wireframing', 'Design System Creation']
    },
    {
      icon: Database,
      title: 'Backend Solutions',
      description: 'Scalable server-side architecture and database management',
      features: ['API Development', 'Database Architecture', 'Performance Optimization', 'Third-party Integrations']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup and deployment solutions',
      features: ['AWS/Azure/GCP Setup', 'DevOps & CI/CD', 'Scalable Architecture', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Technical consulting and project management services',
      features: ['Technical Strategy', 'Code Review & Audit', 'Team Training', 'Project Management']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements, goals, and target audience through detailed consultation.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Creating detailed project roadmap, wireframes, and technical specifications.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution using best practices and modern development methodologies.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Testing, deployment, and providing ongoing support for your project.'
    }
  ];

  const features = [
    { icon: Clock, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
    { icon: Shield, title: 'Secure Solutions', description: 'Security-first approach in all developments' },
    { icon: Zap, title: 'Performance', description: 'Optimized for speed and scalability' }
  ];

  return (
    <div className="portfolio-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="portfolio-heading">Services</h1>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            I offer comprehensive digital solutions from concept to deployment, 
            helping businesses transform their ideas into powerful digital experiences.
          </p>
        </div>

        {/* Service Hero Section */}
        <div className="portfolio-card p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-portfolio-text mb-6">
                Digital Marketing Solutions
              </h2>
              <p className="text-portfolio-text-muted leading-relaxed mb-6">
                I help businesses create powerful digital marketing strategies that drive results. 
                From brand identity to digital campaigns, my solutions are designed to maximize 
                your online presence and engagement.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-portfolio-text mb-2">✓ Search Engine Optimization</h4>
                  <h4 className="font-semibold text-portfolio-text mb-2">✓ Content Marketing Strategy</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-text mb-2">✓ Social Media Marketing</h4>
                  <h4 className="font-semibold text-portfolio-text mb-2">✓ Email Marketing Campaigns</h4>
                </div>
              </div>
              
              <p className="text-portfolio-text-muted text-sm">
                Offering tailored strategies at various price points for individuals and enterprises, 
                plus a complimentary consultation to determine the best approach for your specific needs.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-96 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Service Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="portfolio-card p-6 hover:border-portfolio-accent transition-all duration-300">
              <div className="w-12 h-12 bg-portfolio-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-portfolio-accent" />
              </div>
              
              <h3 className="text-lg font-semibold text-portfolio-text mb-3">
                {service.title}
              </h3>
              
              <p className="text-portfolio-text-muted text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-portfolio-text-muted text-sm">
                    <span className="text-portfolio-accent mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Information Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Process */}
          <div className="portfolio-card p-8">
            <h3 className="text-2xl font-bold text-portfolio-text mb-6">My Process</h3>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-portfolio-accent rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-text mb-1">{step.title}</h4>
                    <p className="text-portfolio-text-muted text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Information */}
          <div className="portfolio-card p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-portfolio-text mb-2">Service Information</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-portfolio-accent mr-3" />
                <div>
                  <div className="font-medium text-portfolio-text">Project Duration</div>
                  <div className="text-sm text-portfolio-text-muted">2-8 weeks</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="h-5 w-5 text-portfolio-accent mr-3" />
                <div>
                  <div className="font-medium text-portfolio-text">Project Manager</div>
                  <div className="text-sm text-portfolio-text-muted">Dedicated Support</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-portfolio-accent mr-3" />
                <div>
                  <div className="font-medium text-portfolio-text">Client Support</div>
                  <div className="text-sm text-portfolio-text-muted">24/7 Email Support</div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-portfolio-text mb-4">Related Services</h4>
            <div className="space-y-3">
              <div className="flex items-center text-portfolio-text-muted text-sm">
                <Palette className="h-4 w-4 text-portfolio-accent mr-3" />
                Business Analytics
              </div>
              <div className="flex items-center text-portfolio-text-muted text-sm">
                <Code className="h-4 w-4 text-portfolio-accent mr-3" />
                Strategy Consulting
              </div>
              <div className="flex items-center text-portfolio-text-muted text-sm">
                <Zap className="h-4 w-4 text-portfolio-accent mr-3" />
                Financial Planning
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-portfolio-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-portfolio-accent" />
              </div>
              <h3 className="text-lg font-semibold text-portfolio-text mb-2">{feature.title}</h3>
              <p className="text-portfolio-text-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="portfolio-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-portfolio-text-muted mb-6">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
