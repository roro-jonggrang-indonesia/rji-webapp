"use client";
import Image from "next/image";
import home from "@/assets/home.png";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            <Button
              asChild
              className="flex h-7 items-center justify-center rounded-full bg-[#0D1846] text-white hover:bg-[#0D1846] hover:text-white"
            >
              <p>{article.attributes.category}</p>
            </Button>
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
        <CardContent className="min-h-48 space-y-5 text-start">
          <h3 className="text-lg font-bold">{article.attributes.title}</h3>
          <div className="line-clamp-3 leading-7">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: (props: any) => (
                  <Image
                    src={props.src}
                    alt={props.alt}
                    sizes="100vw"
                    width={1000}
                    height={1000}
                    className="w-full rounded-2xl"
                  />
                ),
                p: (props: any) => (
                  <p className="text-justify">{props.children}</p>
                ),
              }}
            >
              {article.attributes.content}
            </ReactMarkdown>
          </div>
        </CardContent>
        <CardFooter className="text-start">
          <Link
            href={`artikel/${article.id}`}
            className="flex items-center font-bold hover:underline"
          >
            Baca Artikel <ArrowRight className="size-5" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
