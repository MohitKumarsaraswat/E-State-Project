import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import home from "../assets/home.png";
const Hero = () => {
  return (
    <section id="Home" className="relative min-h-screen overflow-hidden">
      {" "}
      {/* Background Image */}{" "}
      <img
        src={home}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />{" "}
      {/* Dark Overlay */} <div className="absolute inset-0 bg-black/20"></div>{" "}
      {/* Content Wrapper */}{" "}
      <div className="relative z-50">
        {" "}
        {/* Navbar */} <Navbar /> {/* Hero Content */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-20 pt-20 "
        >
          {" "}
          {/* Heading */}{" "}
          <h1 className=" text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl ">
            {" "}
            Explore Homes That Fit Your Dreams{" "}
          </h1>{" "}
          {/* Description */}{" "}
          
          {/* Buttons */}{" "}
          <div className=" flex flex-col sm:flex-row gap-4 mt-10 ">
            {" "}
            <a
              href="#Projects"
              className=" px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 "
            >
              {" "}
              View Projects{" "}
            </a>{" "}
            <a
              href="#Contact"
              className=" px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 "
            >
              {" "}
              Contact Us{" "}
            </a>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
};
export default Hero;
