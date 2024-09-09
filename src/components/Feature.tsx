"use client";

import { Button } from "@/components/ui/button";
import Video from "next-video";
import videoContent from "/videos/videoplayback.mp4.json";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import avatar from "@/assets/Avatar.png";
import Image from "next/image";
import { Lexend } from "next/font/google";
import { CircleArrowRight } from "lucide-react";
import {
  fadeVariants,
  featureVariants,
  reverseFeatureVariants,
  upVariants,
} from "@/lib/variants";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"] });

interface FeatureProps {
  reverse?: boolean;
  content: any;
  restrictCategory?: boolean;
}

export default function Feature({
  reverse = false,
  content,
  restrictCategory = false,
}: FeatureProps) {
  return (
    <>
      <div
        className={cn(
          "space-y-5 sm:flex sm:gap-12 sm:space-y-0",
          reverse ? "sm:flex-row-reverse" : "sm:flex-row",
        )}
      >
        <motion.div
          variants={reverse ? reverseFeatureVariants : featureVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="space-y-2 sm:w-1/2"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${content.attributes.cover_image.data[0].attributes.url}`}
              alt=""
              sizes="100vw"
              width={
                +`${content.attributes.cover_image.data[0].attributes.width}`
              }
              height={
                +`${content.attributes.cover_image.data[0].attributes.height}`
              }
              className="aspect-[1.77/1] w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
        <div className="flex flex-col justify-between space-y-1.5 sm:w-1/2">
          {/* LABEL */}
          <div className="flex flex-col space-y-3">
            <motion.div
              variants={upVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex flex-wrap justify-center gap-2 sm:justify-start"
            >
              {restrictCategory
                ? content.attributes.service_category
                    .slice(0, 5)
                    .map((service: any) => (
                      <Button
                        key={service}
                        disabled
                        size="sm"
                        className="rounded-full border border-black bg-transparent text-xs"
                      >
                        {service}
                      </Button>
                    ))
                : content.attributes.service_category.map((service: any) => (
                    <Button
                      key={service}
                      disabled
                      size="sm"
                      className="rounded-full border border-black bg-transparent text-xs"
                    >
                      {service}
                    </Button>
                  ))}
            </motion.div>
            <motion.h2
              variants={upVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className={`text-3xl font-bold ${lexend.className}`}
            >
              {content.attributes.title}
            </motion.h2>
            <motion.hr
              variants={upVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-1/2 border border-[#0D1846] font-bold"
            />
            <motion.p
              variants={upVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="line-clamp-3 text-[#0D1846] sm:line-clamp-4 sm:text-lg"
            >
              {content.attributes.content}
            </motion.p>
          </div>
          <div className="flex items-end justify-end">
            <div className="flex flex-grow flex-col space-y-2.5">
              <motion.h3
                variants={upVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="text-xl font-semibold"
              >
                {content.attributes.company_name}
              </motion.h3>
              <motion.p
                variants={upVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
              >
                {content.attributes.location}
              </motion.p>
              <motion.p
                variants={upVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {content.attributes.event_date}
              </motion.p>
            </div>
            <motion.div
              variants={fadeVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="flex h-full items-end justify-end"
            >
              <Button
                asChild
                size="sm"
                className="rounded-xl border border-[#0D1846] bg-transparent text-[#0D1846] hover:bg-[#0D1846] hover:text-white"
              >
                <Link href={`/portofolio/${content.id}`}>
                  Selengkapnya
                  <CircleArrowRight className="ml-3 size-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
