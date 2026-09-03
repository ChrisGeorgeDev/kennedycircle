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
import { useAnimation, motion } from "framer-motion";
import {
  TextWrap,
  ImageWrap,
  ImageLoadIn,
} from "../components/Animations/PageContent";
import CtaNext from "../components/CtaNext";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Floorplans | 1, 1+Den & 2-Bedroom Rentals | Kennedy Circle, Milton"
        description="Modern 1, 1+den & 2-bedroom apartment rentals now leasing in Milton, ON. Smart home technology, rooftop terrace, co-working lounge & more. Now Pre-Leasing, Call 289.498.3213"
      />
      <Hero
        alt="Pic"
        image="/img/hero/KC-Site-Residences-TitleAreaBG.jpg"
        imagePortrait="/img/hero/KC-Site-FloorPlans-TitleAreaBG-P.jpg"
      >
        <h1 className="display_h1_alt text-white">THE FLOORPLANS</h1>
        <h2 className="text-white">Find Your Ideal Space</h2>
      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <TextWrap>
            <div className="max-w-[800px]">
              {/* <h2 className="display_h2 here">HERE</h2>
              <div className="head_underline"></div> */}
              <h3 className="display_h3 max-w-[900px] mb-4">
              Contemporary 1, 1+Den, and 2-Bedroom Apartments in Milton.
              </h3>

              <p className="text-base max-w-[580px]">
              Discover the perfect backdrop for your life at Kennedy Circle. Our thoughtfully designed rental suites offer a blend of modern aesthetics and practical comfort with features like approximately 9-foot ceilings (10-foot on the ground floor), modern wide plank laminate flooring, and designer kitchens with stainless steel appliances, quartz countertops, and soft-close cabinetry. Enjoy the convenience of in-suite laundry and individual heating and cooling. Kennedy Circle provides a space that truly feels like home.
              </p>
            </div>
          </TextWrap>
        </div>
      </Section>

      <Section anchor="floorplans" contrast="white">
        <TextWrap>
          <h2 className="display_alt  text-center">FLOORPLANS</h2>
          <h3 className="text-center text-gvhGold-400 text-2xl mt-6">Now Pre-Leasing — Occupancy from Late 2026</h3>
          <div className="head_underline "></div>

          <FlyoutMenu />
        </TextWrap>
      </Section>
    </>
  );
}
