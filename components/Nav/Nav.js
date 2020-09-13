import Link from 'next/link';
import styles from './Nav.module.css';
import navButtons from '../../pages/buttons';


const NavButton = props => (
  <Link href={props.path} replace>
    <div className={`${styles.item} block lg:inline-block lg:mt-0 text-black-200 hover:shadow-md mr-2 p-1 rounded hover:bg-gray-300`}><span className='text-sm lg:flex-grow'>{props.label}</span></div>
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
      <div className='flex justify-end w-full block lg:flex lg:items-center lg:w-auto'>
          {navButtons.map((button) => {
            return (
              <NavButton key={button} path={button.path} label={button.label} />
            );
          })}
      </div>
    </nav>
  );
}
