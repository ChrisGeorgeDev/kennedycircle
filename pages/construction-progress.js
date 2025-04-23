import React, { useEffect, useState, useId, useRef } from "react";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Hero";
import { NextSeo } from "next-seo";
import { useInView } from "react-intersection-observer";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useAnimation, motion, animate } from "framer-motion";
import {
  TextWrap,
  Progress,
  ImageWrap,
  ImageLoadIn,
  ProgressCirc,
} from "../components/Animations/PageContent";
import CtaNext from "../components/CtaNext";
import CircleProgress from "../components/CircleProgress";
import ProgressMe from "../components/CircleProgress/progress";
import { Container } from "../components/Container";
import { DiamondIcon } from "../components/DiamondIcon";
import { DateTime } from "luxon";
import YouTubeFrame from "../components/Youtube";

export default function ConstructionProgress({ progress }) {
  
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  // console.log("STUF", progress.data[0].attributes.construction_progress);

  const milestones = progress.data[0].attributes.construction_progress;

  const total = milestones.reduce(
    (acc, milestone) => acc + milestone.percentage_complete,
    0
  );
  const average = Math.round(total / milestones.length);
  

  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect,", inView);
  }, [inView]);

  function Counter({ from, to }) {
    const pval = useRef();

    useEffect(() => {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          pval.current.textContent = value.toFixed(0);
        },
      });
      return () => controls.stop();
    }, [from, to]);

    return <span ref={pval} />;
  }

  return (
    <>
      <NextSeo
        title="Status Updates | Kennedy Circle Condominiums | Milton, ON"
        description="Contemporary Apartment Rentals Designed for Your Lifestyle."
      />
      <Hero
        alt="Pic"
        image="/img/hero/KC-Site-HomepageHero-Overlay.jpg"
        imagePortrait="/img/hero/KC-HeroImage-Rendering-Portrait.jpg"
      >
          <h1 className="display_h1_alt text-white">STATUS UPDATES</h1>
          <h2 className="text-white">Stay in the know about our progress.</h2>
      </Hero>

      <Section anchor="overview" contrast="light">
        <div className="flex flex-row">
          <TextWrap>
            <div className="max-w-[700px]">
              {/* <h2 className="display_h2 here">HERE</h2>
              <div className="head_underline"></div> */}
              <h3 className="display_h3 max-w-[700px] mb-4">
                Stay in the know about&nbsp;our progress.
              </h3>

              <p className="text-base max-w-[580px]">
                As your homebuilder, our commitment is to deliver your new home
                built with the most upmost quality, standards and innovation, as
                well as to ensure it is thoughtfully integrated into the fabric
                of your new community. We know you're eager about the
                development of your home build. Stay informed on our progress
                and key project milestones at The Residences on Kennedy Circle
                here.
              </p>
            </div>
          </TextWrap>
        </div>
      </Section>

      <Section anchor="floorplans" contrast="white">
        <TextWrap>
          <h2 className="display_h2 here    text-left">
            Construction <br /> Progress
          </h2>
          <div className="head_underline"></div>

        </TextWrap>
        <div ref={ref} className="mt-20">
          <motion.div initial={{ x: "100vw" }} animate={{ x: 0 }}>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="max-w-[70%] mx-auto lg:w-1/3">
                <div className="row-span-1 overallP h-full p-2 ">
                  {/* <ProgressCirc
                    stroke={4}
                    key={23}
                    width="100%"
                    complete={0.75}
                  >
                    <Counter from={0} to={100.0} />
                  </ProgressCirc> */}

                  <ProgressCirc
                    stroke={4}
                    pkey="avg"
                    width="100%"
                    complete={average / 100}
                  >
                    {average}%<br/>
                   <span className="text-sm">Overall completion</span>
                  </ProgressCirc>
                </div>
              </div>

              <div className="progressGrid w-full lg:w-2/3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-2">
                {progress.data[0].attributes.construction_progress.map(
                  (milestone) => (
                    <div className="row-span-1 col-span-1  w-full h-full  ">
                      <div className="flex gap-4 w-full h-full items-center">
                        <ProgressCirc
                          stroke={10}
                          pkey={milestone.id}
                          width={100}
                          complete={milestone.percentage_complete / 100}
                        >
                          {milestone.percentage_complete}%
                        </ProgressCirc>

                        <div className="min-w-[100px]">
                          {milestone.milestone_title}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      <Section anchor="gallery" contrast="light">
      <h2 className="display_h2 here    text-left">
            Video Timeline
          </h2>
          <div className="head_underline"></div>
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
        
            {/* <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
              Learn from the experts on the cutting-edge of deception at the
              most sinister companies.
            </p> */}
          </div>
          <Tab.Group
            as="div"
            className="mt-14 grid  grid-cols-1 w-full items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 "
            vertical={tabOrientation === "vertical"}
            onChange={(index) => {
              function stopAllVideos() {
                const iframes = document.querySelectorAll("iframe[src*='youtube.com']");
                iframes.forEach((iframe) => {
                  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                });
              }
              console.log('Changed selected tab to:', index)
              stopAllVideos();

            }}
          >
           
            <Tab.Panels className="lg:grid-cols-1">
              {/* {progress.data[0].attributes.gallery_update.map((day) => ( */}
                  {progress.data[0].attributes.gallery_update.sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((day, dayIndex) => (
                <Tab.Panel
                  key={day.date}
                  className="grid grid-cols-1 overflow-hidden gap-x-8 gap-y-10 sm:gap-y-16 md:grid-cols-1 [&:not(:focus-visible)]:focus:outline-none"
                  unmount={false}
                >
                    <YouTubeFrame
                    id={day.youtube_video_id}
      thumbnailQuality="maxresdefault"
      video={day.youtube_video_id}
      width="640px"
      height="480px"
    />
                </Tab.Panel>
              ))}
            </Tab.Panels>
            <div className=" -mx-4   w-full flex overflow-x-hidden pb-4 sm:mx-0 sm:overflow-visible sm:pb-0">
              {/* <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" /> */}
              <Tab.List className="flex  whitespace-nowrap w-full overflow-x-scroll scroll-smooth ">
                {({ selectedIndex }) =>
                 progress.data[0].attributes.gallery_update.sort((a, b) => new Date(b.date) - new Date(a.date))
                 .map((day, dayIndex) => (
                    <div key={day.date} className="relative pb-4 lg:px-4">
                      {/* <DiamondIcon
                        className={clsx(
                          "absolute top-[0.5625rem] rounded-full left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
                          dayIndex === selectedIndex
                            ? "bg-gvhGold-400 "
                            : "fill-transparent bg-slate-400"
                        )}
                      /> */}
                      <div className="relative">
                        <div
                          className={clsx(
                            "font-mono text-sm",
                            dayIndex === selectedIndex
                              ? "text-gvhGold-400"
                              : " text-gvhBlue-400 opacity-70"
                          )}
                        >
                          <Tab className="text-left px-2 [&:not(:focus-visible)]:focus:outline-none">
                            {/* <span className="absolute inset-0" /> */}
                            {DateTime.fromISO(day.date).toFormat("yyyy")}
                       
                       <div className={clsx("mt-1.5 block  text-base   md:text-lg  lg:text-xl font-semibold tracking-tight  text-gvhBlue-400",
                          dayIndex === selectedIndex
                          ? "text-gvhGold-400"
                          : " text-gvhBlue-600 opacity-70 hover:opacity-90 transition-all ease-in-out"
                          )} >
                        <time
                          dateTime={day.date}
                          
                          
                        >
                          {DateTime.fromISO(day.date).toFormat("LLL d")}
                        </time>
                        </div>
                        </Tab>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Tab.List>
            </div>
          </Tab.Group>
        </Container>
   
      </Section>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://strapi-production-806f.up.railway.app/api/communities?filters[id][$eq]=2&populate=*`
  );

  const progress = await res.json();
  // const articles = JSON.parse(JSON.stringify(content))
  return {
    props: {
      progress,
    },
  };
};

// { articles }



// {progress.data[0].attributes.gallery_update.map((update) => (
//   <>
//     {update.id}
//     <br />
//     {update.title}
//     <br />
//     {/* {update.date} */}
//     {DateTime.fromISO(update.date).toFormat("yyyy")}
//     <br />
//     {DateTime.fromISO(update.date).toFormat("LLL d")}
//     <br />
//     {/* <Youtube
//       width="640px"
//       height="480px"
//       imgSize="maxresdefault"
//       videoId={update.youtube_video_id}
//     /> */}
//     <YouTubeFrame
//       thumbnailQuality="maxresdefault"
//       video={update.youtube_video_id}
//       width="640px"
//       height="480px"
//     />
//   </>
// ))}