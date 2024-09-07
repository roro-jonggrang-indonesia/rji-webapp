"use client";
import Image from "next/image";
import home from "@/assets/home.png";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogProps {
  duration: number;
}

export default function Blog({ duration }: BlogProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, ease: "easeIn" }}
      className="text-center md:text-start"
    >
      <Card className="space-y-3 rounded-3xl bg-white text-[#0D1846] shadow-md">
        <CardHeader className="overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex h-7 w-28 items-center justify-center rounded-full bg-[#0D1846] text-white md:w-24">
              Events
            </div>
            <span className="text-sm">September, 12th 2023</span>
          </div>
          <Image
            src={home}
            alt=""
            width={100}
            height={100}
            className="-m-10 mx-auto size-48 w-full object-cover"
          />
        </CardHeader>
        <CardContent className="space-y-5 text-start">
          <h3 className="font-bold">How to Manage an Event International</h3>
          <p className="leading-7">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia fugit, in repellat nisi voluptates earum!&quot;
          </p>
        </CardContent>
        <CardFooter className="text-start">
          <Link href={"/"} className="flex items-center hover:underline">
            Baca Artikel <ArrowRight className="size-5" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
