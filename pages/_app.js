import Nav from '../src/components/Nav/Nav';
import '../styles/globals.css';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps, router }) {
  return (
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
);
}

export default MyApp
