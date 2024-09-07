"use client";

import { upVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

interface TestimonialsHeadersProps {
  data: any;
}

export default function TestimonialsHeaders({
  data,
}: TestimonialsHeadersProps) {
  return (
    <>
      <motion.h1
        variants={upVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`${lexend.className} text-3xl font-bold text-primary`}
      >
        Kata Mereka Tentang Roro Jonggrang Indonesia
      </motion.h1>
      <motion.p
        variants={upVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="leading-7 text-muted-foreground"
      >
        Kepercayaan dan kepuasan klien menjadi prioritas utama kami sebagai
        Event Organizer (EO) Sport terbaik dalam menyajikan berbagai pengalaman
        yang tak terlupakan.
      </motion.p>
    </>
  );
}
