import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';
import utilStyles from '../../styles/utils.module.css';

export const siteTitle = 'Jose Blanco Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <link rel="icon" href="/favicon.icon" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      {home ? (
        <>
          <section className={styles.avatarContainer}>
            <img className={styles.avatar} src="../../images/profile.png" alt="avatar" />
          </section>

          <section className={styles.cardContainer}>
            <h1 className={styles.title}> Front End Developer </h1>
            <hr className={styles.hr} />

            <ul className={styles.skillsContainer}>
              <li className={styles.skill}>HTML & CSS /</li>
              <li className={styles.skill}>NPM /</li>
              <li className={styles.skill}>JAVASCRIPT /</li>
              <li className={styles.skill}>REACT /</li>
              <li className={styles.skill}>NEXT.JS</li>
            </ul>

            <ul className={styles.skillsContainer}>
              <li className={styles.icon}>
                <i className="fab fa-github fa-5x"></i>
              </li>
              <li className={styles.icon}>
                <i className="fab fa-js fa-5x"></i>
              </li>
              <li className={styles.icon}>
                <i className="fab fa-npm fa-5x"></i>
              </li>
              <li className={styles.icon}>
                <i className="fab fa-react fa-5x"></i>
              </li>
              <li className={styles.icon}>
                <i className="fab fa-node fa-5x"></i>
              </li>
            </ul>
          </section>
        </>
      ) : (
        <>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
