import React from 'react';
import { MapPin, Phone, Mail, Calendar, Award } from 'lucide-react';
import StylishPhoto from '../components/StylishPhoto';
import RotatingTitle from '../components/RotatingTitle';

export default function About() {
  const jobTitles = [
    'Creative Director',
    'UI Developer',
    'UX Researcher'
  ];

  return (
    <div className="portfolio-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button className="px-4 py-2 bg-portfolio-card text-portfolio-accent rounded-full text-sm mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
            Get to Know Me
          </button>
          <h1 className="portfolio-heading text-center">
            Passionate About Creating Digital
            <br />
            <span className="bg-gradient-to-r from-portfolio-accent to-blue-500 bg-clip-text text-transparent">Experiences</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Profile Card */}
          <div className="portfolio-card p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <StylishPhoto
                size="lg"
                initials="AC"
                className="mx-auto mb-4"
                imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
              />
              <h2 className="text-2xl font-bold text-portfolio-text mb-2">Marcus Thompson</h2>
              <div className="text-portfolio-accent font-medium">
                <RotatingTitle titles={jobTitles} interval={3000} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-portfolio-text-muted">
                <Mail className="h-4 w-4 mr-3 text-portfolio-accent" />
                <span>marcus@example.com</span>
              </div>
              <div className="flex items-center text-portfolio-text-muted">
                <Phone className="h-4 w-4 mr-3 text-portfolio-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-portfolio-text-muted">
                <MapPin className="h-4 w-4 mr-3 text-portfolio-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <p className="text-portfolio-text-muted leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-portfolio-text-muted leading-relaxed">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
                laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">150+</div>
                <div className="text-sm text-portfolio-text-muted">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">5+</div>
                <div className="text-sm text-portfolio-text-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">98%</div>
                <div className="text-sm text-portfolio-text-muted">Client Satisfaction</div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-portfolio-text mb-4">Specialized Skills</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-portfolio-text-muted">UI/UX Design & Development</span>
                    <span className="text-portfolio-accent">Senior Professional</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-portfolio-text-muted">Experience Level</span>
                    <span className="text-portfolio-accent">Senior Professional</span>
                  </div>
                </div>
              </div>

              {/* Workspace Image */}
              <div className="mt-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop&auto=format&q=80"
                  alt="Modern workspace"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
