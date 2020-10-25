import React, { useState } from 'react'
import LifeCard from '../LifeCard/LifeCard';



const MobileLifeCard = ({ date, title, description, photo }) => {
  return (
    <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
      <div className="bg-white rounded-lg overflow-hidden shadow relative">
        <img className="h-56 w-full object-contain object-center" src={photo} alt="project photo" />
        <div className="p-4 h-auto md:h-40 lg:h-48">
          <title href="#" className="block text-green-400 hover:text-green-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
            {title}
          </title>

          <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            <p>{description}</p>
          </div>

          <div className="relative p-1 mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:flex w-full">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Education = ({ titulations }) => {

  const [width, setWidth] = useState(1240);
  const breakpoint = 800;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width > breakpoint ? (<>
    <div id='education' className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
      EDUCATION
      </div>
    {titulations.map((title, id) =>
      <LifeCard key={id} {...title} />)}
  </>) : (<>
    <div id='education' className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
      EDUCATION
      </div>
    <div className='flex-row items-center justify-center m-5'>
      {titulations.map((title, id) =>
        <MobileLifeCard key={id} {...title} />)}
    </div>
  </>);
}

export default Education;