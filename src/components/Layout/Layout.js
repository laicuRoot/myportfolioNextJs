import Head from 'next/head';
import Link from 'next/link';
import Nav from '../Nav/Nav';
// import {useEffect} from 'react'
import {motion} from 'framer-motion';
// import { initGA, logPageView } from '../../../lib/gtag';

export const siteTitle = 'Jose Blanco Portfolio'

export default function Layout({ children, home }) {
  
  // useEffect(() =>{
  //   if (!window.GA_INITIALIZED) {
  //     initGA()
  //     window.GA_INITIALIZED = true
  //   }
  //   logPageView()
  // },[])

  return (
    <>
      <Head>
        <title>JB Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-89G480K53Q"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              <!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-89G480K53Q"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-89G480K53Q');
              </script>
                `,
            }}
            />
        </Head>

        {home ? (
          <>
          <Nav />
          <hr />
            <main>
                <div className='flex flex-col items-start px-5 mx-auto w-full'>
                  <div className='mt-40 lg:mt-40 lg:m-10'>
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
                    <h1 className='text-left text-xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8'> Hello I'm <span className='bg-black text-white p-1 rounded text-2xl md:text-4xl lg:p-2'>Jose Blanco</span> </h1>
                  </motion.div>
                    <h4 className='text-left text-3xl md:text-5xl font-bold tracking-tighter leading-tight mt-1'> Front End Developer.</h4>
                    <p className=' text-left text-lg w-full font-medium p-1 mt-1 mb-2 sm:w-1/2 md:text-xl'> I'm a self-taught front-end developer with a passion for web development and programming.</p>
                    <div className='flex items-center w-40'>
                      <Link href='/Resume'>
                    <button className='bg-black text-white rounded-full animate-pulse text-lg py-1 px-2 lg:text-xl'>Find out more</button>
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
