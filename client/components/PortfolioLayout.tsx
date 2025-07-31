import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  X
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Resume', href: '/resume', icon: FileText },
  { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { name: 'Services', href: '/services', icon: Settings },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Phone', href: '#', icon: Phone },
];

export default function PortfolioLayout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen bg-portfolio-bg">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-portfolio-card border border-portfolio-border rounded-lg text-portfolio-text"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`
        w-80 bg-portfolio-card border-r border-portfolio-border flex flex-col
        fixed lg:relative inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Profile Section */}
        <div className="p-8 text-center border-b border-portfolio-border">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-portfolio-accent to-blue-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">AC</span>
          </div>
          <h2 className="text-xl font-bold text-portfolio-text mb-1">Alexander Chen</h2>
          <p className="text-portfolio-text-muted text-sm">Full Stack Developer</p>
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
                      flex items-center px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive
                        ? 'bg-portfolio-accent text-white shadow-lg'
                        : 'text-portfolio-text-muted hover:text-portfolio-text hover:bg-portfolio-border'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-portfolio-border">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto lg:ml-0">
        {children}
      </div>
    </div>
  );
}
