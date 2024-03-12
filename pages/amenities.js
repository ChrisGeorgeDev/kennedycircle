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
        title="Kennedy Circle Condominiums | Milton, ON Condo for Sale"
        description="A short description goes here."
      />
      <Hero alt="Pic" image="/img/hero/KC-Site-Amenities-TitleAreaBG.jpg"
        imagePortrait="img/hero/KC-Site-Amenities-TitleAreaBG-Portrait.jpg"

      >
        <h1 className="display_h1_alt text-white">THE AMENITIES</h1>

      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
         <TextWrap>
         <div className="max-w-[580px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h3 className="display_h3 max-w-[700px] mb-4">
              Your home extends beyond.{" "}
            </h3>

            <p className="text-base max-w-[580px]">
              Come home to an expansive lobby complete with a 24-7 virtual
              concierge and spaces to relax and meet your neighbours and guests,
              including our 3,600 sqft outdoor terrace. Host an incredible event
              from our demonstration kitchen and lounge.
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
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h2 className="display_h3 max-w-[700px] mb-4">
              Self-care is everyday{" "}
            </h2>

            <p className="text-base max-w-[580px]">
              Focus on your health and wellness in our yoga, stretch and
              meditation room. This soothing and sun-filled space has been
              designed to benefit every active and health-conscious resident.{" "}
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
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h2 className="display_h3 max-w-[700px] mb-4">
              Working from home doesn't feel like work.
            </h2>

            <p className="text-base max-w-[580px]">
              We've created a digital community for our residents, with areas
              for social co-working spaces featuring work pods, a laptop bar and
              a boardroom to host meetings, plus Smart Home Tech offering
              digital building and unit access as well as smartphone video
              calling and delivery parcel scanning.
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

      <Section anchor="overview" contrast="white">
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
      </Section>

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
