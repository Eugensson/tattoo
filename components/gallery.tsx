"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";

import { fadeIn } from "@/lib/variants";
import { galleryData } from "@/constants";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const { title, btnText, btnIcon: Icon, images } = galleryData;

  return (
    <section
      className="section relative mt-10 lg:mt-0 bg-[#f9f9f9]"
      id="gallery"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <RowsPhotoAlbum
          photos={images}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
          index={index}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.9)" } }}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button type="button" className="btn btn-lg btn-dark">
          {btnText}
          <Icon size={20} />
        </button>
      </motion.div>
    </section>
  );
};
