import { motion } from "framer-motion";
import React, { useEffect } from "react";

let val = 0.8;
export default function ProgressMe(props) {
  useEffect(() => {
    val = 0.2;
  }, []);

  return (
    <div className="example" whileInView={{ pathLength: 1, opacity: 0.5 }}>
      <motion.svg
        width="388"
        height="388"
        viewBox="0 0 388 388"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          initial={{ pathLength: 1, opacity: 0 }}
          animate={{ pathLength: props.complete }}
          // whileInView={{ pathLength: 1 }}
          //   strokeDasharray="0 1"
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
          cx="193.645"
          cy="193.645"
          r="192.645"
          stroke="#000"
          stroke-width="2"
        />
      </motion.svg>
    </div>
  );
}
