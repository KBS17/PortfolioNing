import React from 'react';

function About() {
  return (
    <section id="about" className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            About Me
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            I am a passionate developer with a love for creating beautiful and functional web applications. 
            With a strong foundation in modern technologies, I strive to deliver exceptional user experiences.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600">My Skills</h3>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Frontend Development (React, Tailwind CSS)</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (MongoDB, SQL)</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600">My Interests</h3>
            <p className="mt-4 text-gray-700">
              I enjoy exploring new technologies, solving challenging problems, and collaborating with others to build impactful projects. 
              In my free time, I love reading tech blogs and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;