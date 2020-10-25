import React from 'react'
import Router from 'next/router'
import Nav from '../src/components/Nav/Nav';
import Head from 'next/head';
import '../styles/globals.css';

// import * as gtag from '../lib/gtag';

import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// Notice how we track pageview when route is changed
// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps, router }) {
  return (
    <>
    <Head>
      <title>JB Dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
      pageInitial: {
        y:60,
        opacity: 0
      },
      pageAnimate: {
        y:0,
        opacity: 1,
        transition:{
          duration:1,
          ease: [0.6,-0.05, 0.01, 0.99]
        }
      },
      pageExit: {
        opacity:0
      }
    }}>
      <Nav />
      <Component {...pageProps} />
    </motion.div>
    </>
);
}

export default MyApp
