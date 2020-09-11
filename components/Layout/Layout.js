import Head from 'next/head';
import styles from './Layout.module.css';
import Nav from '../../components/Nav/Nav'
import navButtons from '../../config/buttons';


export default function Layout(props){
  return(
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
    </Head>
    <>
      <Nav navButtons={navButtons}/>
      <main className={styles.mainContainer}>

        <section className={styles.avatarContainer}>
            <img className={styles.avatar} src='/images/profile.png' alt="avatar"></img>
        </section>

        <section className={styles.cardContainer}>
          <h1 className={styles.title}> Front End Developer </h1>
          <hr className={styles.hr}></hr>
            <ul className={styles.skillsContainer}>
              <li className={styles.skill}>HTML/CSS |</li>
              <li className={styles.skill}>Bootstrap |</li>
              <li className={styles.skill}>Javascript |</li>
              <li className={styles.skill}>React |</li>
              <li className={styles.skill}>NPM </li>
            </ul>

          <ul className={styles.skillsContainer}>
            <li className={styles.icon}><i className="fab fa-github fa-5x" aria-hidden="true"></i></li>
            <li className={styles.icon}><i className="fab fa-js-square fa-5x" aria-hidden="true"></i></li>
            <li className={styles.icon}><i className="fab fa-react fa-5x"></i></li>
            <li className={styles.icon}><i className="fab fa-node fa-5x"></i></li>
            <li className={styles.icon}><i className="fab fa-npm fa-5x"></i></li>
          </ul>
        </section>
      </main>
    </>
    </>
  )
}