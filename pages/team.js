import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import profilePic from "../public/img/SuiteD-KitchenUpgrade1.png";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Registration from "../components/Registration";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Kennedy Circle Condominiums | Milton, ON Condo for Sale"
        description="A short description goes here."
      />
      <Menu></Menu>

      <Hero alt="Pic" image="/img/hero/KC-Site-Team-TitleAreaBG.jpg">
        <h1 className="display_h2 text-white ">THE TEAM</h1>
      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="">
            <h2 className="display_h2 ">Gable View Homes</h2>
            <h2 className="display_h3 mt-8 mb-8">The Builder</h2>
            <p className="text-base max-w-[900px]">
              Spaces designed for life. <br />
              At Gable View Homes, we are inspired to build houses and
              communities you’ll be proud to call home. As a boutique developer
              with over 25 years of combined experience, our vision remains a
              home that is inviting, desirable, affordable and thoughtfully
              integrated into the fabric of the surrounding community. With over
              175 homes built, our commitment is to build the highest quality,
              beautifully designed and sustainably built homes suited for every
              lifestyle.
            </p>{" "}
            <p className="text-base max-w-[900px]">
              Gable View Homes creates engaging and inspiring living experiences
              by setting new standards in real estate development. Grounded in
              diverse community engagement and integration with each project, we
              design and develop spaces to live, work and play.
            </p>
            <p className="text-base max-w-[900px]">
              From vibrant townhomes, contemporary singles and semi-detached
              houses to modern condominiums, our mission is to adhere to our
              core values of creating outstanding spaces through design and
              craftsmanship and to deliver buildings with quality, experience
              and innovation. Our work is guided by passion and drive to reshape
              the way we build homes and communities.
            </p>
          </div>
        </div>
      </Section>

      <Section anchor="overview" contrast="white">
        <div className="flex flex-row">
          <div className="">
            <h2 className="display_h2 here">KNYMH Inc</h2>
            <h2 className="display_h3 mt-8 mb-8">The Architect.</h2>

            <p className="text-base max-w-[900px]">
              Team KNYMH Inc. is comprised of Architects, BCIN Certified
              Designers, Interior Coordinators, Technologists and LEED®
              Accredited Professionals. Their focus is to develop responsible
              solutions with the full commitment to incorporate environmental
              sustainability into planning, design and construction practices.
            </p>
            <p className="text-base max-w-[900px]">
              As a solution oriented practice, KNYMH’s services include
              architectural, interior design, urban planning and project
              management services, ranging from programming spaces, concept
              design, strategic planning and approvals, detailed construction
              documentation and administration through to facility management.
            </p>
          </div>
        </div>
      </Section>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="">
            <h2 className="display_h2 ">Stagg & Paper Interiors</h2>
            <h2 className="display_h3 mt-8 mb-8">The Interior Designer.</h2>

            <p className="text-base max-w-[900px]">
              Stagg & Paper Interiors is an interior design firm rooted in the
              fundamental principle that home is where they start⁠. They take an
              intentional approach to design that places value on simplicity and
              sustainability. By designing spaces that are functional and which
              reflect diverse individual needs, Stagg & Paper Interiors creates
              a living oasis from the world’s outside noise — offering clients
              the sense of well-being, calmness, and order within their home.
            </p>
            <p className="text-base max-w-[900px]">
              With 15 years of experience working in high profile firms, they
              offer services in space planning, design development, and finish
              and furniture selections. They bring passion and simplicity to the
              design process through project management and creating functional
              interiors with authenticity and innovation.
            </p>
          </div>
        </div>
      </Section>

      <Registration></Registration>
      <Footer></Footer>
    </>
  );
}
