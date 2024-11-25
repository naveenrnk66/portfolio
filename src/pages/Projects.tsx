import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Airline Reservation Management System',
    description: 'An automated airline reservation system built with python and Django as backend.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['Python', 'Django', 'PgAdmin'],
    // liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Student Counseling Management System',
    description: 'A MERN stack-based system for managing student counseling with efficient scheduling and real-time updates.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    technologies: ['React',  'Node JS', 'MongoDB'],
    // liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  }
  // {
  //   title: 'Weather Dashboard',
  //   description: 'A weather dashboard showing real-time weather data and forecasts.',
  //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
  //   technologies: ['React', 'OpenWeather API', 'Chart.js'],
  //   liveLink: 'https://example.com',
  //   githubLink: 'https://github.com',
  // },
];

function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  // href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={18} />
                  {/* <span>Live Demo</span> */}
                </a>
                <a
                  // href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-300"
                >
                  <Github size={18} />
                  {/* <span>Source</span> */}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;