import Link from 'next/link';
import styles from './Nav.module.css';


const NavButton = props => (
  <Link href={props.path}>
    <li className={styles.item}><a>{props.label}</a></li>
  </Link>
);

export default function Nav(props){
  return(
    <nav className={styles.navContainer}>
      <span className='logo'> Jose Blanco </span>
      <ul className={styles.navLinks}>
      {props.navButtons.map(button =>{
        <NavButton 
          key={button}
          path={button.path}
          label={button.label}
        />
      })}
        
      </ul>
    </nav>
  )
}
