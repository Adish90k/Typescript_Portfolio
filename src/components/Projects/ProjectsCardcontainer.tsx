import React from 'react';
import cardimg from "../../assets/geochat-main.png"
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";


const ProjectsCardcontainer:React.FC = () => {
  return (
    <CardContainer className="inter-var">
    {/* <CardBody className="bg-black bg-opacity-0 border-2px border-indigo-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "> */}
    <CardBody className="max-sm:w-[320px] bg-black bg-opacity-0 border-[1.8px] border-indigo-500 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6">

      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 text-white"
      >
       Geochat
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        A realtime chat application based on user's location
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
         <img src={cardimg} alt="" className='w-full h-[200px] rounded-xl'/>
      </CardItem>
      <div className="flex justify-between items-center mt-5">
        <CardItem
          translateZ={20}
          target="__blank"
          className="px-4 py-2 rounded-xl font-normal cursor-pointer text-white"
        >
          <a href="https://geochat-web.netlify.app/">Live→</a>
        
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold"
        >
          <a href="https://github.com/Adish90k/Geochat_backend"></a>
          Github
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  )
}

export default ProjectsCardcontainer