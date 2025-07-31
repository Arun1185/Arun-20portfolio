import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, CheckCircle } from 'lucide-react';
import StylishPhoto from '../components/StylishPhoto';

export default function Resume() {
  const experiences = [
    {
      title: 'Senior Software Architect',
      company: 'TechCorp Solutions',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Lead architecture design and implementation of enterprise-level applications',
        'Mentor junior developers and conduct technical code reviews',
        'Drive adoption of microservices architecture and cloud-native solutions',
        'Collaborate with product managers to deliver high-quality software solutions'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Studio One',
      period: '2019 - 2021',
      location: 'New York, NY',
      responsibilities: [
        'Developed end-to-end web applications using React, Node.js, and MongoDB',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Enhanced user experience through responsive design and performance optimization',
        'Managed client projects from conception to successful delivery'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      period: '2017 - 2019',
      details: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with Honors.'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'MIT',
      period: '2013 - 2017',
      details: 'Focus on algorithms and computer architecture with a minor in robotics.'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect - Professional',
    'Google Cloud Professional Architect'
  ];

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'AWS/Cloud', level: 75 }
  ];

  return (
    <div className="portfolio-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="portfolio-heading">Resume</h1>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            Experienced software architect passionate about building scalable applications and leading 
            high-performing development teams. My career spans full-stack development with expertise in 
            modern web technologies and cloud platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Profile & Skills */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="portfolio-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <StylishPhoto size="lg" initials="AC" className="mx-auto mb-4" />
              
              <h3 className="text-xl font-bold text-portfolio-text mb-2">Professional Summary</h3>
              <p className="text-sm text-portfolio-text-muted leading-relaxed">
                Innovative software architect with 8+ years of experience designing and implementing 
                scalable solutions. Passionate about mentoring teams and driving technical excellence.
              </p>
            </div>

            {/* Contact Information */}
            <div className="portfolio-card p-6">
              <h3 className="text-lg font-semibold text-portfolio-text mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-portfolio-text-muted">
                  <MapPin className="h-4 w-4 mr-3 text-portfolio-accent" />
                  San Francisco, CA 94102
                </div>
                <div className="flex items-center text-portfolio-text-muted">
                  <span className="h-4 w-4 mr-3 text-portfolio-accent">@</span>
                  alexander.chen@email.com
                </div>
                <div className="flex items-center text-portfolio-text-muted">
                  <span className="h-4 w-4 mr-3 text-portfolio-accent">#</span>
                  +1 (555) 123-4567
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="portfolio-card p-6">
              <h3 className="text-lg font-semibold text-portfolio-text mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-portfolio-text">{skill.name}</span>
                      <span className="text-portfolio-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-portfolio-border rounded-full h-2">
                      <div 
                        className="bg-portfolio-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Experience */}
            <div>
              <div className="flex items-center mb-6">
                <CheckCircle className="h-6 w-6 text-portfolio-accent mr-3" />
                <h2 className="text-2xl font-bold text-portfolio-text">Professional Experience</h2>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="portfolio-card p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-portfolio-text">{exp.title}</h3>
                        <p className="text-portfolio-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-portfolio-text-muted">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-portfolio-text-muted">
                          <span className="text-portfolio-accent mr-2 mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-portfolio-accent mr-3" />
                <h2 className="text-2xl font-bold text-portfolio-text">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="portfolio-card p-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-portfolio-text">{edu.degree}</h3>
                        <p className="text-portfolio-accent">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-portfolio-text-muted">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <p className="text-portfolio-text-muted">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-portfolio-accent mr-3" />
                <h2 className="text-2xl font-bold text-portfolio-text">Certifications</h2>
              </div>
              
              <div className="portfolio-card p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center text-portfolio-text-muted">
                      <Award className="h-4 w-4 text-portfolio-accent mr-3" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
