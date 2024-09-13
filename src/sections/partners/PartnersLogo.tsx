"use client";

import { upVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";

interface PartnersHeadersProps {
  data: any;
}

export default function PartnersLogo({ data }: PartnersHeadersProps) {
  return (
    <motion.div
      variants={upVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Image
        key={data.id}
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.logo.data.attributes.url}`}
        alt=""
        sizes="100vw"
        width={120}
        height={100}
        className="mx-auto my-auto grayscale transition duration-500 ease-out hover:scale-105 hover:grayscale-0"
      />
    </motion.div>
  );
}
