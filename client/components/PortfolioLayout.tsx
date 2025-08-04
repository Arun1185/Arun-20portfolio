import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Settings,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  Menu,
  X,
  Sun,
  Moon,
  Download,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import StylishPhoto from "./StylishPhoto";
import RotatingTitle from "./RotatingTitle";

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Contact", href: "/contact", icon: Mail },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/ArunBalasubramanian", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/arunbalasubramanian",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/arunbalasubramanian", icon: Twitter },
  {
    name: "Instagram",
    href: "https://instagram.com/arunbalasubramanian",
    icon: Instagram,
  },
  { name: "Phone", href: "tel:+91 81234 56789", icon: Phone },
];

export default function PortfolioLayout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const jobTitles = [
    'Civil Engineer',
    'Software Engineer',
    'Project Manager',
    'Automation Engineer'
  ];

  const handleDownloadProject = () => {
    // Create download link for the project zip
    const link = document.createElement("a");
    link.href = "/api/project-download";
    link.download = "portfolio-project.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-portfolio-bg">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-portfolio-card border border-portfolio-border rounded-lg text-portfolio-text"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        w-80 bg-portfolio-card/95 backdrop-blur-lg border-r border-portfolio-border flex flex-col
        fixed lg:relative inset-y-0 left-0 z-40 transform transition-all duration-300 ease-in-out
        shadow-2xl lg:shadow-none
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Profile Section */}
        <div className="p-8 text-center border-b border-portfolio-border relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 to-blue-500/5"></div>

          <div className="relative">
            <StylishPhoto size="md" initials="AC" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold text-portfolio-text mb-2">
               Arun Balasubramanian
            </h2>
            <div className="text-portfolio-accent text-sm font-medium mb-1">
              <RotatingTitle titles={jobTitles} interval={2500} />
            </div>
            <p className="text-portfolio-text-muted text-xs">
              Passionate about creating digital experiences
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`
                      group flex items-center px-4 py-3 rounded-xl transition-all duration-300
                      hover:scale-105 hover:shadow-lg
                      ${
                        isActive
                          ? "bg-gradient-to-r from-portfolio-accent to-blue-500 text-white shadow-xl"
                          : "text-portfolio-text-muted hover:text-portfolio-text hover:bg-portfolio-border/50 hover:shadow-md"
                      }
                    `}
                  >
                    <item.icon
                      className={`h-5 w-5 mr-3 transition-transform duration-300 ${isActive ? "" : "group-hover:scale-110"}`}
                    />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle */}
          <div className="mt-6 pt-6 border-t border-portfolio-border">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-portfolio-border/50 hover:bg-portfolio-accent/10 text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-105"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  <span className="font-medium">Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  <span className="font-medium">Light Mode</span>
                </>
              )}
            </button>
          </div>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-portfolio-border">
          <div className="flex justify-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group p-2 rounded-lg bg-portfolio-border/30 hover:bg-portfolio-accent hover:shadow-lg text-portfolio-text-muted hover:text-white transition-all duration-300 hover:scale-110"
                title={social.name}
              >
                <social.icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            ))}
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-portfolio-text-muted">
              © 2025 Arun Balasubramanian
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto lg:ml-0">{children}</div>
    </div>
  );
}
