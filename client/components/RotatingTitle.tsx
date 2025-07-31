import React, { useState, useEffect } from 'react';

interface RotatingTitleProps {
  titles: string[];
  interval?: number;
  className?: string;
}

export default function RotatingTitle({ 
  titles, 
  interval = 3000, 
  className = "" 
}: RotatingTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (titles.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 250);
    }, interval);

    return () => clearInterval(timer);
  }, [titles.length, interval]);

  if (titles.length === 0) return null;

  return (
    <span 
      className={`
        inline-block transition-all duration-300 ease-in-out
        ${isAnimating ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}
        ${className}
      `}
    >
      {titles[currentIndex]}
    </span>
  );
}
