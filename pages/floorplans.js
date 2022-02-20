import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Hero";
import FlyoutMenu from "../components/Plans";
import Registration from "../components/Registration";
import Menu from "../components/Menu";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Kennedy Circle Condominiums | Milton, ON Condo for Sale"
        description="A short description goes here."
      />
      <Menu></Menu>
      <Hero alt="Pic" image="/img/hero/KC-Site-Residences-TitleAreaBG.jpg">
      <h1 className="display_h1_alt text-white">THE FLOOR PLANS</h1>
      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="max-w-[800px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h3 className="display_h3 max-w-[900px] mb-4">
              We bring style and functionality to each and every home.
            </h3>

            <p className="text-base max-w-[580px]">
              Each floor plan has been laid out for elevated living experiences.{" "}
            </p>

            <a href="#floorplans" className="cta">
              VIEW FLOOR PLANS
            </a>
          </div>
        </div>
      </Section>

      <Section anchor="floorplans" contrast="white">
        <h2 className="display_alt  text-center">FLOOR PLANS</h2>
        <div className="head_underline "></div>

        <FlyoutMenu />
      </Section>

   
    
      <Registration></Registration>
      <Footer></Footer>
    </>
  );
}
