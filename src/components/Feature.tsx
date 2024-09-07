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

const lexend = Lexend({ subsets: ["latin"] });

interface FeatureProps {
  reverse?: boolean;
}

export default function Feature({ reverse = false }: FeatureProps) {
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
              src={avatar}
              alt=""
              width={1000}
              height={1000}
              className="aspect-video w-full rounded-2xl object-cover"
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
              className="flex justify-center gap-2 sm:justify-start"
            >
              <Button
                disabled
                size="sm"
                className="shrink rounded-full border border-black bg-transparent text-xs text-foreground"
              >
                Communities
              </Button>
              <Button
                disabled
                size="sm"
                className="shrink rounded-full border border-black bg-transparent text-xs text-foreground"
              >
                Sports Competition
              </Button>
              <Button
                disabled
                size="sm"
                className="shrink rounded-full border border-black bg-transparent text-xs text-foreground"
              >
                Offline
              </Button>
            </motion.div>
            <motion.h2
              variants={upVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className={`text-3xl font-bold ${lexend.className}`}
            >
              Roro Jonggrang Marathon 2023
            </motion.h2>
            <motion.p
              variants={upVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="line-clamp-3 text-[#0D1846] sm:line-clamp-4 sm:text-lg"
            >
              Join thousands of athletes from across the globe in one of
              Indonesia&apos;s most prestigious marathon events. With categories
              for all ages and skill levels, this event promises a day full of
              excitement, fitness, and camaraderie. Whether you&apos;re running
              for fun or aiming for a personal best, this marathon is for you!
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
                Kementerian ABCD
              </motion.h3>
              <motion.p
                variants={upVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
              >
                Jakarta, Malang, Surabaya
              </motion.p>
              <motion.p
                variants={upVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                December 2020
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
              <Button className="rounded-xl border border-[#0D1846] bg-transparent text-[#0D1846] hover:bg-[#0D1846] hover:text-white">
                Selengkapnya
                <CircleArrowRight className="ml-3 size-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
