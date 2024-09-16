import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ServiceProps {
  data: any;
  reverse?: boolean;
}

export default async function Service({ data, reverse = false }: ServiceProps) {
  return (
    <div
      className={cn(
        "h-full items-center justify-between gap-5 space-y-10 py-10 sm:flex",
        {
          "flex-row": !reverse,
          "flex-row-reverse": reverse,
        },
      )}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.cover_image.data[0].attributes.url}`}
        alt=""
        sizes="100vw"
        width={+data.attributes.cover_image.data[0].attributes.width}
        height={+data.attributes.cover_image.data[0].attributes.height}
        className="mx-auto aspect-square w-full max-w-[600px] rounded-2xl sm:w-1/2"
      />
      <div className="mx-auto flex max-w-[455px] flex-col space-y-7 sm:w-1/2">
        <hr className="w-1/4 border-2 border-[#0D1846]" />
        <h3 className="text-3xl font-bold tracking-wider">
          {data.attributes.title}
        </h3>
        <div className="line-clamp-3 text-justify">
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
        <div className="flex items-start justify-start">
          <Button
            asChild
            className="w-full rounded-2xl border bg-[#0D1846] text-white hover:border-[#0D1846] hover:bg-transparent hover:text-[#0D1846] sm:w-fit"
          >
            <Link href={`/layanan/${data.id}`}>
              More <ArrowRightCircle className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
