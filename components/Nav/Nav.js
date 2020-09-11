import Link from 'next/link';
import styles from './Nav.module.css';
import navButtons from '../../pages/buttons';


const NavButton = props => (
  <Link href={props.path} replace>
    <li className={styles.item}>{props.label}</li>
  </Link>
);

export default function Nav(){
  return (
    <nav className={styles.navContainer}>
      <Link href='/'>
        <span className="logo"> Jose Blanco </span>
      </Link>
      <ul className={styles.navLinks}>
        {navButtons.map((button) => {
          return (
            <NavButton key={button} path={button.path} label={button.label}/>
          );
        })}
      </ul>
    </nav>
  );
}
