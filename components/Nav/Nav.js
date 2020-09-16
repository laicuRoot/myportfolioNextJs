import Link from 'next/link';
import styles from './Nav.module.css';
import { motion } from "framer-motion";
import navButtons from '../../buttons';


const NavButton = props => (
  <Link href={props.path} replace>
    <motion.div className=' block lg:inline-block lg:mt-0 bg-black font-bold text-white hover:shadow-md mr-2 p-1 rounded ' whileHover={{scale:1.1}} whileTap={{scale:0.8}}><span className='text-sm lg:flex-grow'>{props.label}</span></motion.div>
  </Link>
);

export default function Nav(){
  return (
    <nav className='flex items-center justify-between flex-wrap p-6'>
      <div className='flex items-center flex-shrink-0 text-black mr-6'>
        <Link href='/'>
          <span className='font-semibold text-xl tracking-tight'>Jose Blanco</span>
        </Link>
      </div>
      <div className='flex justify-end w-full block lg:flex lg:items-center lg:w-auto space-x-4'>
          {navButtons.map((button,id) => {
            return (
              <NavButton key={id} path={button.path} label={button.label} />
            );
          })}
      </div>
    </nav>
  );
}
