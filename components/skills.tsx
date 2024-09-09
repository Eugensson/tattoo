"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar } from "react-circular-progressbar";

import { fadeIn } from "@/lib/variants";

import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColor, temporary]);

  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className="section font-primary"
    >
      <div className="container mx-auto">
        <ul className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <li className="w-[150px] h-[150px] lg:w-[275px] lg:h-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />
            <p className="uppercase font-light tracking-[1.2px] text-center">
              Full Body Tattoo
            </p>
          </li>
          <li className="w-[150px] h-[150px] lg:w-[275px] lg:h-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}
            />
            <p className="uppercase font-light tracking-[1.2px] text-center">
              Safely Piercing
            </p>
          </li>
          <li className="w-[150px] h-[150px] lg:w-[275px] lg:h-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullColor}
              styles={styles}
              text={`${fullColor}%`}
            />
            <p className="uppercase font-light tracking-[1.2px] text-center">
              Full Color Tattoo
            </p>
          </li>
          <li className="w-[150px] h-[150px] lg:w-[275px] lg:h-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={temporary}
              styles={styles}
              text={`${temporary}%`}
            />
            <p className="uppercase font-light tracking-[1.2px] text-center">
              Temporary Tattoo
            </p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};
