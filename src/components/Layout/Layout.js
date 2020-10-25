import Head from 'next/head';
import Link from 'next/link';
import Nav from '../Nav/Nav';
import {useEffect} from 'react'
import {motion} from 'framer-motion';
import { initGA, logPageView } from '../../../lib/gtag'

export const siteTitle = 'Jose Blanco Portfolio'

export default function Layout({ children, home }) {
  
  useEffect(() =>{
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  },[])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.icon" />
        <meta name={siteTitle} content={siteTitle} />
      </Head>

        {home ? (
          <>
          <Nav />
          <hr />
            <main>
                <div className='flex flex-col items-start px-5 mx-auto w-full'>
                  <div className='mt-20 lg:mt-40 lg:m-10'>
                <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                    scale: .5,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                      duration:0.5
                    }
                  },
                }}>
                    <h1 className='text-sm md:text-4xl font-bold tracking-tighter leading-tight md:pr-8'> Hello I'm <span className='bg-black text-white p-1 rounded text-sm md:text-4xl lg:p-2'>Jose Blanco</span> </h1>
                  </motion.div>
                    <h4 className='text-lg md:text-5xl font-bold tracking-tighter leading-tight mt-1'> Front End Developer.</h4>
                    <p className='text-sm w-full font-medium p-1 mt-1 mb-1 sm:w-1/2 md:text-xl'> I'm a self-taught front-end developer with passion for web development and programming.</p>
                    <div className='flex items-center w-40'>
                      <Link href='/Resume'>
                    <button className='bg-black text-white rounded-full animate-pulse text-xs py-1 px-2 lg:text-lg'>Find out more</button>
                      </Link>
                    </div>
                  </div>
                </div>
            </main>
          </>
        ) : (
          <>
            <Nav />
            <hr />
            {children}
          </>
        )}
    </>
  );
}
