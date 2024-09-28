"use client";

import { upVariants } from "@/lib/variants";
import { motion } from "framer-motion";

export default function ServicesHeader() {
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
        Services We Offer You
      </motion.h2>
      <motion.p
        variants={upVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mx-auto font-light tracking-wide"
      >
        Kami menyediakan layanan perencanaan dan manajemen acara yang
        komprehensif untuk memastikan setiap detail berjalan dengan lancar.
        Dengan pengalaman bertahun-tahun, tim kami ahli dalam merancang acara
        yang tak terlupakan, mulai dari acara korporat hingga perayaan pribadi
        yang mewah.
      </motion.p>
    </>
  );
}
