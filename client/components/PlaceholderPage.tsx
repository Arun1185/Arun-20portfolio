import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title, 
  description = "This page is under construction. Please check back later or contact me if you need this section urgently." 
}: PlaceholderPageProps) {
  return (
    <div className="portfolio-section flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <div className="w-24 h-24 bg-portfolio-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="h-12 w-12 text-portfolio-accent" />
        </div>
        
        <h1 className="text-4xl font-bold text-portfolio-text mb-4">{title}</h1>
        <p className="text-portfolio-text-muted leading-relaxed mb-8">{description}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-portfolio-border text-portfolio-text rounded-lg hover:bg-portfolio-card transition-all duration-200"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
