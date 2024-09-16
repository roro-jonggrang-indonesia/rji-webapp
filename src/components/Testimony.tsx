"use client";
import Image from "next/image";
import woman from "@/assets/woman.png";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonyProps {
  duration: number;
  className?: string;
  testimony: any;
}

export default function Testimony({
  duration,
  className = "",
  testimony,
}: TestimonyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, ease: "easeIn" }}
      className="text-center md:text-start"
    >
      <Card className="space-y-3 overflow-hidden rounded-3xl border border-[#D4D2E3] text-[#0D1846] shadow-md">
        <CardHeader className={cn("overflow-hidden p-0", className)}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimony.attributes.client_photo.data.attributes.url}`}
            width={
              +`${testimony.attributes.client_photo.data.attributes.width}`
            }
            height={
              +`${testimony.attributes.client_photo.data.attributes.height}`
            }
            alt=""
            sizes="100vw"
            className="-m-10 mx-auto size-96 w-full object-cover"
          />
        </CardHeader>
        <CardContent className="space-y-5 p-10">
          <p className="font-semibold">{testimony.attributes.client_company}</p>
          <p>&quot;{testimony.attributes.testimoni}&quot;</p>
          <div>
            <h3 className="font-bold">{testimony.attributes.client_name}</h3>
            <p>{testimony.attributes.client_occupation}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
