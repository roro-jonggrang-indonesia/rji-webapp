import Blog from "@/components/Blog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const lexend = Lexend({ subsets: ["latin"] });
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface SearchResultsProps {
  query: string;
  data: any;
}

export default function SearchResult({ query, data }: SearchResultsProps) {
  if (query === undefined) query = "";
  const searchData = data
    .reverse()
    .filter((article: any) =>
      article.attributes.title.toLowerCase().includes(query.toLowerCase()),
    );

  const firstData = searchData[0] || {};
  const restData = searchData.slice(1) || [];
  return (
    <div className="w-full space-y-8 py-10">
      {firstData.attributes ? (
        <>
          <h1 className={`${lexend.className} text-2xl font-semibold`}>
            Latest Blog Posts
          </h1>
          <div className="justify-between sm:flex">
            <div className="max-w-lg sm:w-1/2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${firstData.attributes.cover_image.data.attributes.url}`}
                alt=""
                width={+firstData.attributes.cover_image.data.attributes.width}
                height={
                  +firstData.attributes.cover_image.data.attributes.height
                }
                sizes="100vw"
                className="aspect-square rounded-2xl object-cover"
              />
            </div>
            <div className="mx-auto flex max-w-lg flex-col justify-center space-y-5 sm:w-1/2">
              <div className="flex w-full items-center justify-between pt-10">
                <Button
                  asChild
                  className="flex h-7 items-center justify-center rounded-full bg-[#0D1846] text-white hover:bg-[#0D1846] hover:text-white"
                >
                  <p>{firstData.attributes.category}</p>
                </Button>
                <span className="text-sm">
                  {new Date(
                    firstData.attributes.publishedAt,
                  ).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className={`${lexend.className} text-2xl font-semibold`}>
                {firstData.attributes.title}
              </h2>
              <div className="line-clamp-4 text-justify">
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
                  {firstData.attributes.content}
                </ReactMarkdown>
              </div>
              <div className="ml-0 flex justify-start">
                <Button asChild variant="ghost" className="p-0">
                  <Link
                    href={`artikel/${firstData.id}`}
                    className="flex items-center font-semibold"
                  >
                    Baca Artikel <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-3">
            {restData.map((article: any) => (
              <Blog duration={1} key={article.id} article={article} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center">
          Belum ada artikel yang sesuai dengan{" "}
          <span className="font-semibold">{query}</span>
        </p>
      )}
    </div>
  );
}
