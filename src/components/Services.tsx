import React from 'react'
import { useState } from 'react';

type ServicesProps = { 
  title: string;
  list: string[];
  description: string;
}



const Services = ({ title, description }: ServicesProps) => {
  const [accordions, setAccordions] = useState<ServicesProps[]>([
    {
      title: "Web Design",
      list: ["01"],
      description: "I specialize in providing high-quality web design solutions for a diverse range of industries. My expertise encompasses, but is not limited to, the creation of landing pages, real estate websites, e-commerce platforms, cleaning service websites, portfolio sites, SaaS companies, startups, and beyond. I am dedicated to delivering stunning designs that effectively meet the unique needs and goals of each of my clients. ",
    },
    {
      title: "Graphic Design",
      list: ["02"],
      description: "I am proud to offer a comprehensive range of design materials to support the needs of my clients. My services include the creation of eye-catching brochures, professional publications, innovative product designs, detailed mockups, memorable logos, and engaging illustrations. Whether you're looking to refresh your branding, launch a new product, or create marketing materials, I am here to help bring your vision to life. ",
    },
    {
      title: "Video Design",
      list: ["03"],
      description: "I bring extensive expertise to the creation of engaging content for popular social media platforms, including TikTok, video editing, Instagram Reels, and YouTube Shorts. My skills in storytelling, motion graphics, and editing allow me to create content that is both entertaining and impactful, helping my clients reach and connect with their audiences in new and meaningful ways. ",
    },
  ]);

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);



  const handleAccordionClick = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  return (
    <div className='container p-6 mx-auto'>
      <h2 className='text-white  text-xl mt-28 md:text-5xl md:mt-48'>Services <span className='opacity-50'> are designed to deliver exceptional value</span></h2>
      <div className='md:mt-16'>
      {accordions.map((accordion, index) => (
        <div key={index} className="border-b border-gray-300 ">
          <div
            className="flex justify-between items-center py-2 cursor-pointer border-b border-transparent"
            onClick={() => handleAccordionClick(index)}
          >
          <div className="list-disc flex text-white items-end my-6 ">
            <ul className='opacity-50 text-lg mr-2'>
                {accordion.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            <h2 className="font-medium text-lg md:text-4xl mt-2 opacity-70">
               {accordion.title}
            </h2>
          </div>
            <svg
              className={`w-4 h-4 ml-2 ${
                activeIndexes.includes(index) ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  activeIndexes.includes(index)
                    ? "M19 9l-7 7-7-7"
                    : "M9 5l7 7 7-7"
                }
              />
            </svg>
          </div>
          {activeIndexes.includes(index) && (
            <div className="pt-4 pb-6 text-white">
              <p className="opacity-70 text-sm md:text-lg">
                {accordion.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Services