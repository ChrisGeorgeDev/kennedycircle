import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const squareVariants = {
  visible: { opacity: 1, scale: 2, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};
function Square() {
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
      variants={squareVariants}
      className="square"
    ></motion.div>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1 className="title">Scroll Down</h1>
   <section className="h-screen relative bg-gvhGold-400">
   <Square />
    
   </section>
   <section className="h-screen relative bg-slate-700">
   <Square />
   
   </section>
   <section className="h-screen relative bg-yellow-800">
   <Square />
    
   </section>
    </div>
  );
}