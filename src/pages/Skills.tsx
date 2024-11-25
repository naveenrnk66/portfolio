import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'C',
  'Python',
  'Problem-Solving',
  'HTML',
  'CSS',
  'Video Editing',
  'Photo Editing',
  'Node.js',
  'React',
  'MongoDB',
  'PostgreSQL',
  'Git',
];

function SkillBox({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 text-gray-300 text-lg font-medium px-6 py-3 rounded-lg shadow-md text-center"
    >
      {name}
    </motion.div>
  );
}

function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Technical Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillBox key={skill} name={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
