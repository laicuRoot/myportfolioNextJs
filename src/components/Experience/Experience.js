import React,{useState} from 'react'
import LifeCard from '../LifeCard/LifeCard';
import MobileLifeCard from '../MobileCard/MobileLifeCard';

const Experience = ({experiences}) => {

  const [width, setWidth] = useState(0);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width > breakpoint ? (<>
    <div id='experience' className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
      WORK EXPERIENCE
      </div>
    {experiences.map((experience, id) =>
      <LifeCard key={id} {...experience} />)}
  </>) : (<>
    <div id='experience' className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
      WORK EXPERIENCE
      </div>
      <div className='flex-row items-center justify-center m-5'>
        {experiences.map((experience, id) =>
          <MobileLifeCard key={id} {...experience} />)}
      </div>
  </>);
}

export default Experience;