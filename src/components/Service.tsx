"use client";

import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { motion } from "framer-motion";

interface ServiceProps {
  service: any;
}

export default function Service({ service }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeIn" }}
      className="text-center md:text-start"
    >
      <Card className="overflow-hidden rounded-2xl border-none shadow-xl">
        <CardHeader className="h-[180px] w-full p-0 sm:w-[320px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${service.attributes.cover_image.data[0].attributes.url}`}
            alt=""
            sizes="100vw"
            width={
              +`${service.attributes.cover_image.data[0].attributes.width}`
            }
            height={
              +`${service.attributes.cover_image.data[0].attributes.height}`
            }
            className="mx-auto h-full w-full object-cover"
          />
        </CardHeader>
        <CardDescription className="px-6 py-4">
          {service.attributes.title}
        </CardDescription>
      </Card>
    </motion.div>
  );
}
