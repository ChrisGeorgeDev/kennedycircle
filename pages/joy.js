import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import NewsletterForm from "../components/NewsletterForm";
import MailchimpForm from "../components/CustomForm";
const squareVariants = {
  visible: { opacity: 1,  transition: { duration: 1 } },
  hidden: { opacity: 0 }
};
function TextWrap(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => { 
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (

        <motion.div className=" bg-yellow-800"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        >
        {props.children}
    </motion.div>
  );
}
export default function App() {
  return (
    <div className="App">

<Hero alt="Pic" 
      image="/img/hero/KC-Render.jpg"
      imagePortrait="img/hero/KC-HeroImage-Rendering-Portrait.jpg"
      />
<Section anchor="overview" contrast="dark">
</Section>
<MailchimpForm></MailchimpForm>
</div>

  );
}