import React,{useState} from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";
import navButtons from '../../../buttons';


const NavButton = props => (
  <Link href={props.path} replace>
    <motion.div className=' block lg:mt-0 font-bold text-black hover:shadow-md mr-2 p-1 rounded ' whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
      <span className='text-xs lg:text-sm uppercase cursor-pointer lg:flex-grow'>{props.label}</span>
    </motion.div>
  </Link>
);

export default function Nav(){
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='flex items-center justify-between flex-wrap p-3 w-full'>
      <div className='flex items-center flex-shrink-0 text-black mr-6'>
        <Link href='/'>
          <span className='text-xs font-semibold lg:text-xl tracking-tight cursor-pointer'>Jose Blanco</span>
        </Link>
        <button
          className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className={
        "lg:flex flex-grow items-center justify-end" +
        (navbarOpen ? " flex" : " hidden")
        }>
        <div className='flex justify-end w-full lg:items-center lg:w-auto space-x-4'>
          {navButtons.map((button, id) => {
            return (
              <NavButton key={id} path={button.path} label={button.label} />
            );
          })}
        </div>
      </div>
    </nav>
  );
}