import React from "react";
import Profilepic from "../../assets/profileimage.jpeg";
import "../../index.css";
import Contact from "./Contact";
// import { SparklesCore } from "../ui/sparkles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

const Profile: React.FC = () => {
  return (
    <div
      className="max-sm:flex-wrap max-sm:h-[100%] bg-black text-white h-[70vh] flex"
      id="Profilecontainer"
    >
      <div className="w-1/2 max-sm:w-[100%] h-[100%]  flex flex-col justify-center items-center max-sm:pt-4">
        <div className="w-1/2 max-sm:w-[100%] ml-[-80px] max-sm:ml-0 max-sm:pl-[35vw]">
          <img
            src={Profilepic}
            alt="profile pic"
            className="rounded-[50%] w-[100px] h-[100px] max-sm:w-[80px] max-sm:h-[80px] max-sm:mt-4"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transform: "scale(1.5)",
            }}
          />
        </div>
        <div className="flex flex-col mt-8 max-sm:items-center">
          <h3 className="font-dm-sans text-6xl">Hi, I'm Adish,</h3>
          <span className="font-dm-sans text-4xl mt-2">
            a <span className="gradient-text">software developer</span>
          </span>
          <span className="font-dm-sans text-4xl mt-1">based in India</span>
          <div className="flex space-x-4 mt-5">
            <a >
              <SocialIcon
                url="https://www.linkedin.com/in/adish-kerkar-568482223/"
                style={{ height: 40, width: 40 }}
              />
            </a>
            <a>
              <SocialIcon
                url="https://github.com/Adish90k"
                style={{ height: 40, width: 40 }}
              />
            </a>
            <a>
              <SocialIcon
                url="https://www.instagram.com/adish_kerkar/"
                style={{ height: 40, width: 40 }}
              />
            </a>
          </div>
          <button className="font-dm-sans w-[160px] h-[40px] rounded-2xl mt-6 flex justify-center items-center gradient-background">
            Connect Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Profile;
