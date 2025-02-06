import React,{ useState, useEffect }  from "react"

const Header:React.FC = () => {
 
  const [blur, setBlur] = useState<number>(0); 

  const handleScroll = () => {
    const scrollPosition = window.scrollY; 
    const blurAmount = Math.min(scrollPosition / 50, 10); 
    setBlur(blurAmount); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);
 
  return (
 <div className="max-sm:ml-[4vw] max-sm:w-[92vw] h-[7vh] bg-black flex justify-around items-center mt-1 fixed w-[80vw] z-[10] ml-[20vh]"
 style={{
  backdropFilter: `blur(${blur}px)`, 
  transition: 'backdrop-filter 0.3s ease-out', 
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}}
 >
   <div className="max-sm:mr-5">
    <span className="text-white">
    <span className="text-xl">P</span>ortfolio.
    </span>
   </div>
   <div className="flex">
    <ul className="flex text-white">
      <li className="mr-10" >About</li>
      <li className="mr-10">Contact</li>
      <li className="mr-10">Projects</li>
      {/* <li className="mr-10">FAQ</li> */}
    </ul>
   </div>
 </div>
  
  )
}

export default Header