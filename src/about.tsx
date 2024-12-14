import React from "react";
import Typewriter from "typewriter-effect";
import MyTechStack from "./techstack"; // Import MyTechStack if in a separate file
import { Button } from "@nextui-org/react";

interface AboutProps {
  strings: string[]; // Array for Typewriter strings
  techStackImages: string[]; // Array of images for MyTechStack
}

const About: React.FC<AboutProps> = ({ strings, techStackImages }) => {
  return (
    <div>
      <div className="font-bold text-6xl -mt-20 mb-4 text-center">About Me</div>
      <p className="text-center">Get to know me!</p>
      <div className="grid grid-cols-2 items-center">
        <div>
          <div className="bg-[#f2f2f2] p-8 pt-20 text-black font-bold shadow-lg rounded-lg ml-60 mt-12 mb-4">
            <p>What do I love?</p>
            <p className="mt-2 font-medium text-6xl flex items-center">
              I love{" "}
              <span className="text-[#fd8ea9] ml-2">
                <Typewriter
                  options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 100,
                  }}
                />
              </span>
              .
            </p>
            <p className="mt-24 font-bold">Let's connect!</p>

            {/* Buttons for LinkedIn, GitHub, Gmail */}
            <div className="flex gap-4 mt-2">
              <Button
                color="secondary"
                as="a"
                href="https://www.linkedin.com/in/alizabataluna/"
                target="_blank"
                className="flex items-center"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 mr-2"
                />
                LinkedIn
              </Button>
              <Button
                color="secondary"
                as="a"
                href="https://github.com/alizamayyy"
                target="_blank"
                className="flex items-center"
              >
                <img src="/github.png" alt="GitHub" className="w-6 h-6 mr-2" />
                GitHub
              </Button>
              <Button
                color="secondary"
                as="a"
                href="mailto:alizabataluna1@gmail.com"
                target="_blank"
                className="flex items-center"
              >
                <img src="/gmail.png" alt="Gmail" className="w-6 h-6 mr-2" />
                alizabataluna1@gmail.com
              </Button>
            </div>
          </div>
        </div>
        <div>
          <MyTechStack images={techStackImages} />
        </div>
      </div>
    </div>
  );
};

export default About;
