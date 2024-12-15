// Projects.tsx
import React from "react";
import PolaroidCard from "./card"; // Import the PolaroidCard component

interface Project {
  title: string;
  image: string;
  description: string;
  frameworks: string[]; // Array of small framework/language image URLs
  projectLink: string;
  githubLink: string; // Add githubLink prop
}

interface ProjectsProps {
  projects: Project[]; // Array of project details
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="mt-4 pb-10 text-center mb-6">
      <div className="font-bold text-6xl mb-4">Projects🌸</div>
      <p>
        This is a showcase of some of the projects I worked on using different
        frameworks. Feel free to visit them!
      </p>
      <div className="flex justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? "relative -top-10" : "relative top-10"} // Zigzag effect
          >
            <PolaroidCard
              title={project.title}
              image={project.image}
              description={project.description}
              frameworks={project.frameworks} // Pass the array of framework/language image URLs
              projectLink={project.projectLink} // Pass the link to the project website
              githubLink={project.githubLink} // Pass the link to the GitHub repository
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
