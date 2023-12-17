"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    // Function to update the width
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Call the function at the start to initialize the width
    handleResize();

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="lg:py-20 mb-14  xl:mb-16 2xl:mb-40 ">
      <div className="grid grid-cols-1 lg:grid-cols-12">
       <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500"> 
          Hello, I&apos;m{" "}
          </span>
          
          <div className={`${windowWidth <= 640 ? 'h-[2em]' : 'h-auto'}`} style={{ height: windowWidth <= 640 ? '2em' : 'auto' }}>
          <TypeAnimation
            sequence={[
              'Eric Gutierrez',
              1000,
              'A Software Engineer',
              1000,
              'A Web Developer',
              1000,
              // 'We produce food for Chinchillas',
              // 1000
            ]}
            wrapper="span"
            speed={50}
            
            repeat={Infinity}
         />
       </div>
         
          
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl">
           Welcome to my portfolio website! Explore a diverse portfolio where code meets creativity across platforms and technologies
        </p>
        <div>
        <Link
          href="/#contact"
           className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-400 via-cyan-600 to-green-600 hover:bg-slate-200 text-white"
         >
           Hire Me
         </Link>
         <a href="/images/eric-gutierrez.pdf" download="eric-gutierrez.pdf">
             <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-400 via-cyan-500 to-green-600 hover:bg-slate-800 text-white mt-3 mb-6">
             <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
             </button>
        </a>

        </div>
      </div>
       <div className="col-span-4 place-self-center lg:mt-0 mt-4">
       <div className="relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
    
            
          <Image
            src="/images/profile-headshot.png"
            alt="hero image"
            className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
         
        </div>
      </div>
    </div>


    </section>

  );
};

export default HeroSection;

