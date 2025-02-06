import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const About: React.FC = () => {
    const content = [
        {
          title: "First Year",
          description:
            "In 2020-2021, I went to NITK after cracking JEE Mains and tried to learn new skills like graphic designing and web development. It was a year of exploration and discovering my interests.",
          content: (
            <div className="h-full w-full bg-black flex items-center justify-center  text-xl text-white">
              2020-2021
            </div>
          ),
        },
        {
          title: "Second Year",
          description:
            "In 2021-2022, I focused more on web development, diving into both frontend and backend development with technologies like React and Node.js. This was the year I honed my technical skills.",
          content: (
            <div className="h-full w-full bg-black flex items-center justify-center text-xl text-white">
              2021-2022
            </div>
          ),
        },
        {
          title: "Third Year",
          description:
            "In 2022-2023, I expanded my skill set by learning AWS and deployment techniques. This experience gave me a deeper understanding of cloud services and scalable infrastructure.",
          content: (
            <div className="h-full w-full bg-black flex items-center justify-center  text-xl text-white">
              2022-2023
            </div>
          ),
        },
        {
          title: "Fourth Year",
          description:
            "In 2024, I did an internship at Vivriti Capital in Chennai as a React and Python developer intern. Currently, I work as a Developer Associate at SAP Labs.",
          content: (
            <div className="h-full w-full bg-black flex items-center justify-center  text-xl text-white">
              2024-2025
            </div>
          ),
        },
      ];
      

  return (
    <>
      <div
        className=" flex flex-col justify-center items-center"
        style={{ background: "linear-gradient(0deg,#fa207b,rgb(2,6,23))" }}
        id="Aboutcontainer"
      >
        <div className=" w-[70vw] mt-[20vh]">
          <h1 className="text-white font-dm-sans  text-7xl">About Me</h1>
          <p className="text-white mt-5">
            👋 Hi there! I’m Adish, a passionate software engineer with a knack
            for solving complex problems and bringing ideas to life through
            code. From crafting interactive web experiences to building
            intelligent systems powered by AI, I thrive on creating impactful
            solutions. Dive into my portfolio to explore the projects and
            innovations that showcase my journey in tech! 🚀
          </p>
          <div className="flex flex-col items-center justify-center max-sm:w-[100%] max-sm:h-[300px]">

                      <StickyScroll content={content} />
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
