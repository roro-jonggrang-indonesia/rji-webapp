"use client";

import { upVariants } from "@/lib/variants";
import { motion } from "framer-motion";

interface BlogsHeadersProps {
  data: any;
}

export default function BlogsHeaders({ data }: BlogsHeadersProps) {
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
        Artikel Terbaru
      </motion.h2>
      <motion.p
        variants={upVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mx-auto max-w-3xl font-light"
      >
        Dapatkan berita terbaru dan informasi menarik tentang Roro Jonggrang
        Indonesia (RJI) EO seputar manajemen acara, tips & trik, dan sebagainya.
      </motion.p>
    </>
  );
}
