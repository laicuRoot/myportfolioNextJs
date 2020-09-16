import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
// import styles from './Layout.module.css';
// import utilStyles from '../../styles/utils.module.css';

export const siteTitle = 'Jose Blanco Portfolio'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.icon" />
        <meta name="og:title" content={siteTitle} />
      </Head>
        {home ? (
          <>
          <hr />
            <main>
                <div className='flex flex-col items-start px-5 mx-auto w-full'>
                  <div className='mt-40'>
                <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                    scale: .5,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .7
                    }
                  },
                }}>
                    <h1 className='text-5xl font-bold tracking-tighter leading-tight md:pr-8'> Hello I'm <span className='bg-black text-white m-1 p-2 rounded'>Jose Blanco</span> </h1>
                  </motion.div>
                    <h4 className='text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8'> Front End Developer.</h4>
                    <p className='text-xl font-medium p-1 mt-1 mb-1 w-1/2'> I'm a self-taught junior front-end developer with passion for web development and programming.</p>
                    <div className='flex items-center w-40'>
                      <Link href='/Resume'>
                        <button className='bg-black text-white rounded-full py-2 px-4 animate-pulse'>Find out more</button>
                      </Link>
                    </div>
                  </div>
                </div>
            </main>
          </>
        ) : (
          <>
            {children}
          </>
        )}
    </>
  );
}
