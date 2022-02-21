import '../styles/globals.css'
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from '../components/Menu';
import Registration from '../components/Registration';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function MyApp({ Component, pageProps, router }) {
  return (
  <>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"></meta>
<AnimatedCursor
      innerSize={25}
      outerSize={1}
      color='184, 157, 103'
      outerAlpha={0.2}
      innerScale={.7}
      outerScale={30}
    />
<Menu></Menu>
{/* <AnimatePresence> */}

<motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  },
  pageExit: {
    backgroundColor: 'red',
    opacity: 0
  }
}}>
   <Component {...pageProps} />
   </motion.div>
{/* </AnimatePresence> */}
   <Registration></Registration>
   <Footer></Footer>
  </>
  )
}

export default MyApp
