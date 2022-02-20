import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Hero";
import Registration from "../components/Registration";
import { Fragment } from "react";
import { Tab, Transition } from "@headlessui/react";
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
      <Hero alt="Pic" image="/img/hero/KC-Site-GreenLiving.jpg"
            imagePortrait="img/hero/KC-Site-GreenLiving-TitleAreaBG-Portrait.jpg"

      >
        <h1 className="display_h1_alt text-white">GREEN LIVING</h1>
      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="max-w-[580px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h3 className="display_h3 max-w-[700px] mb-4">
              You're living a sustainable and eco-conscious lifestyle.
            </h3>

            <p className="text-base max-w-[580px]">
              We've committed to bring sustainable design and
              environmentally-responsible features, amenities and technology
              throughout the building. <br />
              <br />
            </p>
          </div>
        </div>
      </Section>

      <div className="img_break">
        <img
          src="/img/SuiteD-KitchenUpgrade1.png"
          alt="Picture of the author"
        />
      </div>

      <Section anchor="overview" contrast="dark">
        <div className="flex flex-row">
          <div className="w-full">
            <h2 className="display_alt  text-center">GREEN LIVING</h2>
            <div className="head_underline "></div>

            <div className="w-4/5 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 pt-10  ">
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-Green-Icons-1-HeatingandCooling.svg"
                />
                <h3 className="text-xl mb-6">Heating & Cooling</h3>
                <p>
                  Efficient distribution of heating and cooling through sealed
                  duct work which lowers the usage of energy, as well as the
                  installation of an Energy Recovery Ventilator (ERV) resulting
                  in healthier, fresh air intake, improved control of humidity
                  and lowered use of energy.
                </p>
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-Green-Icons-2-Insulation.svg"
                />
                <h3 className="text-xl mb-6">Insulation</h3>
                <p>
                  Tightly sealed building envelope and wall insulation to reduce
                  heat loss and thermally insulated energy efficient double
                  glazed architecturally designed windows with low expansion
                  polyurethane spray foam for a tight air seal.
                </p>
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-Green-Icons-3-ElectricalandPlumbing.svg"
                />
                <h3 className="text-xl mb-6">Electrical & Plumbing</h3>
                <p>
                  Individually metered suites to lower costs to utility bills
                  and high efficiency plumbing fixtures with central hot water
                  delivery system installed throughout building and in suites
                  for water conservation.
                </p>
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-Green-Icons-4-Recycling.svg"
                />
                <h3 className="text-xl mb-6">Recycling</h3>
                <p>
                  Community Recycling and Waste Reduction Program with
                  centralized disposal facilities with separate water
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="w-full">
            <h2 className="display_alt  text-center">EV CHARGING</h2>
            <div className="head_underline "></div>

            <h2 className="display_h4 text-center pt-8 pb-8">
              Two options offered for EV&nbsp;Charging:
            </h2>

            <Tab.Group>
              <Tab.List className="pb-6 text-center flex-grow ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-b-4 px-5 pb-2 mb-4 border-gvhGold-400  text-gvhBlue-400 text-center "
                          : " text-gvhBlue-400 mb-4 px-5 pb-2 border-b text-left border-gvhGold-400"
                      }
                    >
                      <span className="pr-4">Option A</span>
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-b-4 px-5 pb-2 mb-4 border-gvhGold-400  text-gvhBlue-400 text-center "
                          : " text-gvhBlue-400 mb-4 px-5 pb-2 border-b text-left border-gvhGold-400"
                      }
                    >
                      <span className="pr-4">Option B</span>
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <h2 className="display_h4 text-center w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto pb-10">
                    Turnkey Electrical Vehicle Charging with fully installed EV
                    service equipment.
                  </h2>

                  <ul className=" list-disc mx-auto w-full px-5 md:w-4/5  lg:w-3/5 xl:w-2/5">
                    <li>
                      Electricity Meter to be billed directly to residents and
                      separate from suite electrical consumption through
                      Electric Vehicle Energy Management System.
                    </li>
                    <li>
                      Available at Residential Suite Occupancy Date, no later
                      than final closing
                    </li>
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <h2 className="display_h4 text-center w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto pb-10">
                    EV Charging Rough-In to facilitate future installation of EV
                    Charging Capability
                  </h2>

                  <ul className=" list-disc mx-auto w-full px-5 md:w-4/5  lg:w-3/5 xl:w-2/5">
                    <li>
                      Offers an Installation of electrical conduit running to
                      sub-electrical room to facilitate future installation of
                      EV Charge capabilities
                    </li>
                    <li>
                      To be managed by Property Management and Condominium
                      Corporation after closing. Agreement to be provided and
                      signed by resident/owner
                    </li>
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            <div className="here_img">
              <img
                src="/img/KC-Site-GreenLiving-EVCharging-08.png"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </Section>

      <Registration></Registration>
      <Footer></Footer>
    </>
  );
}
