import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";



const Skills: React.FC = () => {
  const skillsData = [
    { id: 1, name: "React.js", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" },
    { id: 2, name: "Node.js", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg" },
    { id: 3, name: "MongoDB", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" },
    { id: 4, name: "Express.js", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg" },
    { id: 5, name: "JavaScript", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" },
    { id: 6, name: "AWS DynamoDB", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazondynamodb.svg" },
    { id: 7, name: "AWS", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg" },
    { id: 8, name: "MySQL", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" },
    { id: 9, name: "Python", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" },
    { id: 10, name: "JWT auth", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg" },
    { id: 11, name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" },
    { id: 12, name: "HTML", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" },
  ];

  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center pt-20 max-sm:pl-[-10px]" id="Skillcontainer">
      <div className="w-[70vw] flex flex-col max-sm:w-[100%]  max-sm:ml-[-20px]">
        <h2 className="text-white font-dm-sans text-white text-7xl max-sm:w-[100%] max-sm:text-center">Skills</h2>
        <AnimatedTooltip items={skillsData} />
      </div>
    </div>
  );
};

export default Skills;
