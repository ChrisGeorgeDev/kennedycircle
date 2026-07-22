import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Hero";
import Registration from "../components/Registration";
import Neighbourhood from "../components/NeighbourhoodSlider";
import SectionFull from "../components/SectionFull";
import Menu from "../components/Menu";
import DividerImg from "../components/DividerImg";
import { NextSeo } from "next-seo";
import { useAnimation, motion } from "framer-motion";
import {TextWrap, ImageWrap, ImageLoadIn} from "../components/Animations/PageContent";
import CtaNext from "../components/CtaNext";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Location | Kennedy Circle Apartments | Milton, ON"
        description="Modern 1, 1+den & 2-bedroom apartment rentals now leasing in Milton, ON. Smart home technology, rooftop terrace, co-working lounge & more. Book a tour: 905.336.8953."
      />
      <Hero alt="Pic" image="/img/hero/KC-Site-Neighbourhood-TitleAreaBG.jpg"
      imagePortrait="/img/hero/KC-Site-Neighbourhood-TitleAreaBG-Portrait.jpg"
      
      >
        <h1 className="display_h1_alt text-white">THE LOCATION</h1>
        <h2 className="text-white">Milton Living: Connected & Convenient</h2>

      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
        <TextWrap>
        <div className="max-w-[580px]">
            {/* <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div> */}
            <h3 className="display_h3 max-w-[700px] mb-4">
            Explore Your New Neighbourhood
            </h3>

            <p className="text-base max-w-[580px]">
            Perfectly positioned in Milton, Ontario, Kennedy Circle connects you to the best the area has to offer. Enjoy the balance of nearby nature trails and parks with the convenience of urban amenities. Shops, dining, schools, and easy transit links are all within reach, making it effortless to embrace the vibrant Milton lifestyle right from your doorstep.              <br />
              <br />
            </p>

            <p className="text-base max-w-[580px]">
              With nearby shops, big box stores, restaurants, parks and schools,
              modern living has never been so balanced.
            </p>
          </div>
        </TextWrap>
        </div>
      </Section>

      <SectionFull anchor="gallery" contrast="light pb-40">
     <TextWrap>
     <Neighbourhood></Neighbourhood>
     </TextWrap>
      </SectionFull>

      <Section anchor="overview" contrast="dark">
        <div className="flex items-center justify-center flex-row w-full">
          <div className="w-full flex-col md:flex-row md:items-center flex ">
           
<TextWrap>
<div>
              <h2 className="display_h3 max-w-[400px] md:max-w-[700px] mb-4">
                LIfe's conveniences are just around the corner
              </h2>

              <a href="/assets/downloads/KC-NeighbourhoodMap.pdf" target="_blank" className="cta hidden md:inline-block ">
                DOWNLOAD COMMUNITY&nbsp;MAP{" "}
              </a>
            </div>
</TextWrap>

            <div className=" mt-0 w-full">
              <img
                src="/img/icon/KC-Site-SiteMap.svg"
                alt="Picture of the author"
                width={200}
                className="w-full"
              />
                  <a href="/assets/downloads/KC-NeighbourhoodMap.pdf" target="_blank" className="inline-block md:hidden cta">
                DOWNLOAD COMMUNITY&nbsp;MAP{" "}
              </a>
            </div>

          </div>
        </div>
      </Section>

      <DividerImg
        image="/img/Section-5_KC-Site-Neighbourhood-FamilyBGPhoto.jpg"
        imagePortrait="/img/hero/KC-Site-Neighbourhood-FamilyBGPhoto-Portrait.jpg"
        position="top left"
      />

    </>
  );
}
