import React from "react";
const Header = () => {
  const image1 = "./images/bg1.png";
  return (
    <div
      className="flex justify-center items-center  h-screen bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <h1 className="container px-6 text-3xl text-white md:text-7xl max-w-7xl font-satoshi">
        {/* <span className="opacity-50 font-normal">Jayson M. Caburatan</span>
        <br /> */}
        Bringing your web ideas to life.{" "}
        <span className="opacity-50">
          I specialize in creating custom websites that reflect your{" "}
        </span>{" "}
        brand and achieve your business goals.
        {/* <span className="opacity-50"> are our top priorities.</span> */}
      </h1>
    </div>
  );
};

export default Header;
