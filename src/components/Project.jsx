import React from 'react';

function Project() {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Node.js",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project 2",
      description: "E-commerce platform with payment integration",
      image: "https://via.placeholder.com/400x300",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project 3",
      description: "Real-time chat application",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Socket.io", "Express"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Here are some of my recent works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.demoLink}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;