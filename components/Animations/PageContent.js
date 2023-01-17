import React, { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const TextReveal = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      staggerChildren: 0.03,
    },
  },
};

export function TextWrap(props) {
  const controls = useAnimation();
  // const [ref, inView] = useInView();
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);
  return (
    <motion.div
      // ref={ref}
      animate={controls}
      initial="hidden"
      whileInView="visible"
      variants={TextReveal}
    >
      {props.children}
    </motion.div>
  );
}

export function ProgressCirc(props) {
  const ProgressMap = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: props.complete,
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
      },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    console.log("from Pcircle,", inView);
    console.log(props.complete);

    if (inView) {
      controls.start({
        pathLength: props.complete,
        transition: {
          type: "spring",
          duration: 10,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      controls.start({ pathLength: 0 });
    }
  }, [controls, inView]);
  return (
    <div key={props.pkey} ref={ref} className="flex justify-center relative">
      <div className="absolute left-0 top-0 right-0 bottom-0 m-auto">
        <div className="flex flex-col percentageText justify-center items-center h-full">
          {props.children}
        </div>
      </div>
      <motion.svg
        viewBox="0 0 395 395"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="min-w-[100px]"
        width={props.width}
      >
        <circle
          cx="196.645"
          cy="197.645"
          r="191.645"
          stroke="#eee"
          stroke-width={props.stroke}
        ></circle>

        {/* <motion.circle
          animate={controls}
          // whileInView="visible"
          //   strokeDasharray="0 1"
          cx="193.645"
          cy="193.645"
          r="192.645"
          stroke="#000"
          stroke-width="2"
        >
          <text x="20" y="35" class="small">
            {props.children}
          </text>
          chris
        </motion.circle> */}

        {/* <text
          fill="black"
          font-family="Abel"
          font-size="103"
          letter-spacing="0em"
        >
          <tspan x="79.0835" y="228.755">
            {props.children}
          </tspan>
        </text> */}

        <motion.circle
          animate={controls}
          cx="196.645"
          cy="196.645"
          r="192.645"
          stroke="#C4AB7A"
          className="progressCirc"
          stroke-width={props.stroke}
        ></motion.circle>
      </motion.svg>
    </div>
  );
}

export const ImageReveal = {
  hidden: { scale: 0.8, opacity: 0, y: 120 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      staggerChildren: 0.03,
    },
  },
};

export function ImageWrap(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={TextReveal}
    >
      {props.children}
    </motion.div>
  );
}

export const ImageLoadIn = {
  hidden: { scale: 0.95, opacity: 0, y: 120 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      staggerChildren: 0.03,
    },
  },
};
