
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[calc(100vh-theme(space.32))] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <img
              src="https://i.imghippo.com/files/HJY2696FJ.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-500"
            />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Ramayanapu Naveen
          </h1>
          
          <h2 className="text-2xl text-gray-300 mb-6">
            Software Developer
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Aspiring software developer with hands-on experience in building scalable applications through academic projects. 
Familiar with various programming languages and frameworks, focused on enhancing performance and user 
experience. Eager to learn and contribute to innovative projects in a collaborative internship environment. 
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;