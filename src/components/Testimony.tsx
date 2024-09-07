"use client";
import Image from "next/image";
import woman from "@/assets/woman.png";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonyProps {
  duration: number;
  className?: string;
}

export default function Testimony({
  duration,
  className = "",
}: TestimonyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, ease: "easeIn" }}
      className="text-center md:text-start"
    >
      <Card className="space-y-3 overflow-hidden rounded-3xl text-[#0D1846] shadow-md">
        <CardHeader className={cn("overflow-hidden", className)}>
          <Image
            src={woman}
            alt=""
            width={500}
            height={500}
            className="-m-10 mx-auto size-96 w-full object-cover"
          />
        </CardHeader>
        <CardContent className="space-y-5 p-10">
          <p className="font-semibold">Peruri, 2021</p>
          <p>
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia fugit, in repellat nisi voluptates earum!&quot;
          </p>
          <div>
            <h3 className="font-bold">John Doe</h3>
            <p>Head of Marketing at Facebook</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
