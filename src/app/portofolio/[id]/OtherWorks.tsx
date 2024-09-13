import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { Lexend } from "next/font/google";
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
import Link from "next/link";
import Image from "next/image";
const lexend = Lexend({ subsets: ["latin"] });

interface OtherWorksProps {
  id: string;
}

export default async function OtherWorks({ id }: OtherWorksProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios?populate=*`,
    { next: { revalidate: 1 } },
  );
  const { data } = await response.json();

  const filterData = data
    .filter((content: any) => content.id.toString() !== id.toString())
    .reverse();
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 text-[#0D1846] sm:px-16">
      <div className="mx-auto items-center justify-between sm:flex">
        <h3
          className={`${lexend.className} text-wide text-center text-3xl font-semibold sm:text-start`}
        >
          Other Works
        </h3>
        <Button
          asChild
          variant="outline"
          className="hidden rounded-full hover:border-[#0D1846] hover:bg-[#0D1846] hover:text-white sm:flex"
        >
          <Link href="/portofolio">
            See More
            <ArrowRightCircle className="ml-3 size-4 flex-shrink-0" />
          </Link>
        </Button>
      </div>
      <Carousel className="mx-auto w-64 sm:w-full">
        <CarouselContent>
          {filterData.map((content: any, index: number) => (
            <OtherWorksItem content={content} key={content.id} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex w-full justify-center">
        <Button
          asChild
          variant="outline"
          className="mx-auto rounded-full hover:border-[#0D1846] hover:bg-[#0D1846] hover:text-white sm:hidden"
        >
          <Link href="/portofolio">
            See More
            <ArrowRightCircle className="ml-3 size-4 flex-shrink-0" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function OtherWorksItem({ content }: { content: any }) {
  return (
    <CarouselItem key={content.id} className="py-5 sm:basis-1/4">
      <Card className="rounded-xl border border-[#F5F7FA] bg-white shadow-lg">
        <CardHeader className="p-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${content.attributes.cover_image.data[0].attributes.url}`}
            alt=""
            sizes="100vw"
            width={
              +`${content.attributes.cover_image.data[0].attributes.width}`
            }
            height={
              +`${content.attributes.cover_image.data[0].attributes.height}`
            }
            className="aspect-[1.3/1] h-full w-full rounded-t-2xl object-cover"
          />
        </CardHeader>
        <CardContent className="pt-5">
          <h4 className="text-lg font-semibold">{content.attributes.title}</h4>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            variant="outline"
            className="ml-auto rounded-full hover:border-[#0D1846] hover:bg-[#0D1846] hover:text-white"
          >
            <Link href={`/portofolio/${content.id}`}>
              See More
              <ArrowRightCircle className="ml-3 size-4 flex-shrink-0" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
