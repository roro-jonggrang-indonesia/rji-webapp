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
  article: any;
}

export default function Blog({ duration, article }: BlogProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, ease: "easeIn" }}
      className="text-center md:text-start"
    >
      <Card className="space-y-3 rounded-3xl bg-white text-[#0D1846] shadow-md">
        <CardHeader className="space-y-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex h-7 w-28 items-center justify-center rounded-full bg-[#0D1846] text-white md:w-24">
              {article.attributes.category}
            </div>
            <span className="text-sm">
              {new Date(article.attributes.publishedAt).toLocaleDateString(
                "id-ID",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </span>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.cover_image.data.attributes.url}`}
            alt=""
            sizes="100vw"
            width={+`${article.attributes.cover_image.data.attributes.width}`}
            height={+`${article.attributes.cover_image.data.attributes.height}`}
            className="-m-10 mx-auto size-48 w-full rounded-xl object-cover"
          />
        </CardHeader>
        <CardContent className="space-y-5 text-start">
          <h3 className="text-lg font-bold">{article.attributes.title}</h3>
          <p className="line-clamp-3 leading-7">
            &quot;{article.attributes.content}&quot;
          </p>
        </CardContent>
        <CardFooter className="text-start">
          <Link
            href={`article/${article.id}`}
            className="flex items-center font-bold hover:underline"
          >
            Baca Artikel <ArrowRight className="size-5" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
