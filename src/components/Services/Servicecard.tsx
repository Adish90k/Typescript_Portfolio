
import React from 'react';

type ServicecardProps = {
  servicecardinfo: {
    cardno: string;
    cardimg: string;
    title: string;
    description: string;
  };
};

const Servicecard: React.FC<ServicecardProps> = ({ servicecardinfo }) => {
  const { cardno, cardimg, title, description } = servicecardinfo;
  return (
   
    <div className="mt-8 max-sm:w-[270px] max-sm:flex-col max-sm:text-[10px] max-sm:h-[350px] flex glassmorphism justify-around items-center pt-5 pb-5 rounded-2xl">
      <div className="flex flex-col w-[60%]">
        <span className="max-sm:text-6xl text-8xl text-white font-dm-sans">{cardno}</span>
        <span className="max-sm:text-xl gradient-text-light text-2xl font-dm-sans font-bold mb-2">{title}</span>
        <p className="text-white font-dm-sans max-sm:text-[11px]">{description}</p>
      </div>
      <div>
        <img src={cardimg} alt="Service" width="250px"  className='rounded-xl max-sm:w-[180px]' />
      </div>
    </div>
  
  );
};

export default Servicecard;