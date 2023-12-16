import React from "react";
import {  EyeIcon } from "@heroicons/react/24/outline";
import { FaSquareGithub } from "react-icons/fa6";


import Link from "next/link";

const ProjectCard = ({ imgUrl, title, technologies, description, gitUrl, previewUrl}) => {
  return(
    <div>
<div className="h-52 md:h-72 rounded-t-xl relative group bg-cover md:bg-cover bg-no-repeat custom-bg"
       style={{background: `url(${imgUrl})`, backgroundSize: "cover", // or use "contain" for a different effect
             backgroundRepeat: "no-repeat",}}
       >

        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
         <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
           >
               <FaSquareGithub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
         </Link>

         {/* <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
           >
               <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
         </Link> */}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">
          {title}
        </h5>
        <div className="flex justify-start items-center gap-2">
           {/* Map over technologies prop */}
            {technologies.map((tech, index) => (
             <div key={index} className="w-12 h-12">
                <img
                src={tech.imageUrl.startsWith('http') ? tech.imageUrl : `/${tech.imageUrl}`}
                alt={tech.alt}
                className="object-contain max-w-full h-auto" // Adjust the size as needed
              />
            </div>
          ))}
        </div> 
         <p className="text-[#ADB7BE] mt-3">{description}</p>
      </div>
    </div>
  );
};


export default ProjectCard;