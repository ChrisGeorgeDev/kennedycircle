import React, { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

  export const TextReveal = {
    hidden: { opacity: 0, y:120 },
    visible: { y: 0, opacity: 1,
      transition: {
       ease: "easeInOut",
        duration: 1,
        staggerChildren: 0.03
      }, 
    },
  };


export function TextWrap(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => { 
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
  
          <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={TextReveal}
          >
          {props.children}
      </motion.div>
    );
  }

    export  const ImageReveal = {
    hidden: { scale: 2, opacity: 0, y:120 },
    visible: { y: 0, opacity: 1, scale: 1,
      transition: {
       ease: "easeInOut",
        duration: 3,
        staggerChildren: 0.03
      }, 
    },
  };

  export function ImageWrap(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => { 
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
  
          <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={TextReveal}
          >
          {props.children}
      </motion.div>
    );
  }

  export const ImageLoadIn = {
    hidden: { scale: .9, opacity: 0, y:120 },
    visible: { y: 0, opacity: 1, scale: 1,
      transition: {
       ease: "easeInOut",
        duration: 2,
        staggerChildren: 0.03
      }, 
    },
  };
