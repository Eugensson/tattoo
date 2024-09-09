"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ModalVideo from "react-modal-video";

import { fadeIn } from "@/lib/variants";
import { interviewData } from "@/constants";

import "@/modalVideo.scss";

export const Interview = () => {
  const [isOpen, setOpen] = useState(false);
  const { title, btnText, btnIcon: Icon } = interviewData;

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-dark bg-interview bg-cover bg-no-repeat section lg:h-[812px]"
      id="interview"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <motion.h3
              variants={fadeIn("down")}
              className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8 "
            >
              {title}
            </motion.h3>
            <motion.div variants={fadeIn("down")}>
              <div
                onClick={() => setOpen(true)}
                className="flex items-center gap-x-5 cursor-pointer hover:opacity-80 transition text-white"
              >
                <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-1 lg:p-2">
                  <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                    <Icon size={40} className="pl-1" />
                  </div>
                </div>
                <span className="font-primary uppercase">{btnText}</span>
              </div>
            </motion.div>
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="_l1mqYQuNf8"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
