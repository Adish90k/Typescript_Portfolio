import React, { useState, useEffect } from "react";
import "./gradient.css";
import {
  FaReact,
  FaJsSquare,
  FaCss3, 
  FaAws,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { ArrowBigDownIcon } from "lucide-react";
import { motion } from "framer-motion";

const textOptions = ["Gallery", "Profile", "Portfolio"];

const Landing: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("Gallery");
  const [index, setIndex] = useState(0);
  const [textLength, setTextLength] = useState(displayedText.length);
  const [loadingDots, setLoadingDots] = useState("");

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAdding) {
        setDisplayedText(
          (prev) => prev + textOptions[index][displayedText.length]
        );
        setTextLength((prev) => prev + 1);

        if (textLength + 1 === textOptions[index].length) {
          setIsAdding(false);
        }
      } else if (textLength > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setTextLength((prev) => prev - 1);
      } else {
        const nextIndex = (index + 1) % textOptions.length;
        setIndex(nextIndex);
        setDisplayedText("");
        setTextLength(0);
        setIsAdding(true);
        setLoadingDots("");
      }
    }, 200);

    const dotInterval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 300);

    return () => {
      clearInterval(interval);
      clearInterval(dotInterval);
    };
  }, [index, textLength, isAdding]);

  return (
    <div
      className="flex overflow-x-hidden flex-col items-center justify-center h-[90vh] relative dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.6]"
      id="mainlandingbg"
    >
      <div className=" w-[70vw] h-[550px] rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col">
        <h2
          className="max-sm:text-3xl mt-[40px] font-DM Sans font-bold text-5xl text-center z-10"
          style={{ filter: "drop-shadow(2px 2px 1.1px #332)" }}
        >
          Welcome!
        </h2>

        <h1 className="max-sm:text-6xl mt-[40px] font-DM Sans w-screen font-bold text-8xl text-center mt-4 z-10 gradient-text">
          To my Code
        </h1>
        <div className="min-h-[130px] h-[130px]">
          <motion.h1
            className="font-dm-sans mt-[40px] max-sm:text-8xl font-bold text-9xl text-center mt-2 z-10 gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            {displayedText}
            <span className="text-xl">{loadingDots}</span>
          </motion.h1>
        </div>

        <div className="py-2 px-4 rounded-2xl mt-[100px] flex items-center border-[2px] border-black bg-white text-black transition duration-300 hover:bg-black hover:text-white">
          <p className="font-bold text-[18px] filter drop-shadow-md">
            Explore More
          </p>
          <ArrowBigDownIcon
            size={"20px"}
            className="ml-[5px] mt-[2px] transition duration-300"
            color="black"
            style={{ filter: "drop-shadow(0.2px 2px 1.1px #332)" }}
          />
        </div>

        <div className=" top-0 left-0 w-full h-full flex items-center justify-center">
          <FaJsSquare
            size={"45px"}
            className="text-black absolute top-[0px] left-[15%] max-sm:left-[0%] max-sm:top-[35px] transform -translate-x-1/2 translate-y-full float-icon"
            style={{ filter: "drop-shadow(0.2px 2px 1.1px #332)" }}
          />
          <FaHtml5
            size={"45px"}
            className="text-black absolute max-sm:right-[0%] max-sm:top-[35px] top-[0px] right-[11%] transform -translate-x-1/2 translate-y-full float-icon"
            style={{ filter: "drop-shadow(0.2px 2px 1.1px #332)" }}
          />
          <FaCss3
            size={"45px"}
            className="text-black absolute max-sm:left-[-18%] max-sm:top-[45vh]  top-1/2 left-[5%] transform -translate-y-1/2 -translate-x-full float-icon"
            style={{ filter: "drop-shadow(0.2px 2px 1.1px #332)" }}
          />
          <FaAws
            size={"45px"}
            className="text-black absolute top-1/2 right-[10px] max-sm:right-[-18%] max-sm:top-[45vh]  transform -translate-y-1/2 -translate-x-full float-icon"
            style={{ filter: "drop-shadow(0.2px 2px 1.1px #332)" }}
          />
          <FaReact
            size={"45px"}
            className="text-black absolute max-sm:bottom-[20px] max-sm:left-[10%] bottom-[10px] left-[15%] transform -translate-x-1/2 translate-y-full float-icon"
            style={{ filter: "drop-shadow(0.2px 2px 1.1px #332)" }}
          />
          <FaNodeJs
            size={"45px"}
            className="text-black absolute bottom-[10px] right-[11%] max-sm:bottom-[20px] max-sm:right-[10%] transform -translate-x-1/2 translate-y-full float-icon"
            style={{ filter: "drop-shadow(0.2px 2px 1.1px #332)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
