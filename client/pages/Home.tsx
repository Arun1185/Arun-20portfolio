import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="portfolio-section flex items-center justify-center px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-portfolio-text leading-tight">
                SnapFolio
              </h1>
              <h2 className="text-2xl font-semibold text-portfolio-accent">
                Alexander Chen
              </h2>
              <p className="text-lg text-portfolio-text-muted">
                I'm a UI/UX Designer
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
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-portfolio-accent to-blue-600 p-1">
                <div className="w-full h-full rounded-2xl bg-portfolio-card flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-600">AC</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-portfolio-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
