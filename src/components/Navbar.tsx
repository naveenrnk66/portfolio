import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', text: 'Home', Icon: Home },
  { path: '/about', text: 'About', Icon: User },
  { path: '/skills', text: 'Skills', Icon: Code },
  { path: '/projects', text: 'Projects', Icon: Briefcase },
  { path: '/education', text: 'Education', Icon: GraduationCap },
  { path: '/contact', text: 'Contact', Icon: Mail },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-xl font-bold">
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, text, Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 hover:text-blue-400 transition-colors ${
                    isActive ? 'text-blue-500' : 'text-gray-300'
                  }`
                }
              >
                <Icon size={18} />
                <span>{text}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ path, text, Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <Icon size={18} />
                  <span>{text}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;