"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { contactData } from "@/constants";

export const Contact = () => {
  const { title, info, form } = contactData;

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            <h2 className="h2 max-w-[490px]">{title}</h2>
            <ul className="flex flex-col xl:flex-row gap-x-5 gap-y-8 xl:gap-y-0">
              {info.map(
                (
                  {
                    title,
                    subtitle,
                    address: { icon: IconAdress, name },
                    phone: { icon: IconPhone, number },
                    email: { icon: IconEmail, address },
                    link,
                  },
                  index
                ) => (
                  <li key={index}>
                    <p className="font-primary uppercase font-medium text-xl mb-3">
                      {title}
                    </p>
                    <p className="mb-6 text-[#333333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </p>
                    <div className="flex-flex-col gap-y-3 mb-8">
                      <div className="flex items-center gap-[10px] font-medium">
                        <IconAdress />
                        {name}
                      </div>
                      <Link
                        href={`tel:${number}`}
                        className="flex items-center gap-[10px] font-medium"
                      >
                        <IconPhone />
                        {number}
                      </Link>
                      <Link
                        href={`mailto:${address}`}
                        className="flex items-center gap-[10px] font-medium"
                      >
                        <IconEmail />
                        {address}
                      </Link>
                      <Link
                        href="#"
                        className="font-medium border-b border-dark pb-1"
                      >
                        {link}
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex justify-center items-center xl:pl-10"
          >
            <form className="flex flex-col gap-y-10 w-full">
              <input
                type="text"
                placeholder={form.name}
                className="border-b border-dark placeholder:text-[#555555] italic tracking-[0.06em] outline-none pb-4"
              />
              <input
                type="text"
                placeholder={form.email}
                className="border-b border-dark placeholder:text-[#555555] italic tracking-[0.06em] outline-none pb-4"
              />
              <input
                type="text"
                placeholder={form.message}
                className="border-b border-dark placeholder:text-[#555555] italic tracking-[0.06em] outline-none pb-4"
              />
              <button type="submit" className="btn btn-sm btn-dark self-start">
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
