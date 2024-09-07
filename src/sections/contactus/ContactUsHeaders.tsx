"use client";

import { fadeVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactUsHeadersProps {
  data: any;
}

export default function ContactUsHeaders({ data }: ContactUsHeadersProps) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="mx-auto w-full space-y-5 text-center sm:text-start"
    >
      <h1 className="font-semibold">HUBUNGI KAMI</h1>
      <h3 className="text-3xl font-bold">
        Wujudkan Konsep Acara Terbaik Anda Sekarang!
      </h3>
      <p className="max-w-xl">
        Tim RJI siap untuk melayani berbagai kebutuhan acara terbaik Anda.
        Hubungi kami sekarang dan wujudkan acara Anda yang tak terlupakan!
      </p>
      <p className="flex items-center justify-center gap-2 sm:justify-start">
        <Mail className="size-4" /> contact@company.com
      </p>
      <p className="flex items-center justify-center gap-2 sm:justify-start">
        <Phone className="size-4" /> 123 456 789
      </p>
      <p className="flex items-center justify-center gap-2 sm:justify-start">
        <MapPin className="size-4" /> 789 Mcallister St San Fransisco 94102
      </p>
    </motion.div>
  );
}
