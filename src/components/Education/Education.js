import React, { useState } from 'react'
import LifeCard from '../LifeCard/LifeCard';
import MobileLifeCard from '../LifeCard/MobileLifeCard';


// const Education = ({ titulations }) => {
//   return (
//     <div id='education' className='mx-auto'>
//       <div className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
//         EDUCATION
//       </div>
//       {titulations.map((title, id) =>
//         <LifeCard key={id} {...title} />
//         )}
//     </div>
//   )
// }

const Education = ({ titulations }) => {

  const [width, setWidth] = useState(0);
  const breakpoint = 620;

  React.useEffect(() => {
    console.log(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width > breakpoint ? (<>
    <div id='experience' className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
      EDUCATION
      </div>
    {titulations.map((title, id) =>
      <LifeCard key={id} {...title} />)}
  </>) : (<>
    <div id='experience' className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
      WORK EXPERIENCE
      </div>
    <div className='flex-row items-center justify-center m-5'>
      {titulations.map((title, id) =>
        <MobileLifeCard key={id} {...title} />)}
    </div>
  </>);
}

export default Education;