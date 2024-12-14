import "./index.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Typewriter from "typewriter-effect";
import MyTechStack from "./techstack.tsx"; // Import the new component
import Projects from "./projects.tsx";
import About from "./about.tsx";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Slim version for smaller bundle size
import { loadSnowPreset } from "@tsparticles/preset-snow";

export default function App() {
  const [init, setInit] = useState(false);

  // State to track the active page
  const [activePage, setActivePage] = useState("");

  // Set active page based on URL hash (used for navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Get the current hash without the '#'
      if (["home", "about", "projects"].includes(hash)) {
        setActivePage(hash);
      }
    };

    // Set the initial active page when the component mounts
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    window.location.hash = page; // Update the URL hash when a link is clicked

    // Scroll to the target section
    const targetSection = document.getElementById(page);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "auto", // Smooth scroll
      });
    }
  };

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSnowPreset(engine); // Load the bubbles preset
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle options
  const options: ISourceOptions = useMemo(
    () => ({
      preset: "snow", // Activate the snow preset
      background: {
        color: {
          value: "#0e1117", // Set background color
        },
      },
      particles: {
        color: {
          value: "#fec1d1", // Set snow color (white by default, change as needed)
        },
        size: {
          value: { min: 5, max: 10 }, // Set snowflake size
        },
        move: {
          speed: 2, // Set snow falling speed (higher value = faster snow)
        },
      },
    }),
    []
  );

  // const options: ISourceOptions = useMemo(
  //   () => ({
  //     background: {
  //       color: {
  //         value: "#0e1117", // Background color for the particles animation
  //       },
  //     },
  //     fpsLimit: 120,
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: "push", // Push mode on click
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: "repulse", // Repulse mode on hover
  //         },
  //       },
  //       modes: {
  //         push: {
  //           quantity: 4,
  //         },
  //         repulse: {
  //           distance: 200,
  //           duration: 0.4,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: "#ffffff", // Particle color
  //       },
  //       links: {
  //         color: "#ffffff",
  //         distance: 150,
  //         enable: true,
  //         opacity: 0.5,
  //         width: 1,
  //       },
  //       move: {
  //         direction: MoveDirection.none,
  //         enable: true,
  //         outModes: {
  //           default: OutMode.out,
  //         },
  //         random: false,
  //         speed: 6,
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //         },
  //         value: 80, // Number of particles
  //       },
  //       opacity: {
  //         value: 0.5,
  //       },
  //       shape: {
  //         type: "circle", // Particle shape
  //       },
  //       size: {
  //         value: { min: 1, max: 5 }, // Particle size range
  //       },
  //     },
  //     detectRetina: true,
  //   }),
  //   []
  // );

  const strings = [
    "dogs",
    "music",
    "books",
    "eating",
    "sleeping",
    "reading",
    "writing",
    "leading",
    "going out",
  ];

  const techStackImages = [
    "typescript.png",
    "react.png",
    "javascript.png",
    "tailwind.png",
    "nodejs.png",
    "html.png",
    "css.png",
    "java.png",
    "python.png",
    "c.png",
    "git.png",
    "github.png",
  ];

  const projectData = [
    {
      title: "SyncUp",
      image: "/syncup.png",
      description:
        "SyncUp is a comprehensive management tool designed to streamline operations, enhance productivity, and facilitate efficient communication within organizations. Built with modern web technologies, SyncUp offers a robust platform for managing memberships, events, and more.",
      frameworks: [
        "/typescript.png",
        "/react.png",
        "/tailwind.png",
        "/nodejs.png",
      ], // Array of framework/language image URLs
      projectLink: "https://syncup-org.vercel.app/",
      githubLink: "https://github.com/MrJim-Dev/SyncUp",
    },
    {
      title: "Progenetor",
      image: "/progenetor.png",
      description:
        "Progenetor is an AI ChatBot Prompt Generator app designed to elevate your chatbot's performance. It’s the perfect tool for crafting engaging prompts that drive meaningful AI conversations. Simple, efficient, and versatile—transform your chatbot experience now.",
      frameworks: ["/javascript.png", "/react.png", "/css.png"], // Array of framework/language image URLs
      projectLink: "https://progenetor.vercel.app/",
      githubLink: "https://github.com/polyxenna/Progenetor",
    },
    {
      title: "Customer Segmentation with K-Means",
      image: "/streamlit.png",
      description:
        "A data analysis project using Streamlit showcasing exploration on how alcohol consumption correlates with happiness levels with data processing and visualization.",
      frameworks: ["/python.png", "/streamliticon.png"], // Array of framework/language image URLs
      projectLink: "https://halimawmagbeg-finalproject.streamlit.app/",
      githubLink: "https://github.com/alizamayyy/hm_finalproject",
    },
    {
      title: "Happiness and Alcohol Consumption Analysis",
      image: "/streamlit1.png",
      description:
        "A data analysis project using Streamlit showcasing exploration to understand customer behavior and identify distinct customer groups, which can help businesses make data-driven decisions using K-means clustering.",
      frameworks: ["/python.png", "/streamliticon.png"], // Array of framework/language image URLs
      projectLink: "https://halimawmagbeg-midterm.streamlit.app/",
      githubLink: "https://github.com/alizamayyy/hm_midterm",
    },
  ];

  return (
    <div>
      {/* Particles Section */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      )}

      <Navbar isBordered isBlurred={false}>
        <NavbarBrand>
          <p className="font-bold text-2xl text-[#fd8ea9]">&lt;liza/&gt;</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={activePage === "home"}>
            <Link
              color={activePage === "home" ? "secondary" : "foreground"} // Highlight active link with secondary color
              href="#home"
              className="text-lg font-bold"
              onClick={() => handleSetActivePage("home")}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activePage === "about"}>
            <Link
              aria-current="page"
              color={activePage === "about" ? "secondary" : "foreground"} // Highlight active link with secondary color
              href="#about"
              className="text-lg font-bold"
              onClick={() => handleSetActivePage("about")}
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activePage === "projects"}>
            <Link
              color={activePage === "projects" ? "secondary" : "foreground"} // Highlight active link with secondary color
              href="#projects"
              className="text-lg font-bold"
              onClick={() => handleSetActivePage("projects")}
            >
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Button
            color="secondary" // Set the color to primary
            variant="bordered" // Set the variant to bordered
            as="a" // Make the button act like an anchor tag
            href="/Bataluna, Aliza May - CV.pdf"
            download="My_CV.pdf"
            className="text-white hover:bg-[#fec1d1] transition"
          >
            Download CV
          </Button>
        </NavbarContent>
      </Navbar>

      <div id="home" className="grid grid-cols-2 relative z-10">
        {" "}
        {/* Set z-index here */}
        <div className="ml-80 text-left mt-64">
          <p className="">Hello! I am</p>
          <h1 className="text-9xl font-bold text-[#fd8ea9]">Aliza May,</h1>
          <p className="font-bold text-3xl">A FULL STACK WEB DEVELOPER</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="relative w-4/6 h-full mt-6">
            <img
              src="/portrait.png"
              alt="Aliza May"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0e1117] to-transparent"></div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="h-screen flex justify-center items-center relative z-10"
      >
        <About strings={strings} techStackImages={techStackImages} />
      </div>

      <div id="projects" className="mt-12 pb-12 relative z-10">
        <Projects projects={projectData} />
      </div>

      <footer className="text-white text-opacity-50 text-center py-4 border-t border-[#32343a] relative z-10">
        <p>&copy; 2024 Aliza May Bataluna</p>
      </footer>
    </div>
  );
}
