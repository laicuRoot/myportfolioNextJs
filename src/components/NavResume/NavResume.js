import { Link } from 'react-scroll';

const NavResume = () => {
  return(
    <nav className='inline-flex justify-evenly w-full m-1 h-auto text-sm text-center lg:text-lg'>
      <Link to="skills" spy={true} smooth={true} duration={1000}>
        <span className='m-1 font-medium underlineEffect uppercase cursor-pointer'> Skills </span>
      </Link>
      
      <Link to="experience" spy={true} smooth={true} duration={1000}>
        <span className='m-1 font-medium underlineEffect uppercase cursor-pointer'> Experience </span>
      </Link>
  
      <Link to="education" spy={true} smooth={true} duration={1000}>
        <span className='m-1 font-medium underlineEffect uppercase cursor-pointer'> Education </span>
      </Link>
    </nav>
  )
}

export default NavResume; 