import Head from "next/head";
import Image from "next/image";
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

export default function Home() {
  return (
    <>
      <NextSeo
        title="Kennedy Circle Condominiums | Milton, ON Condo for Sale"
        description="A short description goes here."
      />
      <Menu></Menu>
      <Hero alt="Pic" image="/img/hero/KC-Site-Neighbourhood-TitleAreaBG.jpg"
      imagePortrait="img/hero/KC-Site-Neighbourhood-TitleAreaBG-Portrait.jpg"
      
      >
        <h1 className="display_h1_alt text-white">THE LOCATION</h1>
      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="max-w-[580px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h3 className="display_h3 max-w-[700px] mb-4">
              Milton: Meet your neighbourhood.
            </h3>

            <p className="text-base max-w-[580px]">
              The Residences on Kennedy Circle offers the convenience of a
              Milton Transit bus stop at its doorstep, and is a short distance
              from the GO Station with a direct route to downtown Toronto, 20
              minutes to Toronto Pearson Airport and 5 minutes to highway 401.
              Located in the Toronto-Waterloo Innovation Corridor, the second
              largest technology cluster in North America, residents are in
              proximity to Canada’s top academic institution and universities,
              start-up incubators, research facilities and tech companies.
              <br />
              <br />
            </p>

            <p className="text-base max-w-[580px]">
              With nearby shops, big box stores, restaurants, parks and schools,
              modern living has never been so balanced.
            </p>
          </div>
        </div>
      </Section>

      <SectionFull anchor="gallery" contrast="light pb-40">
        <Neighbourhood></Neighbourhood>
      </SectionFull>

      <Section anchor="overview" contrast="dark">
        <div className="flex items-center justify-center flex-row w-full">
          <div className="w-full flex-row items-center flex ">
           
            <div>
              <h2 className="display_h3 max-w-[700px] mb-4">
                LIfe's conveniences are just around the corner
              </h2>

              <a href="#NEEDTHEFILE" target="_blank" className="cta">
                DOWNLOAD COMMUNITY&nbsp;MAP{" "}
              </a>
            </div>

            <div className="here_img w-full">
              <img
                src="/img/icon/KC-Site-SiteMap.svg"
                alt="Picture of the author"
                width={200}
                className="w-full"
              />
            </div>

          </div>
        </div>
      </Section>

      <DividerImg
        image="/img/Section-5_KC-Site-Neighbourhood-FamilyBGPhoto.jpg"
        imagePortrait="img/hero/KC-Site-Neighbourhood-FamilyBGPhoto-Portrait.jpg"
        position="top left"
      />

      <Registration></Registration>
      <Footer></Footer>
    </>
  );
}
