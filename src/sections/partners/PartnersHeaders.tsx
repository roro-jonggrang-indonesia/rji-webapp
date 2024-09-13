"use client";

import { upVariants } from "@/lib/variants";
import { motion } from "framer-motion";

interface PartnersHeadersProps {
  data: any;
}

export default function PartnersHeaders({ data }: PartnersHeadersProps) {
  return (
    <>
      <motion.h2
        variants={upVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-3xl font-semibold"
      >
        {data.attributes.title}
      </motion.h2>
      <motion.p
        variants={upVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mx-auto max-w-3xl font-light"
      >
        {data.attributes.description}
      </motion.p>
    </>
  );
}
