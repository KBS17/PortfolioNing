import React from 'react';

function Home() {
  return (
    <section className="bg-white text-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-600">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Discover my projects, skills, and experiences.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="ml-4 bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg shadow-md hover:bg-green-50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;