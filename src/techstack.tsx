// MyTechStack.tsx
import React from "react";
import "./techstack.css"; // Import custom CSS for hover effect

interface MyTechStackProps {
  images: string[]; // Array of image file names
}

const MyTechStack: React.FC<MyTechStackProps> = ({ images }) => {
  return (
    <div className="mt-10">
      <div className="font-bold text-4xl text-center mr-64 mb-10 text-[#fd8ea9]">
        My Technical Skills
      </div>
      <div className="grid grid-cols-4 gap-14 mr-80 ml-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/${image}`}
            alt={`Tech Icon ${index + 1}`}
            className="tech-icon"
          />
        ))}
      </div>
    </div>
  );
};

export default MyTechStack;
