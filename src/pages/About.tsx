import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Code, Globe } from 'lucide-react';

function About() {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: 'Passionate',
      description: 'Deeply passionate about creating exceptional web experiences.',
    },
    {
      icon: <Coffee className="w-6 h-6 text-yellow-400" />,
      title: 'Dedicated',
      description: 'Committed to delivering solutions on time.',
    },
    {
      icon: <Code className="w-6 h-6 text-green-400" />,
      title: 'Technical',
      description: 'Foundation in modern web technologies and best practices.',
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Global',
      description: 'Working with teams and clients.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="mb-12">
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Hello! I'm Ramayanapu Naveen, a passionate Software Developer and Full Stack Developer with a strong drive for creating innovative and efficient software solutions. With extensive experience in web and software development, I specialize in building scalable, high-performance applications and user-friendly interfaces using modern technologies.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
        My journey began with a fascination for problem-solving and curiosity about how things work on the internet, which led me to explore various programming languages, frameworks, and tools. I take pride in writing clean, maintainable code and delivering solutions that solve real-world challenges effectively while providing an exceptional user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;