
import React, { useEffect } from "react";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Hero";
import { NextSeo } from "next-seo";
import { useAnimation, motion } from "framer-motion";
import {TextWrap, ImageWrap, ImageLoadIn} from "../components/Animations/PageContent";
import CtaNext from "../components/CtaNext";




export default function Home() {



  return (
    <>
      <NextSeo
        title="Kennedy Circle Condominiums | Milton, ON Condo for Sale"
        description="A short description goes here."
      />
  

      <Hero alt="Pic" 
      image="/img/hero/KC-Site-HomepageHero-Overlay.jpg"
      imagePortrait="img/hero/KC-HeroImage-Rendering-Portrait.jpg"
      >
    
<svg className="heroMsg lg:mb-24" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 864 318.99">

<g>
	<g>
		<g>
			<path  fill="#FFFFFF" d="M70.54,175.47h-8.41l-32.68-38.84L0,177.01v-92.7h6.31v73.06l53.15-73.06h7.99l-34.22,46.84L70.54,175.47z"
				/>
			<path  fill="#FFFFFF" d="M132.52,175.47V84.31h59.04v6.45h-52.73v35.9h41.09v6.45h-41.09v35.76h52.73v6.59H132.52z"/>
			<path  fill="#FFFFFF" d="M263.5,101.42v74.04h-6.31V83.19l63.11,75.45V84.31h6.31v92.7L263.5,101.42z"/>
			<path  fill="#FFFFFF" d="M401.5,101.42v74.04h-6.31V83.19l63.11,75.45V84.31h6.31v92.7L401.5,101.42z"/>
			<path  fill="#FFFFFF" d="M533.04,175.47V84.31h59.04v6.45h-52.73v35.9h41.09v6.45h-41.09v35.76h52.73v6.59H533.04z"/>
			<path  fill="#FFFFFF" d="M683.79,175.47h-26.22V84.31h26.22c6.45,0,12.43,1.19,17.95,3.58c5.52,2.38,10.28,5.77,14.3,10.17
				c3.83,4.21,6.78,9.02,8.84,14.44c2.06,5.42,3.09,11.17,3.09,17.25c0,6.08-1.03,11.83-3.09,17.25c-2.06,5.42-5,10.29-8.84,14.58
				c-4.02,4.49-8.79,7.92-14.3,10.31C696.23,174.27,690.24,175.47,683.79,175.47z M663.88,169.15h19.91
				c11.31,0,20.52-3.97,27.63-11.92c3.27-3.55,5.77-7.69,7.5-12.41c1.73-4.72,2.59-9.75,2.59-15.08c0-5.23-0.87-10.21-2.59-14.94
				c-1.73-4.72-4.23-8.86-7.5-12.41c-7.2-7.76-16.41-11.64-27.63-11.64h-19.91V169.15z"/>
			<path  fill="#FFFFFF" d="M820.52,137.04l35.9-52.73H864l-40.39,59.6v31.55h-6.31v-31.55l-40.39-59.6h7.57L820.52,137.04z"/>
		</g>
		<g>
			<path  fill="#FFFFFF" d="M143.53,318.99c-8.32,0-16.04-2.1-23.14-6.31c-7.11-4.21-12.72-9.89-16.83-17.04
				c-4.11-7.15-6.17-14.93-6.17-23.35c0-8.42,2.06-16.17,6.17-23.28c4.11-7.1,9.72-12.76,16.83-16.97
				c7.1-4.21,14.82-6.31,23.14-6.31c6.45,0,12.64,1.33,18.58,4c5.94,2.67,11.15,6.43,15.64,11.29l-4.91,4.35
				c-3.74-4.21-8.16-7.48-13.25-9.82c-5.1-2.33-10.45-3.5-16.06-3.5c-7.2,0-13.84,1.8-19.91,5.4s-10.92,8.48-14.51,14.65
				s-5.4,12.9-5.4,20.2c0,7.29,1.8,14.02,5.4,20.19s8.44,11.06,14.51,14.66c6.08,3.6,12.72,5.4,19.91,5.4
				c5.98,0,11.66-1.31,17.04-3.93c5.38-2.62,9.98-6.26,13.81-10.94l5.05,3.93c-4.4,5.52-9.72,9.8-15.99,12.83
				C157.18,317.48,150.55,318.99,143.53,318.99z"/>
			<path  fill="#FFFFFF" d="M243.1,318.01v-91.15h6.31v91.15H243.1z"/>
			<path  fill="#FFFFFF" d="M373.38,318.01l-37.87-46h11.22c6.92,0,12.53-0.89,16.83-2.66c3.18-1.49,5.94-3.76,8.27-6.8
				c2.34-3.04,3.51-6.38,3.51-10.03c0-3.27-0.98-6.38-2.95-9.33c-1.96-2.94-4.77-5.35-8.41-7.22c-3.64-1.87-7.85-2.8-12.62-2.8
				h-25.52v84.84h-6.31v-91.15h31.83c4.3,0,8.32,0.68,12.06,2.03c3.74,1.36,7.01,3.29,9.82,5.82c2.71,2.43,4.79,5.19,6.24,8.27
				c1.45,3.09,2.17,6.27,2.17,9.54c0,5.14-1.54,9.75-4.63,13.81c-3.08,4.07-6.73,6.99-10.94,8.76c-2.9,1.31-5.73,2.13-8.48,2.45
				c-2.76,0.33-5.68,0.49-8.76,0.49l32.96,39.97H373.38z"/>
			<path  fill="#FFFFFF" d="M486.69,318.99c-8.32,0-16.04-2.1-23.14-6.31c-7.11-4.21-12.72-9.89-16.83-17.04
				c-4.11-7.15-6.17-14.93-6.17-23.35c0-8.42,2.06-16.17,6.17-23.28c4.11-7.1,9.72-12.76,16.83-16.97
				c7.1-4.21,14.82-6.31,23.14-6.31c6.45,0,12.64,1.33,18.58,4c5.94,2.67,11.15,6.43,15.64,11.29l-4.91,4.35
				c-3.74-4.21-8.16-7.48-13.25-9.82c-5.1-2.33-10.45-3.5-16.06-3.5c-7.2,0-13.84,1.8-19.91,5.4s-10.92,8.48-14.51,14.65
				c-3.6,6.17-5.4,12.9-5.4,20.2c0,7.29,1.8,14.02,5.4,20.19c3.6,6.17,8.44,11.06,14.51,14.66c6.08,3.6,12.72,5.4,19.91,5.4
				c5.98,0,11.66-1.31,17.04-3.93c5.38-2.62,9.98-6.26,13.81-10.94l5.05,3.93c-4.4,5.52-9.72,9.8-15.99,12.83
				C500.34,317.48,493.7,318.99,486.69,318.99z"/>
			<path  fill="#FFFFFF" d="M584.57,318.01v-91.15h6.31v84.84h51.19v6.31H584.57z"/>
			<path  fill="#FFFFFF" d="M707.56,318.01v-91.15h59.04v6.45h-52.73v35.9h41.09v6.45h-41.09v35.76h52.73v6.59H707.56z"/>
		</g>
	</g>
	<g>
		<path  fill="#FFFFFF" d="M192.09,3.77h-8.12v26.04h-3.48V3.77h-8.16V0.5h19.76V3.77z"/>
		<path  fill="#FFFFFF" d="M226.5,0.5v29.31h-3.48V17h-14.91v12.81h-3.48V0.5h3.48v13.23h14.91V0.5H226.5z"/>
		<path  fill="#FFFFFF" d="M257.32,26.55v3.27H239.9V0.5h17.04v3.27h-13.57v9.71h10.55v3.18h-10.55v9.88H257.32z"/>
		<path  fill="#FFFFFF" d="M308.78,29.81l-7.41-10.55h-0.8h-6.07v10.55h-3.48V0.5h9.55c6.57,0,10.38,4.02,10.38,9.46
			c0,4.19-2.26,7.45-6.28,8.71l7.87,11.14H308.78z M294.5,16.16h5.99c4.23,0,6.99-2.18,6.99-6.2c0-4.06-2.76-6.2-6.99-6.2h-5.99
			V16.16z"/>
		<path  fill="#FFFFFF" d="M342.11,26.55v3.27h-17.42V0.5h17.04v3.27h-13.57v9.71h10.55v3.18h-10.55v9.88H342.11z"/>
		<path  fill="#FFFFFF" d="M373.05,6.15l-2.64,1.42c-1.34-2.68-3.48-4.44-6.53-4.44c-3.22,0-5.44,1.84-5.44,4.4
			c0,2.39,1.51,3.89,4.69,5.11l2.14,0.8c5.28,1.97,8.58,4.23,8.58,8.88c0,5.02-4.81,8.12-9.8,8.12c-4.98,0-9.09-3.01-10.22-7.2
			l2.81-1.34c1,3.1,3.64,5.36,7.41,5.36c3.35,0,6.2-1.93,6.2-4.9c0-3.35-2.34-4.61-5.82-5.95l-2.18-0.84
			c-4.44-1.67-7.29-3.98-7.29-8.12c0-4.27,3.77-7.45,8.92-7.45C368.44,0,371.79,3.01,373.05,6.15z"/>
		<path  fill="#FFFFFF" d="M389.67,29.81h-3.48V0.5h3.48V29.81z"/>
		<path  fill="#FFFFFF" d="M426.6,15.16c0,8.16-6.28,14.65-14.82,14.65h-8.71V0.5h8.71C420.32,0.5,426.6,6.99,426.6,15.16z
			 M423.04,15.16c0-6.28-4.31-11.35-11.31-11.35h-5.19V26.5h5.19C418.73,26.5,423.04,21.44,423.04,15.16z"/>
		<path  fill="#FFFFFF" d="M456.58,26.55v3.27h-17.42V0.5h17.04v3.27h-13.57v9.71h10.55v3.18h-10.55v9.88H456.58z"/>
		<path  fill="#FFFFFF" d="M493.26,0.5v29.31h-2.68L472.82,6.87v22.94h-3.48V0.5h2.68l17.75,22.99V0.5H493.26z"/>
		<path  fill="#FFFFFF" d="M521.02,30.23c-7.62,0-14.99-6.2-14.99-15.07c0-8.88,7.37-15.07,14.99-15.07c3.73,0,7.08,1.26,9.71,3.48
			l-2.14,2.43c-2.05-1.63-4.69-2.6-7.33-2.6c-5.99,0-11.64,4.86-11.64,11.77c0,6.91,5.65,11.77,11.64,11.77c2.68,0,5.36-1,7.41-2.68
			l2.18,2.43C528.17,28.97,524.78,30.23,521.02,30.23z"/>
		<path  fill="#FFFFFF" d="M560.62,26.55v3.27h-17.42V0.5h17.04v3.27h-13.57v9.71h10.55v3.18h-10.55v9.88H560.62z"/>
		<path  fill="#FFFFFF" d="M591.57,6.15l-2.64,1.42c-1.34-2.68-3.48-4.44-6.53-4.44c-3.22,0-5.44,1.84-5.44,4.4
			c0,2.39,1.51,3.89,4.69,5.11l2.14,0.8c5.28,1.97,8.58,4.23,8.58,8.88c0,5.02-4.82,8.12-9.8,8.12s-9.09-3.01-10.22-7.2l2.8-1.34
			c1,3.1,3.64,5.36,7.41,5.36c3.35,0,6.2-1.93,6.2-4.9c0-3.35-2.34-4.61-5.82-5.95l-2.18-0.84c-4.44-1.67-7.29-3.98-7.29-8.12
			c0-4.27,3.77-7.45,8.92-7.45C586.96,0,590.31,3.01,591.57,6.15z"/>
		<path  fill="#FFFFFF" d="M655,15.16c0,8.88-7.37,15.07-14.99,15.07c-7.66,0-14.99-6.2-14.99-15.07c0-8.88,7.33-15.07,14.99-15.07
			C647.63,0.08,655,6.28,655,15.16z M651.4,15.16c0-6.91-5.65-11.77-11.39-11.77c-5.78,0-11.39,4.86-11.39,11.77
			c0,6.91,5.61,11.77,11.39,11.77C645.75,26.92,651.4,22.07,651.4,15.16z"/>
		<path  fill="#FFFFFF" d="M691.68,0.5v29.31H689L671.24,6.87v22.94h-3.47V0.5h2.68l17.75,22.99V0.5H691.68z"/>
	</g>
</g>
</svg>




       <h1 className="display_h1_alt text-white mt-10">IT STARTS HERE</h1>

      </Hero>




<Section anchor="overview" contrast="dark">
        <div className="flex flex-row">
  <TextWrap>
  <div 
   
   className="max-w-[700px]"
   >
     <h2  className="display_h2 here">HERE</h2>
     <div   className="head_underline"></div>
     <h3    className="display_h3 max-w-[700px] mb-4">
       Live. Work. Relax. Play.
     </h3>

     <p   className="text-base max-w-[580px]">
       The Residences on Kennedy Circle comprises of 148 units in a
       6-storey mid-rise state-of-the-art building that embodies a
       distinct spirit and style like no other condominium in the area.
       The building features 1 bedroom, 1 bedroom + den and 2 bedroom
       unit types. Each unit has been carefully developed to suit a
       variety of lifestyles with convenience and comfort in mind, and
       appointed with beautiful, timeless features and finishes.
     </p>

     <Link href="/floorplans">
  
     {/* <CtaNext>VIEW FLOORPLANS</CtaNext> */}

     <a className="cta inline-block items-center links link--metis">

<span className="flex items-center">
VIEW FLOORPLANS
<svg width="24" className="ml-2" height="8" viewBox="0 0 24 8" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1547 4.3582C23.35 4.16293 23.35 3.84635 23.1547 3.65109L19.9727 0.469108C19.7775 0.273846 19.4609 0.273846 19.2656 0.469108C19.0704 0.66437 19.0704 0.980953 19.2656 1.17621L22.0941 4.00464L19.2656 6.83307C19.0704 7.02833 19.0704 7.34491 19.2656 7.54018C19.4609 7.73544 19.7775 7.73544 19.9727 7.54018L23.1547 4.3582ZM0.700195 4.50464L22.8012 4.50464L22.8012 3.50464L0.700195 3.50464L0.700195 4.50464Z" />
</svg>

</span>

 
 </a>
  
     </Link>



   </div>
  </TextWrap>
        </div>
      </Section>




      <Section anchor="overview" contrast="light">
        <div className="flex flex-row-reverse">

        <TextWrap>

          <div className="max-w-[580px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h2 className="display_h3 max-w-[700px] mb-4">
              You have more reasons to stay at home.
            </h2>

            <p className="text-base max-w-[580px]">
              The amenities of the Residences on Kennedy Circle offer something
              for everyone - whether it's getting work done, focusing on
              self-care or hosting an incredible event. Community spaces, such
              as co-working areas, a yoga room, pet washing station and a 3,600
              sqft outdoor terrace are just some of the thoughtfully selected
              conveniences designed to meet all our residents' needs.
            </p>

            <Link href="/amenities">
            {/* <CtaNext>VIEW AMENITIES</CtaNext> */}

            <a className="cta inline-block items-center links link--metis">

<span className="flex items-center">
VIEW AMENITIES
<svg width="24" className="ml-2" height="8" viewBox="0 0 24 8" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1547 4.3582C23.35 4.16293 23.35 3.84635 23.1547 3.65109L19.9727 0.469108C19.7775 0.273846 19.4609 0.273846 19.2656 0.469108C19.0704 0.66437 19.0704 0.980953 19.2656 1.17621L22.0941 4.00464L19.2656 6.83307C19.0704 7.02833 19.0704 7.34491 19.2656 7.54018C19.4609 7.73544 19.7775 7.73544 19.9727 7.54018L23.1547 4.3582ZM0.700195 4.50464L22.8012 4.50464L22.8012 3.50464L0.700195 3.50464L0.700195 4.50464Z" />
</svg>

</span>

 
 </a>

            </Link>
          </div>
          </TextWrap>
        </div>
<ImageWrap>
<div className="here_img">
          <motion.img variants={ImageLoadIn} 
            src="/img/KC-Site-Homepage-Amenities-01b.png"
            alt="Picture of the author"
          />
        </div>
</ImageWrap>
      </Section>

      <Section anchor="overview" contrast="white">
        <div className="flex flex-row">
        <TextWrap>

          <div className="max-w-[580px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h2 className="display_h3 max-w-[700px] mb-4">
              You're part of a community.
            </h2>

            <p className="text-base max-w-[580px]">
              The amenities of the Residences on Kennedy Circle offer something
              for everyone – whether it's getting work done, focusing on
              self-care or hosting an incredible event. Community spaces, such
              as co-working areas, a yoga room, pet washing station and a 3,600
              sqft outdoor terrace are just some of the thoughtfully selected
              conveniences designed to meet all our residents' needs.
            </p>

            <Link href="/location">
            {/* <CtaNext>EXPLORE THE NEIGHBOURHOOD</CtaNext> */}

            <a className="cta inline-block items-center links link--metis">

<span className="flex items-center">
EXPLORE THE NEIGHBOURHOOD
<svg width="24" className="ml-2" height="8" viewBox="0 0 24 8" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1547 4.3582C23.35 4.16293 23.35 3.84635 23.1547 3.65109L19.9727 0.469108C19.7775 0.273846 19.4609 0.273846 19.2656 0.469108C19.0704 0.66437 19.0704 0.980953 19.2656 1.17621L22.0941 4.00464L19.2656 6.83307C19.0704 7.02833 19.0704 7.34491 19.2656 7.54018C19.4609 7.73544 19.7775 7.73544 19.9727 7.54018L23.1547 4.3582ZM0.700195 4.50464L22.8012 4.50464L22.8012 3.50464L0.700195 3.50464L0.700195 4.50464Z" />
</svg>

</span>

 
 </a>
            </Link>
          </div>
          </TextWrap>

        </div>
        <ImageWrap>
        <div className="here_img">
        <motion.img variants={ImageLoadIn} 
            src="/img/KC-Site-Homepage-Community-07.png"
            alt="Picture of the author"
          />
        </div>
      </ImageWrap>
      </Section>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row-reverse">
        <TextWrap>

          <div className="max-w-[580px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h2 className="display_h3 max-w-[700px] mb-4">
              You're living an eco-conscious lifestyle.
            </h2>

            <p className="text-base max-w-[580px]">
              We've committed to bring sustainable design and
              environmentally-responsible features, amenities and technology
              throughout the building.{" "}
            </p>

            <Link href="/greenliving">
            {/* <CtaNext>LEARN MORE</CtaNext> */}
            <a className="cta inline-block items-center links link--metis">

<span className="flex items-center">
LEARN MORE
<svg width="24" className="ml-2" height="8" viewBox="0 0 24 8" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1547 4.3582C23.35 4.16293 23.35 3.84635 23.1547 3.65109L19.9727 0.469108C19.7775 0.273846 19.4609 0.273846 19.2656 0.469108C19.0704 0.66437 19.0704 0.980953 19.2656 1.17621L22.0941 4.00464L19.2656 6.83307C19.0704 7.02833 19.0704 7.34491 19.2656 7.54018C19.4609 7.73544 19.7775 7.73544 19.9727 7.54018L23.1547 4.3582ZM0.700195 4.50464L22.8012 4.50464L22.8012 3.50464L0.700195 3.50464L0.700195 4.50464Z" />
</svg>

</span>

 
 </a>
            </Link>
          </div>
          </TextWrap>

        </div>
 <ImageWrap>
 <div className="here_img">
        <motion.img variants={ImageLoadIn} 
            src="/img/KC-Site-Homepage-EcoConscious.png"
            alt="Picture of the author"
          />
        </div>
 </ImageWrap>
      </Section>

    </>
  );
}
