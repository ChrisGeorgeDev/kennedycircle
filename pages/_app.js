import '../styles/globals.css'
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from '../components/Menu';
import Registration from '../components/Registration';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic'
import { pageview } from '../lib/gtag'
import Script from 'next/script'
import * as fbq from '../lib/fpixel'
import { useRouter } from 'next/router'
import { useEffect } from 'react'




const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function MyApp({ Component, pageProps, router }) {

  const prouter = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()
 
    const handleRouteChange = () => {
      fbq.pageview()
      pageview()
   
    }
    prouter.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      prouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [prouter.events])


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
      innerSize={22}
      outerSize={35}
      color='184, 157, 103'
      outerAlpha={0.4}
      innerScale={.7}
      outerScale={1.4}
    />
<Menu></Menu>
{/* <AnimatePresence> */}
<Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />



<motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
       duration: .85,
     }, 
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
