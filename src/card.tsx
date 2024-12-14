import { Button } from "@nextui-org/react";
import React from "react";

interface PolaroidCardProps {
  title: string;
  image: string;
  description: string;
  frameworks: string[]; // Array of small framework/language image URLs
  projectLink: string; // Link to the project website
  githubLink: string; // Link to the GitHub repository
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({
  title,
  image,
  description,
  frameworks,
  projectLink,
  githubLink,
}) => {
  return (
    <div className="mt-32 polaroid-card text-center p-4 shadow-lg bg-[#f2f2f2] rounded-lg w-96 text-[#fd8ea9]">
      <div className="relative mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-md"
        />
        {/* GitHub SVG Icon in the top-right corner */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 w-8 h-8 transition-transform hover:scale-110 hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="w-8 h-8"
          >
            <path
              d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              fill="#fd8ea9" // Set the fill color to #fd8ea9
            />
          </svg>
        </a>
      </div>

      <div className="font-bold text-xl mb-2">
        {title}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block ml-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 48 48"
            className="hover:scale-110 transition-transform -mt-1"
          >
            <path d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z"></path>
          </svg>
        </a>
      </div>

      {/* Framework/Language Icons */}
      <div className="flex justify-center gap-2 mb-2">
        {frameworks.map((framework, index) => (
          <img
            key={index}
            src={framework}
            alt={`Framework ${index + 1}`}
            className="w-5 h-5 object-contain"
          />
        ))}
      </div>

      {/* Description */}
      <div className="text-sm text-gray-600">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PolaroidCard;
