import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import StylishPhoto from '../components/StylishPhoto';
import RotatingTitle from '../components/RotatingTitle';

export default function Home() {
  const jobTitles = [
    'UI/UX Designer',
    'Frontend Developer',
    'Full Stack Developer'
  ];

  return (
    <div className="portfolio-section flex items-center justify-center px-4 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-portfolio-text leading-tight bg-gradient-to-r from-portfolio-accent to-blue-500 bg-clip-text text-transparent">
                SnapFolio
              </h1>
              <h2 className="text-2xl font-semibold text-portfolio-text">
                Alexander Chen
              </h2>
              <p className="text-lg text-portfolio-accent font-medium">
                I'm a <RotatingTitle titles={jobTitles} interval={2500} />
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-portfolio-text-muted leading-relaxed">
                Passionate about creating exceptional digital experiences that 
                blend innovative design with functional development. Let's 
                bring your vision to life.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <button className="inline-flex items-center px-6 py-3 border border-portfolio-border text-portfolio-text rounded-lg hover:bg-portfolio-card transition-all duration-200">
                Get In Touch
                <Download className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Social Stats */}
            <div className="flex space-x-8 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-portfolio-card rounded-lg flex items-center justify-center mb-2">
                  <span className="text-portfolio-accent font-bold">97</span>
                </div>
                <p className="text-xs text-portfolio-text-muted">Projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-portfolio-card rounded-lg flex items-center justify-center mb-2">
                  <span className="text-portfolio-accent font-bold">5+</span>
                </div>
                <p className="text-xs text-portfolio-text-muted">Years Exp</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-portfolio-card rounded-lg flex items-center justify-center mb-2">
                  <span className="text-portfolio-accent font-bold">98%</span>
                </div>
                <p className="text-xs text-portfolio-text-muted">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <StylishPhoto size="xl" initials="AC" />

              {/* Additional floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-8 h-8 bg-yellow-400 rounded-full opacity-40 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
