import React from "react";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export default function TechStack() {
  const technologies: TechItem[] = [
    {
      name: "React",
      icon: "⚛️",
      color: "hover:text-blue-400",
    },
    {
      name: "TypeScript",
      icon: "📘",
      color: "hover:text-blue-600",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      color: "hover:text-yellow-400",
    },
    {
      name: "Python",
      icon: "🐍",
      color: "hover:text-green-500",
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "hover:text-green-400",
    },
    {
      name: "Git",
      icon: "📝",
      color: "hover:text-orange-500",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "hover:text-blue-500",
    },
    {
      name: "AWS",
      icon: "☁️",
      color: "hover:text-orange-400",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "hover:text-green-600",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "hover:text-blue-700",
    },
    {
      name: "AutoCAD",
      icon: "📐",
      color: "hover:text-red-500",
    },
    {
      name: "Figma",
      icon: "🎨",
      color: "hover:text-purple-500",
    },
    {
      name: "Adobe",
      icon: "🔴",
      color: "hover:text-red-600",
    },
    {
      name: "VS Code",
      icon: "💻",
      color: "hover:text-blue-600",
    },
    {
      name: "Firebase",
      icon: "🔥",
      color: "hover:text-orange-600",
    },
    {
      name: "GraphQL",
      icon: "🔷",
      color: "hover:text-pink-500",
    },
    {
      name: "Redux",
      icon: "🟣",
      color: "hover:text-purple-600",
    },
    {
      name: "Tailwind",
      icon: "🎭",
      color: "hover:text-cyan-400",
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      name: "Webpack",
      icon: "📦",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="w-full bg-portfolio-card/50 backdrop-blur-sm border-t border-portfolio-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-portfolio-text mb-2">
            Technologies & Tools
          </h3>
          <p className="text-portfolio-text-muted text-sm">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Scrolling Tech Stack */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 py-4">
            {/* First set of technologies */}
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`
                  flex-shrink-0 flex flex-col items-center justify-center
                  w-20 h-20 rounded-xl bg-portfolio-border/30 hover:bg-portfolio-accent/10
                  transition-all duration-300 hover:scale-110 hover:shadow-lg
                  cursor-pointer group ${tech.color}
                `}
                title={tech.name}
              >
                <span className="text-2xl mb-1 transition-transform duration-300 group-hover:scale-125">
                  {tech.icon}
                </span>
                <span className="text-xs text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-300">
                  {tech.name.length > 8
                    ? tech.name.slice(0, 6) + "..."
                    : tech.name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless scrolling */}
            {technologies.map((tech, index) => (
              <div
                key={`duplicate-${index}`}
                className={`
                  flex-shrink-0 flex flex-col items-center justify-center
                  w-20 h-20 rounded-xl bg-portfolio-border/30 hover:bg-portfolio-accent/10
                  transition-all duration-300 hover:scale-110 hover:shadow-lg
                  cursor-pointer group ${tech.color}
                `}
                title={tech.name}
              >
                <span className="text-2xl mb-1 transition-transform duration-300 group-hover:scale-125">
                  {tech.icon}
                </span>
                <span className="text-xs text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-300">
                  {tech.name.length > 8
                    ? tech.name.slice(0, 6) + "..."
                    : tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
