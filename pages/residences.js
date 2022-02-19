import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import profilePic from "../public/img/SuiteD-KitchenUpgrade1.png";
import Hero from "../components/Hero";
import Registration from "../components/Registration";
import Floorplans from "../components/Floorplans";
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
        <h1 className="display_h2 text-white ">THE RESIDENCES</h1>
      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="max-w-[580px]">
            <h2 className="display_h2 here">HERE</h2>
            <div className="head_underline"></div>
            <h3 className="display_h3 max-w-[700px] mb-4">
              Spaces designed for life.
            </h3>

            <p className="text-base max-w-[580px]">
              At The Residences on Kennedy Circle, we bring functionality and
              style to each home. Each floor plan has been laid out for elevated
              living experiences.
            </p>

            <Link href="/">
              <a className="cta">VIEW FLOORPLANS</a>
            </Link>
          </div>
        </div>
      </Section>

      <Section anchor="overview" contrast="white">
        <div className="flex flex-row">
          <div className="max-w-[580px]">
            <h2 className="display_h3 max-w-[700px] mb-4">Spacious Living</h2>

            <p className="text-base max-w-[580px]">
              These spacious floor plans invite light into the space with floor
              to ceiling windows and 10 feet high ceilings on the ground floor
              and 9 feet high on the upper floors. Open to the living area,
              we’ve designed our kitchens to be host-friendly and efficient with
              ample counter space, modern appliances and beautifully appointed
              finishes and hardware. These finishes extend to our bathrooms that
              provide generous storage and cabinetry with full bathtubs or
              walk-in showers. Our 2-bedroom plans units offer corner views from
              the living room or the master bedroom.
            </p>
          </div>
        </div>
        {/* <img className="bl-round" src="/SuiteD-KitchenUpgrade1.png" /> */}
      </Section>

      <div className="here_img">
        <Image
          src={profilePic}
          layout="responsive"
          alt="Picture of the author"
        />
      </div>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row-reverse">
          <div className="max-w-[580px]">
            <h2 className="display_h3 max-w-[700px] mb-4">
              Designs for the Digital Age.{" "}
            </h2>

            <p className="text-base max-w-[580px]">
              We've fitted every space with our Smart Home Technology that
              offers the conveniences of digital living. Use your smartphone for
              digital building access, smartphone video calling, facial
              recognition entry and to receive delivery notifications. In-suite
              features such as lighting and thermostat as well as keyless lock
              and entry are some additional features we’ve integrated into our
              innovative homes control system.
            </p>
          </div>
        </div>
        {/* <img className="bl-round" src="/SuiteD-KitchenUpgrade1.png" /> */}
        <div className="here_img">
          <img
            src="/img/KC-Site-Residences-SmartHomeTech-05.png"
            alt="Picture of the author"
          />
        </div>
      </Section>

      <Section anchor="overview" contrast="white">
        <div className="flex flex-row">
          <div className="max-w-[580px]">
            <h2 className="display_h3 max-w-[700px] mb-4">
              A breath of fresh air.
            </h2>

            <p className="text-base max-w-[580px]">
              All units feature balconies providing our residents with an
              outdoor living area, and are laid out to offer privacy.
            </p>
          </div>
        </div>
        {/* <img className="bl-round" src="/SuiteD-KitchenUpgrade1.png" /> */}
        <div className="here_img">
          <img
            src="/img/KC-Site-Residences-Bedroom-06.png"
            alt="Picture of the author"
          />
        </div>
      </Section>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <div className="w-full">
            <h2 className="display_alt  text-center">FEATURES & FINISHES</h2>
            <div className="head_underline "></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 pt-10  ">
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-FF-Icons-1-General.svg"
                />
                <h3 className="text-xl mb-6">General</h3>
                <p>
                  Approx. 10' high ceilings on ground floor and approx 9' high
                  ceilings on 2nd-6th floor. Modern wide plank, wear-resistant
                  laminate flooring and modern style interior doors and trim.
                </p>
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-FF-Icons-2-Kitchen.svg"
                />
                <h3 className="text-xl mb-6">Kitchen</h3>
                <p>
                  ENERGY STAR® stainless steel appliance package with
                  custom-crafted kitchen cabinetry with soft close doors and
                  drawers and cultured marble countertop.{" "}
                </p>
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-FF-Icons-3-EnsuiteandBathroom.svg"
                />
                <h3 className="text-xl mb-6">Ensuite & Bathroom</h3>
                <p>
                  Cultured marble countertop with sleek Moen ‘Vichy’ faucet and
                  contemporary hardware and tiled with imporated ceramic tile.{" "}
                </p>
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-FF-Icons-4-Laundry.svg"
                />
                <h3 className="text-xl mb-6">Laundry</h3>
                <p>
                  Full-size ENERGY STAR® washer and energy efficient heat pump
                  ventless dryer and floored with imported ceramic tile.{" "}
                </p>
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-FF-Icons-5-MechanicalandElectrical.svg"
                />
                <h3 className="text-xl mb-6">Mechanical & Electrical</h3>
                <p>
                  Individual heating & cooling units and Electricity and Water
                  consumption sub-metering with Energy Recovery Ventilator.{" "}
                </p>{" "}
              </div>
              <div>
                <img
                  className="h-[182px] mb-[70px]"
                  src="img/icon/KC-Site-FF-Icons-6-SecurityandCommunications.svg"
                />
                <h3 className="text-xl mb-6">Security & Communications</h3>
                <p>
                  Integrated Gable View Homes Smart Home Technology offering
                  keyless building and unit entry and 24-hour video surveillance
                  monitoring system.{" "}
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/">
                <a className="cta">DOWNLOAD FEATURES & FINISHES</a>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Registration></Registration>
      <Footer></Footer>
    </>
  );
}
