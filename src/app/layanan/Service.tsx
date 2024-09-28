import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ServiceProps {
  data: any;
}

export default async function Service({ data }: ServiceProps) {
  return (
    <div className="h-full items-center justify-between gap-x-6 space-y-12 py-10 sm:flex sm:space-y-0">
      <div className="flex w-full items-center justify-center sm:w-1/6">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.cover_image.data[0].attributes.url}`}
          alt=""
          sizes="100vw"
          width={+data.attributes.cover_image.data[0].attributes.width}
          height={+data.attributes.cover_image.data[0].attributes.height}
          className="mx-auto aspect-[0.76/1] w-full rounded-2xl sm:aspect-square sm:max-w-[160px]"
        />
      </div>
      <div className="flex flex-col items-start justify-start space-y-5 sm:w-5/6">
        <hr className="w-1/4 border-2 border-[#0D1846]" />
        <h3 className="text-2xl font-bold tracking-wider sm:text-4xl">
          {data.attributes.title}
        </h3>
        <div className="space-y-5 text-justify">
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
            {data.attributes.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
