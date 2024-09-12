import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Metadata } from "next";
import { Lexend } from "next/font/google";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const lexend = Lexend({ subsets: ["latin"] });

interface ServicePageProps {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: ServicePageProps): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`,
  );
  if (response.status === 404) {
    notFound();
  }
  const { data } = await response.json();

  return {
    title: data.attributes.title,
    description: data.attributes.content.slice(0, 160),
  };
}

export default async function Page({ params: { id } }: ServicePageProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}?populate=*`,
  );
  const { data } = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonials?populate=*`,
  );
  const { data: testimonials } = await response2.json();
  return (
    <main className="text-[#0D1846]">
      {/* header */}
      <section>
        <div className="absolute z-10 h-screen w-full bg-black/50" />
        <div className="relative h-screen object-fill md:object-cover">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.attributes.cover_image.data[0].attributes.url}`}
            alt=""
            sizes="100vw"
            width={+data.attributes.cover_image.data[0].attributes.width}
            height={+data.attributes.cover_image.data[0].attributes.height}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 mx-auto flex max-w-[1440px] flex-col items-center justify-center space-y-5 px-6 text-center md:px-16">
            <h1
              className={`max-w-72 text-4xl tracking-wider ${lexend.className} font-semibold text-white`}
            >
              {data.attributes.title}
            </h1>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full max-w-[1440px] space-y-7 px-6 py-10 pb-10 sm:px-16">
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
      <div className="max-w-[1440px] space-y-5 py-10">
        <h3 className={`${lexend.className} text-center text-2xl sm:hidden`}>
          Client Testimonial
        </h3>
        <Carousel className="mx-auto w-64 sm:w-[900px]">
          <CarouselContent className="">
            {testimonials.map((content: any, index: number) => (
              <OtherTestimonyItem content={content} key={content.id} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}

function OtherTestimonyItem({ content }: { content: any }) {
  return (
    <CarouselItem key={content.id}>
      <div className="sm:flex">
        <div className="mx-auto flex w-full flex-col items-center justify-center space-y-2 sm:w-1/3">
          <div className="h-full max-h-[125px] w-full max-w-[125px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${content.attributes.client_photo.data.attributes.url}`}
              alt=""
              sizes="100vw"
              width={
                +`${content.attributes.client_photo.data.attributes.width}`
              }
              height={
                +`${content.attributes.client_photo.data.attributes.height}`
              }
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <p className="font-semibold">{content.attributes.client_name}</p>
          <p>{content.attributes.client_occupation}</p>
        </div>
        <div className="flex flex-col items-start justify-center space-y-3 sm:w-2/3">
          <h3 className={`${lexend.className} hidden text-2xl sm:block`}>
            Client Testimonial
          </h3>
          <p className="text-justify">{content.attributes.testimoni}</p>
        </div>
      </div>
      <h4 className="text-lg font-semibold">{content.attributes.title}</h4>
    </CarouselItem>
  );
}
