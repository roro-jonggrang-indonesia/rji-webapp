"use client";

import { fadeVariants } from "@/lib/variants";

import { motion } from "framer-motion";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

interface FeaturesHeadersProps {
  data: any;
}

export default function FeaturesHeaders({ data }: FeaturesHeadersProps) {
  return (
    <motion.h2
      variants={fadeVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`text-center text-2xl font-bold text-primary sm:text-start ${lexend.className} text-[#0D1846]`}
    >
      Event Unggulan
    </motion.h2>
  );
}
