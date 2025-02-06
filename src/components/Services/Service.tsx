import React from 'react';
// import serviceimg from '../../assets/landingbg.png';
import webdesign from "../../assets/5817154.jpg";
import webdeveloper from "../../assets/1687.jpg";
import awsimg from "../../assets/saas-concept-collage.jpg";

import '../../index.css';
import Servicecard from './Servicecard';

const Service: React.FC = () => {
  const serviceCarddata = [
    {
      cardno: "01",
      cardimg: webdeveloper,
      title: "Full-Stack Development",
      description: "I can build robust and dynamic web applications using React and Node.js.",
    },
    {
      cardno: "02",
      cardimg: webdesign,
      title: "Web Design",
      description: "I create custom web designs to enhance your website design and improve user experience.",
    },
    {
      cardno: "03",
      cardimg: awsimg,
      title: "AWS Cloud Integration",
      description: "I leverage AWS Cloud services to develop scalable, secure, and efficient solutions.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center bg-slate-950"
      style={{ background: 'linear-gradient(0deg,rgb(2,6,23),#fa207b)' }}
      id='Servicecontainer'
    >
      <div className="w-[70vw] mt-20">
        <h1 className="font-dm-sans font-bold text-6xl text-white">Services</h1>
        {serviceCarddata.map((card, index) => (
          <Servicecard key={index} servicecardinfo={card} />
        ))}
      </div>
    </div>
  );
};

export default Service;