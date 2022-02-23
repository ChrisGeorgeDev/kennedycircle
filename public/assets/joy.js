import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";
import Section from "../components/Section";
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


<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>

<div id="mc_embed_signup">
<form action="https://nottinghilltowns.us18.list-manage.com/subscribe/post?u=839fb24cef0413753d27dbc3a&amp;id=f752654c15" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
</div>
	<div id="mce-responses" class="clear">
		<div class="response hidden" id="mce-error-response" ></div>
		<div class="response hidden" id="mce-success-response" ></div>
	</div>    
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_839fb24cef0413753d27dbc3a_f752654c15" tabindex="-1" value=""/></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
    </div>
</form>
</div>


</div>

  );
}