import React from "react";
import ProjectsCardcontainer from "./ProjectsCardcontainer";

const Projects: React.FC = () => {
  return (
    <>
      <div className="bg-slate-950 flex flex-col justify-center items-center pt-20" id="Projectcontainer">
        <div className="w-[70vw]">
        <h2 className="font-dm-sans text-white text-7xl">Projects</h2>
        <ProjectsCardcontainer />
        <p className="text-white text-center text-xl">More coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
