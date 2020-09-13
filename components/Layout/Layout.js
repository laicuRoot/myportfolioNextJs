import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';
// import utilStyles from '../../styles/utils.module.css';

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
          {/* <section className={styles.avatarContainer}>
            <img className={styles.avatar} src="../../images/profile.png" alt="avatar" />
          </section> */}
          <main>
            <div className='container mx-auto px-5'>
              <header className='flex-col md:flex-row flex items-center md:justify-between mt-5 mb-5 md:mb-3'>
                <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'> Front End Developer </h1>
              </header>

              <hr />

              <section className='container mx-auto'>
                <div className='mb-4 text-lg leading-tight text-left px-4 py-2 m-2 h-40'>
                  <p className='text-4xl'> Hello I'm Jose Blanco and I'm self-tough front-end developer</p>
                </div>
              </section>

              <section className='container mx-auto'>
                
                <div className='flex flex-row text-center flex-wrap p-2 space-x-2 w-full justify-center'>
                  <div className='mb-4 text-lg leading-tight'><span>HTML & CSS /</span></div>
                  <div className='mb-4 text-lg leading-tight'><span>JAVASCRIPT /</span></div>
                  <div className='mb-4 text-lg leading-tight'><span>REACT /</span></div>
                  <div className='mb-4 text-lg leading-tight'><span>NEXT.JS/</span></div>
                  <div className='mb-4 text-lg leading-tight'><span>NPM </span></div>
                </div>

                <div className='flex flex-row text-center flex-wrap justify-items-center p-2 space-x-2 w-full justify-center'>
                  <div className='mb-4 text-lg leading-tight'><i className="fab fa-github fa-5x"></i></div>
                  <div className='mb-4 text-lg leading-tight'><i className="fab fa-js fa-5x"></i></div>
                  <div className='mb-4 text-lg leading-tight'><i className="fab fa-npm fa-5x"></i></div>
                  <div className='mb-4 text-lg leading-tight'><i className="fab fa-react fa-5x"></i></div>
                  <div className='mb-4 text-lg leading-tight'><i className="fab fa-node fa-5x"></i></div>
                </div>
              </section>
              </div>
          </main>
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
