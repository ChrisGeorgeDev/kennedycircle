import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Hero";
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

      <Hero alt="Pic" image="/img/hero/KC-Render.jpg">
        <h1 className="display_h2 text-white text-7xl">KENNEDY CIRCLE</h1>
       

      </Hero>

      <Section anchor="overview" contrast="dark">
        <div className="flex flex-row">
          <div className="max-w-[700px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h3 className="display_h3 max-w-[700px] mb-4">
              Live. Work. Relax. Play.
            </h3>

            <p className="text-base max-w-[580px]">
              The Residences on Kennedy Circle comprises of 148 units in a
              6-storey mid-rise state-of-the-art building that embodies a
              distinct spirit and style like no other condominium in the area.
              The building features 1 bedroom, 1 bedroom + den and 2 bedroom
              unit types. Each unit has been carefully developed to suit a
              variety of lifestyles with convenience and comfort in mind, and
              appointed with beautiful, timeless features and finishes.
            </p>

            <Link href="/floorplans">
              <a className="cta links link--metis">VIEW FLOORPLANS</a>
            </Link>
          </div>
        </div>
      </Section>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row-reverse">
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
              <a className="cta">VIEW AMENITIES</a>
            </Link>
          </div>
        </div>
        {/* <img className="bl-round" src="/SuiteD-KitchenUpgrade1.png" /> */}
        <div className="here_img">
          <img
            src="/img/KC-Site-Homepage-Amenities-01b.png"
            alt="Picture of the author"
          />
        </div>
      </Section>

      <Section anchor="overview" contrast="white">
        <div className="flex flex-row">
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
              <a className="cta">EXPLORE THE NEIGHBOURHOOD</a>
            </Link>
          </div>
        </div>
        {/* <img className="bl-round" src="/SuiteD-KitchenUpgrade1.png" /> */}
        <div className="here_img">
          <img
            src="/img/KC-Site-Homepage-Community-07.png"
            alt="Picture of the author"
          />
        </div>
      </Section>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row-reverse">
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
              <a className="cta">GREEN LIVING</a>
            </Link>
          </div>
        </div>
        {/* <img className="bl-round" src="/SuiteD-KitchenUpgrade1.png" /> */}
        <div className="here_img">
          <img
            src="/img/KC-Site-Homepage-EcoConscious.png"
            alt="Picture of the author"
          />
        </div>
      </Section>

      <Registration></Registration>
      <Footer></Footer>
    </>
  );
}
