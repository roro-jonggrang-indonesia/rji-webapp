"use client";

import { fadeVariants } from "@/lib/variants";
import { motion } from "framer-motion";

interface FactsHeadersProps {
  data: any;
}

export default function FactsHeader({ data }: FactsHeadersProps) {
  return (
    <>
      <motion.h1
        variants={fadeVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center text-2xl font-bold text-primary md:text-start"
      >
        {data.attributes.title}
      </motion.h1>
      <motion.p
        variants={fadeVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center text-muted-foreground md:text-start"
      >
        {data.attributes.description}
      </motion.p>
    </>
  );
}
