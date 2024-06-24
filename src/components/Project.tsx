import React from "react";

const Project = () => {
  return (
    <section id="projects">
      <div className="container px-6 mx-auto">
        <h2 className="md:mt-48 mt-24 text-xl md:text-5xl text-white max-w-5xl opacity-80">
          Producing high-quality web projects that effectively convey clients'
          unique vision and goals.
        </h2>
        <div className="grid md:grid-cols-2 mt-12 md:mt-32 gap-12 cursor-pointer">
          <a href="https://vapingsidewalk-client.onrender.com/">
            <img
              className="h-96 w-full opacity-50 hover:opacity-100 "
              src="./images/ecom.png"
              alt="Vaping Sidewalk"
            />
          </a>
          <a href="https://delicia-recipes.vercel.app/">
            <img
              className="h-96 w-full opacity-50 hover:opacity-100 "
              src="./images/delicia.png"
              alt=""
            />
          </a>
          <a href="https://github.com/jmontierde/Shang-Chi">
            <img
              className="h-96 w-full opacity-50 hover:opacity-100 "
              src="./images/work1.png"
              alt=""
            />
          </a>
          <a href="https://github.com/jmontierde/Black">
            <img
              className="h-96 w-full opacity-50 hover:opacity-100"
              src="./images/work2.png"
              alt=""
            />
          </a>
          <a href="https://github.com/jmontierde/Microsoft-Edge-Clone">
            <img
              className="h-96 w-full opacity-50 hover:opacity-100"
              src="./images/work3.png"
              alt=""
            />
          </a>
          <a href="https://github.com/jmontierde/BrylChallenge.github.io">
            <img
              className="h-96 w-full opacity-50 hover:opacity-100"
              src="./images/work4.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
