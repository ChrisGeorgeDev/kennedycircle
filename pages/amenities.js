import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Hero";
import Registration from "../components/Registration";
import Menu from "../components/Menu";
import SectionFull from "../components/SectionFull";
import { NextSeo } from "next-seo";
import { useAnimation, motion } from "framer-motion";
import {TextWrap, ImageWrap, ImageLoadIn} from "../components/Animations/PageContent";
import CtaNext from "../components/CtaNext";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <NextSeo
        title="The Amenities | Kennedy Circle Condominiums | Milton, ON"
        description="Contemporary Apartment Rentals Designed for Your Lifestyle."
      />
      <Hero alt="Pic" image="/img/hero/KC-Site-Amenities-TitleAreaBG.jpg"
        imagePortrait="img/hero/KC-Site-Amenities-TitleAreaBG-Portrait.jpg"

      >
        <h1 className="display_h1_alt text-white">THE AMENITIES</h1>
        <h2 className="text-white">Designed For Your Lifestyle</h2>


      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
         <TextWrap>
         <div className="max-w-[580px]">
            {/* <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div> */}
            <h3 className="display_h3 max-w-[700px] mb-4">
            Elevate Your Everyday at Kennedy Circle.
            </h3>

            <p className="text-base max-w-[580px]">
            At Kennedy Circle, your living space extends far beyond your suite. We've curated a selection of modern amenities designed to enhance your well-being, productivity, and connection. Discover spaces that seamlessly integrate into your daily routine, offering convenience and opportunities to unwind, focus, and socialize right at home.
            </p>
          </div>
         </TextWrap>
        </div>

        <ImageWrap>
        <div className="here_img">
          <motion.img variants={ImageLoadIn} 
            src="/img/KC-Site-Amenities-PartyRoom-07.png"
            alt="The Party Room"
          />
        </div>
</ImageWrap>
      </Section>

      <Section anchor="overview" contrast="white">
        <div className="flex flex-row-reverse">
        <TextWrap>
        <div className="max-w-[580px]">
            {/* <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div> */}
            <h2 className="display_h3 max-w-[700px] mb-4">
            Yoga & Wellness&nbsp;Room
            </h2>

            <p className="text-base max-w-[580px]">
            Prioritize your well-being in our serene yoga room, a dedicated space to stretch, meditate, and recharge.
            </p>
          </div>
        </TextWrap>
        </div>
      </Section>

      {/* <div className="here_img">
          <img
            src="/img/KC-Site-Amenities-YogaRoom-b.jpg"
            alt="Picture of the author"
          />
        </div> */}

        <section className="white">

<ImageWrap>
<div className="">
          <motion.img variants={ImageLoadIn} 
            src="/img/KC-Site-Amenities-YogaRoom-b.jpg"
            alt="The Fitness Studio"
          />
        </div>
</ImageWrap>

</section>






      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
       <TextWrap>
       <div className="max-w-[580px]">
            {/* <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div> */}
            <h2 className="display_h3 max-w-[700px] mb-4">
            Co-Working Lounge
            </h2>

            <p className="text-base max-w-[580px]">
            Streamline your workday or find focus in our stylish co-working lounge, offering a productive escape just steps from your door.
            </p>
          </div>
       </TextWrap>
        </div>


        <ImageWrap>
        <div className="here_img">
          <motion.img variants={ImageLoadIn} 
            src="/img/KC-Site-Amenities-CoWorkLounge-08.png"
            alt="Co-working Studio"
          />
        </div>
</ImageWrap>

      </Section>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
       <TextWrap>
       <div className="max-w-[580px]">
            {/* <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div> */}
            <h2 className="display_h3 max-w-[700px] mb-4">
            Pet Wash Station
            </h2>

            <p className="text-base max-w-[580px]">
            Keep your furry companions happy and clean with ease at our convenient, resident-exclusive pet wash station.            </p>
          </div>
       </TextWrap>
        </div>


        <ImageWrap>
        <div className="here_img">
          <motion.img variants={ImageLoadIn} 
            src="/img/petwashstation.png"
            alt="Pet Wash Station"
          />
        </div>
</ImageWrap>

      </Section>

     
     
      <Section anchor="overview" contrast="white">
        <div className="flex flex-row-reverse">
        <TextWrap>
        <div className="max-w-[580px]">
            {/* <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div> */}
            <h2 className="display_h3 max-w-[700px] mb-4">
            Expansive Outdoor&nbsp;Terrace
            </h2>

            <p className="text-base max-w-[580px]">
            Connect with neighbours, host friends, or simply relax under the open sky on our stunning 3,600 sqft outdoor terrace – your private urban oasis.            </p>
          </div>
        </TextWrap>
        </div>
      </Section>


      <section className="white">

<ImageWrap>
<div className="">
          <motion.img variants={ImageLoadIn} 
          src="/img/KC-Site-GreenLiving-Rooftop.jpg"
            alt="The Rooftop patio"
          />
        </div>
</ImageWrap>

</section>
     
      {/* <Section anchor="overview" contrast="white">
        <div className="flex relative flex-col">
  <TextWrap>
  <div className="lg:absolute right-0">
      <div className="flex justify-end ">
            <h2 className="display_h3 max-w-[300px] lg:max-w-[400px] mb-4">
              The Building<br/> at a glance
            </h2>
          </div>
      </div>
  </TextWrap>
      
     
        
        </div>

        <img className="w-full" src="/img/siteplan.jpg" />
      </Section> */}

      <Section anchor="overview" contrast="dark">
        <div className="flex flex-row">
        <TextWrap>
        <div className="w-full">
            <h2 className="display_alt  text-center">
              BUILDING
              <br />
              FEATURES & AMENITIES
            </h2>
            <div className="head_underline "></div>

            <div className="grid px-5 xl:w-full 2xl:w-11/12 mx-auto grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-20 pt-10  ">
              <div>
                <ul className="list-disc">
                  <li>
                    Building designed in collaboration with KNYMH Architects
                  </li>
                  <li>Indoor amenities designed by Stagg & Paper Design Co.</li>
                  <li>Outdoor amenities designed by Adesso Design Inc.</li>
                  <li>
                    State-of-the-art indoor amenities including Social Lounge,
                    Co-Working, and Yoga & Movement Studio
                  </li>
                  <li>Pet Wash Station</li>
                  <li>Chef inspired Entertainment Kitchen and Lounge Area</li>
                </ul>
              </div>

              <div>
                <ul className="list-disc">
                  <li>Furnished outdoor Rooftop Terrace</li>
                  <li>Secure Locker storage rooms</li>
                  <li>Electric Vehicle (EV) charging infrastructure</li>
                  <li>Gable View Homes Smart Home Technology</li>
                  <li>Virtual Concierge Service</li>
                  <li>Secure, Parcel Management Solution</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
            <a className="cta inline-block "href="/assets/downloads/KennedyCircle-FeaturesandFinishes-2024.pdf" target="_blank">
                DOWNLOAD FEATURES & AMENITIES
              </a>
            </div>
          </div>
        </TextWrap>
        </div>
      </Section>

    
    </>
  );
}
