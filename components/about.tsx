"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { aboutData } from "@/constants";

export const About = () => {
  const { title, subtitle1, subtitle2, btnText, btnIcon: Icon } = aboutData;

  return (
    <section className="lg:py-16 xl:pb-[160px]" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-x-[70px]">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg-flex-row flex-1"
          >
            <div className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
              01
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-48"
          >
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
                <button type="button" className="btn btn-lg btn-link">
                  <span className="text-xl">{btnText}</span>
                  <Icon />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
