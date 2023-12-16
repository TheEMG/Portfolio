"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  

  
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timerMessage, setTimerMessage] = useState('');
  const formRef = useRef(null);




  

  useEffect(() => {
    if (emailSubmitted) {
      setIsButtonDisabled(true); // Disable the button
      setTimerMessage(''); // Clear the timer message
      setTimeout(() => {
        setEmailSubmitted(false); // Reset the emailSubmitted state
        setIsButtonDisabled(false); // Enable the button after 1 minute
      }, 60000); // Set the timer for 1 minute (60000 milliseconds)
    }
  }, [emailSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Honeypot check
    if (e.target.honeypot && e.target.honeypot.value) {
      console.log('Honeypot field has been filled out.');
      return; // Exit the function if the honeypot field is filled
    }
    e.preventDefault();


    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
     
    };
    console.log('Form submission data:', data); // Log the form data
  
    const JSONdata = JSON.stringify(data);
    console.log('JSON data to send:', JSONdata); // Log the JSON stringified data
  
    const endpoint = "/api/send";
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
  
    const response = await fetch(endpoint, options);
    console.log('Raw response:', response); // Log the raw response
  
    if (response.ok) {
      const resData = await response.json();
      console.log('Parsed response data:', resData); // Log the parsed response data
      setEmailSubmitted(true);
    } else {
      console.error('Response error:', response.statusText); // Log an error if the response is not ok
    }
    formRef.current.reset(); 
    setEmailSubmitted(true);
    
  };
  
  return (
  <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
     <div className=" pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-2/4 -translate-1/2  " ></div>
 
    <div className="z-11">
      <h5 className="text-xl font-bold text-white my-2">
        Let's connect
      </h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        {" "}
        Let's make something great together. I'm just a message away from discussing potential projects, job opportunities, or simply exchanging tech insights.
         As a Computer Science student diving into the world of software engineering, I welcome all avenues of growth. <br></br>Contact me!!!

      </p>
      <div className="socials flex flex-row gap-2">
      <Link href="https://github.com/TheEMG" passHref>
      <Image src="/images/github-logo.png" alt="GitHub Icon" width={45} height={45} />

        </Link>
        <Link href="https://www.linkedin.com/in/eric-gutierrez-121782289/" passHref>
        <Image src="/images/link.png" alt="LinkedIn Icon" width={45} height={45} />

        </Link>
        </div>
    </div>
    <div>
     
      <form ref={formRef}  className="flex flex-col " onSubmit={handleSubmit}>
        <div className="mb-6">
         <label htmlFor="email" type="email" className="text-white mb-2 block text-sm font-medium ">
           Your Email
         </label>
         <input 
          name="email"
          type="email" 
          id="email" 
          required 
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
          placeholder="jacob@google.com"
          />
         </div>
         <div className="mb-6">
          <label htmlFor="subject" type="email" className="text-white mb-2 block text-sm font-medium ">
           Subject
         </label>
         <input 
          name="subject"
          type="text" 
          id="subject" 
          required 
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
          placeholder="Just saying hi"
          />
         </div>

         <div className="mb-6">
          <label
            
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
             name="message"
             id="message"
             className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
             placeholder="Leave your message here!!!"
             />
         </div>
         <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={isButtonDisabled}
         
         >
          Send Message 
         </button>
          {isButtonDisabled && (
             <p className="text-red-500 text-sm mt-2">
              Wait one minute before sending another message.
             </p>
           )}
          {emailSubmitted && (
           <p className="text-green-400 text-sm mt-2">
              Email sent successfully
           </p>
           )}


        <input 
            type="text" 
            name="honeypot" 
            style={{ display: 'none' }} 
            tabIndex="-1" 
            autoComplete="off"
          />
      </form>

    </div>

  </section>
  );
};

export default EmailSection;