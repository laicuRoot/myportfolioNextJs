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
          <hr />
          <main className=' h-auto'>
            <section className='container mx-auto px-5'>
              <div className='flex flex-col items-start w-full'>
                <div className='mt-40'>
                  <h1 className='text-5xl font-bold tracking-tighter leading-tight md:pr-8'> Hello I'm <span className='bg-black text-white m-1 p-2 rounded'>Jose Blanco</span> </h1>
                  <h4 className='text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8'> Front End Developer.</h4>
                  <p className='text-xl font-medium p-1 mt-1 mb-1 w-1/2'> I'm a self-taught junior front-end developer with passion for web development and programming.</p>
                  <div className='flex items-center'>
                    <Link href='/Resume'>
                      <button className='w-40 bg-black text-white rounded-full py-2 px-4 animate-pulse'>Find out more</button>
                    </Link>
                  </div>
                </div>
              </div>
              </section>
          </main>
        </>
      ) : (
        <>
          <hr />
          <main className='max-h-full'>
           <div className='container mx-auto px-5'>
                {children}
           </div>
          </main>
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
