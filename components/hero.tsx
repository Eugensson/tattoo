"use client";

import { motion } from "framer-motion";

import { heroData } from "@/constants";
import { fadeIn } from "@/lib/variants";

const heroContainerVariant = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

export const Hero = () => {
  const { title, subtitle, btnText, btnIcon: Icon } = heroData;

  return (
    <section className="overflow-hidden bg-hero bg-cover bg-center bg-no-repeat min-h-[40vh] lg:h-[948px] relative mt-[120px] lg:mt-[150px]">
      <motion.div
        variants={heroContainerVariant}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto w-full min-h-[40vh] lg:h-full flex justify-center xl:justify-end items-center"
      >
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          <motion.h1 variants={fadeIn("down")} className="h1">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("down")}
            className="mb-8 lg:mb-16 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down")}>
            <button
              type="button"
              className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0"
            >
              {btnText}
              <Icon size={20} />
            </button>
          </motion.div>
        </div>

        <div className="hidden xl:flex absolute -bottom-2 right-2 left-0 before:content-outlineText" />
      </motion.div>
    </section>
  );
};
