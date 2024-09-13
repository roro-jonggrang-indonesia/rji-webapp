import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Lexend } from "next/font/google";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import OtherWorks from "./OtherWorks";
import { notFound } from "next/navigation";

const lexend = Lexend({ subsets: ["latin"] });

interface PortofolioPageProps {
  params: { id: string };
}

export const revalidate = 60;

export const dynamicParams = false;

export async function generateStaticParams() {
  let { data: portfolios } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios`,
  ).then((res) => res.json());
  return portfolios.map((portfolio: any) => ({
    id: portfolio.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: PortofolioPageProps): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios/${id}?populate=*`,
  );
  const { data } = await response.json();

  if (response.status === 404) {
    notFound();
  }

  return {
    title: data.attributes.title,
    description: data.attributes.content.slice(0, 160),
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.cover_image.data[0].attributes.url}`,
        },
      ],
    },
  };
}

export default async function Page({ params: { id } }: PortofolioPageProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios/${id}?populate=*`,
  );

  if (response.status === 404) {
    notFound();
  }

  const { data } = await response.json();
  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 pb-10 text-[#0D1846] sm:px-16">
      {/* header */}
      <div className="min-h-[748px] w-full items-center justify-center space-y-7">
        <div className="flex w-full flex-wrap justify-center gap-3 pt-[144px]">
          {data.attributes.service_category.map((category: any) => (
            <Button
              key={category}
              disabled
              size="sm"
              className="rounded-full border border-black bg-transparent text-xs"
            >
              {category}
            </Button>
          ))}
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
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.cover_image.data[0].attributes.url}`}
            alt=""
            width={+`${data.attributes.cover_image.data[0].attributes.width}`}
            height={+`${data.attributes.cover_image.data[0].attributes.height}`}
            sizes="100vw"
            className="aspect-[1.83:1] w-full object-cover"
            priority
          />
        </div>
      </div>
      {/* Content */}
      <div className="w-full items-center justify-center space-y-7 py-10">
        <h2 className={`${lexend.className} text-2xl font-bold tracking-wide`}>
          Detail Event
        </h2>
        <iframe
          className="aspect-video w-full rounded-2xl"
          src={data.attributes.link_video}
        ></iframe>
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
        <OtherWorks id={id} />
      </div>
    </main>
  );
}
