import React from "react";

const About = () => {
  return (
    <div className="container px-6 mx-auto mt-12 md:mt-52 md:px-0   font-satoshi space-y-6">
      <h2 className="text-[#909292] text-xl max-w-2xl md:text-5xl md:max-w-5xl ">
        Combining passion with{" "}
        <span className="text-white">
          {" "}
          skills to create impactful web experiences.{" "}
        </span>{" "}
        Let's work together to achieve your goals!
      </h2>
      <div className="flex text-12 md:text-2xl font-satoshi mt-12">
        <a
          href="#projects"
          className="rounded-full border-solid border text-center border-blue-900 hover:bg-blue-900 text-[#ebe9e9] py-2  md:py-4 w-28 md:w-40 mr-4"
        >
          My works
        </a>
        <a
          href="#contact"
          className="rounded-full border-solid border text-center border-gray-500 hover:bg-gray-500 text-[#ebe9e9]  py-2 md:py-4 w-28 md:w-40"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default About;
