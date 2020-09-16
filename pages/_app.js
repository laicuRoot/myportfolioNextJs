import Nav from '../components/Nav/Nav'
import { motion } from 'framer-motion';
import '../styles/globals.css';
import '../styles/tailwind.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
    }}>
      <Nav />
      <Component {...pageProps} />
    </motion.div>
);
}

export default MyApp
