"use client";
import react from "@heroicons/react";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id:"skills",
    content:(
      // <ul className="list-disc pl-2">
      //     <li>Java</li>
      //     <li>HTML</li>
      //     <li>CSS</li>
      //     <li>Javascript</li>
      //     <li>C++</li>
      // </ul>
     <ul className="list-disc">
      <li className="p-2">
          <img src="/images/javaLogo.png" alt="Java" />
      </li>
      <li className="p-2">
          <img src="/images/html.png" alt="HTML" />
      </li>
      <li className="p-2">
          <img src="/images/css.png" alt="CSS" />
      </li>
      <li className="p-2">
          <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" />
      </li>
      <li className="p-2">
          <img src="/images/c++.png" alt="C++" />
      </li>
  </ul>
  

    
    )

   },
   {
    title: "Technologies",
    id: "technologies",
    content:(
      <ul className="list-disc pl-2">
      <li className="p-2">
          <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React Logo" />
      </li>
      <li className="p-2">
          <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB logo"/>
      </li>
      <li className="p-2">
          <img className="w-12 h-12" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
      </li>
      <li className="p-2">
          <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="spring logo"/>
      </li>
      <li className="p-2">
          <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="node logo"/>
      </li>
  </ul>
  
    
    )
    
   }


]

const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
     <section className=" text-white lg:py-8 " id="about" >
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-me.png" alt="headshot" width={500} height={500} />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text 4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
        Hello! I&apos;m Eric Gutierrez, a Computer Science student and aspiring software engineer. Starting with Java, I&apos;ve now expanded into full-stack web development, 
        where I enjoy creating innovative software solutions. I&apos;m passionate about learning and growing in the dynamic field of technology.

        </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton selectTab={()=> handleTabChange("skills")} active={tab === "skills"}>
            { " "}
             Skills {" "}
           </TabButton>
           <TabButton selectTab={()=> handleTabChange("technologies")} active={tab === "technologies"}>
            { " "}
             Technologies {" "}
           </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}

        </div>
      </div>
    </div>
  
  </section>
  );

};



export default AboutSection;