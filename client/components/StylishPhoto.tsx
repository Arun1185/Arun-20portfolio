import React from 'react';

interface StylishPhotoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  initials?: string;
  className?: string;
  imageUrl?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-80 h-80'
};

const initialsSizes = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-6xl'
};

export default function StylishPhoto({
  size = 'md',
  initials = 'AC',
  className = '',
  imageUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80'
}: StylishPhotoProps) {
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main photo container with gradient border */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-portfolio-accent via-blue-500 to-purple-600 p-1 shadow-2xl">
        {/* Inner photo container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {/* Actual photo */}
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />

          {/* Fallback with initials (hidden by default) */}
          <div className="absolute inset-0 w-full h-full hidden items-center justify-center bg-gradient-to-br from-portfolio-accent/10 to-blue-500/10">
            <span className={`font-bold text-portfolio-text ${initialsSizes[size]}`}>
              {initials}
            </span>
          </div>

          {/* Overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-portfolio-accent rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-portfolio-accent to-blue-500 opacity-20 blur-xl -z-10 animate-pulse"></div>
    </div>
  );
}
