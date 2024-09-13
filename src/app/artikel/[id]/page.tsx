import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Lexend } from "next/font/google";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import OtherBlogs from "./OtherBlogs";
import { notFound } from "next/navigation";

const lexend = Lexend({ subsets: ["latin"] });

interface ArticlePageProps {
  params: { id: string };
}

export const revalidate = 60;

export const dynamicParams = false;

export async function generateStaticParams() {
  let { data: articles } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`,
  ).then((res) => res.json());
  return articles.map((article: any) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: ArticlePageProps): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}?populate=*`,
  );
  if (response.status === 404) {
    notFound();
  }
  const { data } = await response.json();

  return {
    title: data.attributes.title,
    description: data.attributes.content.slice(0, 160),
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.cover_image.data.attributes.url}`,
        },
      ],
    },
  };
}

export default async function Page({ params: { id } }: ArticlePageProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}?populate=*`,
  );

  if (response.status === 404) {
    notFound();
  }
  const { data } = await response.json();
  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 pb-10 text-[#0D1846] sm:px-16">
      {/* header */}
      <div className="w-full items-center justify-center space-y-7 sm:min-h-[748px]">
        <div className="flex w-full flex-wrap justify-center gap-3 pt-[144px]">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border border-black bg-[#0D1846] text-xs text-white hover:bg-[#0D1846] hover:text-white"
          >
            <p>{data.attributes.category}</p>
          </Button>
        </div>
        <h1
          className={`${lexend.className} text-center text-4xl font-semibold`}
        >
          {data.attributes.title}
        </h1>
        <div className="w-full text-center">
          <p className="font-medium">{data.attributes.company_name}</p>
          <p className="font-light">{data.attributes.event_date}</p>
          <p className="font-light">{data.attributes.location}</p>
        </div>
        <div className="relative left-1/2 right-1/2 -ml-[50vw] w-screen">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.cover_image.data.attributes.url}`}
            alt=""
            width={+`${data.attributes.cover_image.data.attributes.width}`}
            height={+`${data.attributes.cover_image.data.attributes.height}`}
            sizes="100vw"
            className="aspect-[1.83:1] w-full object-cover"
            priority
          />
        </div>
      </div>
      {/* Content */}
      <div className="w-full items-center justify-center space-y-7 py-10">
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
            p: (props: any) => <p className="text-justify">{props.children}</p>,
          }}
        >
          {data.attributes.content}
        </ReactMarkdown>
      </div>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] w-screen space-y-5 bg-[#F5F7FA] py-16">
        <OtherBlogs id={id} />
      </div>
    </main>
  );
}
