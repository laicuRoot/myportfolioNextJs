import Link from 'next/link';
import styles from './Nav.module.css';
import navButtons from '../../pages/buttons';


const NavButton = props => (
  <Link href={props.path} replace>
    <li className={`${styles.item} block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4`}>{props.label}</li>
  </Link>
);

export default function Nav(){
  return (
    <nav className='flex items-center justify-between flex-wrap p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link href='/'>
          <span className='font-semibold text-xl tracking-tight'>Jose Blanco</span>
        </Link>
      </div>
      <ul className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          {navButtons.map((button) => {
            return (
              <NavButton key={button} path={button.path} label={button.label} />
            );
          })}
        </div>
      </ul>
    </nav>
  );
}
