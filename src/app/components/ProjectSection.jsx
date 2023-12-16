"use client";
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Media Inventory Application",
    technologies: [
      {
        name: "Java",
        imageUrl: "images/javaLogo.png", // The path should be relative to the public directory
        alt: "Java Logo"
      },
      
      {
        name: "Spring",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        alt: "Spring Logo"
      },
      {
        name: "MongoDB",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        alt: "MongoDB Logo"
      },
      {
        name: "React",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        alt: "React Logo"
      },
    ],
    description: [
      "Engineered a robust backend with Java, enriching user interactions with a dynamic React.js frontend.",
      "Featured seamless API integration for real-time media management, achieving a 63% boost in inventory efficiency.",
    ],
    image: "/images/inventory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TheEMG/Media-Inventory-System",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Libro Vault",
    technologies: [
      {
        name: "Java",
        imageUrl: "images/javaLogo.png", // The path should be relative to the public directory
        alt: "Java Logo"
      },
      
      {
        name: "Spring",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        alt: "Spring Logo"
      },
      {
        name: "MongoDB",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        alt: "MongoDB Logo"
      },
      {
        name: "React",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        alt: "React Logo"
      },
    ],
    description: [
      " Spearheaded a cross-functional team using Agile methodologies to develop a secure and scalable library system.",
      " Facilitated iterative development and continuous improvement, resulting in an intuitive book tracking and management platform.",
      "Implemented RESTful APIs for broad literature access and integrated a responsive design, significantly enhancing user experience"
    ],
    image: "/images/libroVault.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TheEMG/LibroVaultFinal",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Personal Portflio",
    technologies: [
      {
        name: "TailWind CSS",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        alt: "TailWind CSS"
      },
      {
        name: "Next.js",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        alt: "Next.Js Logo"
      },
    ],
    description: [
      " Engineered a high-performance portfolio using Next.js, achieving rapid load times and superior SEO outcomes through server-side rendering.",
      "Employed Tailwind CSS to ensure a responsive and aesthetically unified interface, providing a seamless experience on all devices.",
      " Orchestrated a user-centric navigation system, deftly accommodating an extensive array of projects, spotlighting my versatility in multiple programming landscapes."
    ],
    image: "/images/website.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Algorithm Efficiency",
    technologies: [
      {
        name: "Java",
        imageUrl: "images/javaLogo.png", // The path should be relative to the public directory
        alt: "Java Logo"
      },

    ],
    description: [
      "Executed a comprehensive analysis of sorting algorithms using Java to evaluate and enhance performance with increasing data volumes.",
      "Benchmarked classic sorting techniques—insertion, selection, merge, and an optimized bubble sort—to ascertain their scalability and processing efficiency.",
      "The project underscores my proficiency in algorithmic design and optimization with a methodical approach to data handling.",
    
    ],
    image: "/images/algorithm.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/TheEMG/SortingAlgorithmEfficiency",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Expression Evaluator",
    technologies: [
      {
        name: "Java",
        imageUrl: "images/javaLogo.png", // The path should be relative to the public directory
        alt: "Java Logo"
      },

    ],
    description: [
      "Crafted a Java-based solution to dynamically build and simplify polynomials, showcasing the practical application of advanced data structures with a custom linked list.",
      "This project demonstrates meticulous manipulation of nodes to organize terms by degree and optimize polynomial evaluation.",
      " Highlights of this endeavor include mastering linked list traversal, implementing efficient string construction with StringBuilder",
      " and enhancing understanding of Java's toString method for user-friendly output",
    
    ],
    image: "/images/expression.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/TheEMG/ExpressionEvaluator",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Infix to Postfix",
    technologies: [
      {
        name: "Java",
        imageUrl: "images/javaLogo.png", // The path should be relative to the public directory
        alt: "Java Logo"
      },

    ],
    description: [
      " Engineered a Java application for converting infix expressions to postfix using stacks, demonstrating the practical use of data structures in parsing and evaluating expressions.",
      "Gained expertise in the Shunting Yard Algorithm, enhancing my understanding of operator precedence and stack operations.",
      "The experience solidified my analytical skills, particularly in algorithm design and the effective use of data structures.",

    ],
    image: "/images/infix.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/TheEMG/InfixToPostfix",
    previewUrl: "/",
  }
]

const ProjectSection = () =>{
  const [tag, setTag] = useState("Web");

  const handleTagChange = (newTag) => {
    setTag(newTag); 
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
    });

  
  return (
    <section id="projects" className="lg:py-16">
        <h2 className="text-center text-4xl font-bold text-white mt-8 mb-6 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Java" isSelected={tag === "Java"} />
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />

        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">{filteredProjects.map((project) => (
           <ProjectCard
             key={project.id} 
             title={project.title}
             technologies={project.technologies}
             description={project.description} 
             imgUrl={project.image}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
           />
        ))}
        </div>
    </section>

  );
};

export default ProjectSection;