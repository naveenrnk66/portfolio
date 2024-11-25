import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "KL UNIVERSITY",
    year: "2022 - 2026",
    description: "Foundation in computer science and engineering principles",
    achievements: [
      // "",
      "VYUHA Club COO",
      "CGPA: 9.29"
    ],
  },
  {
    degree: "INTERMEDIATE in MPC",
    institution: "SRI VENKATESHWARA JR COLLEGE",
    year: "2020 - 2022",
    description: "Foundation in mathematics and physics",
    achievements: [
      "Learned basics of Mathematics and physics",
      "Marks: 882/1000",
    ],
  }
  
];

const certifications = [
  {
    name: "AWS Certified Cloud Practioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  // {
  //   name: "Professional Full Stack Developer",
  //   issuer: "MongoDB University",
  //   year: "2022",
  // },
];

function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center space-x-3">
            <GraduationCap className="text-blue-400" />
            <span>Education</span>
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {edu.year}
                  </div>
                </div>
                <p className="text-lg mb-2">{edu.institution}</p>
                <p className="text-gray-400 mb-4">{edu.description}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center space-x-3">
            <Award className="text-blue-400" />
            <span>Certifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Education;