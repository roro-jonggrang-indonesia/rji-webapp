import Feature from "@/components/Feature";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturesHeaders from "./features/FeaturesHeaders";

export default async function Features() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios?populate=*`,
  );
  const { data } = await response.json();

  const filterData = data
    .filter((content: any) => content.attributes.is_featured)
    .reverse();

  return (
    <section className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-16 text-[#0D1846] sm:px-16">
      <FeaturesHeaders />
      <div className="sm:overflow-visible">
        {filterData.map((content: any, idx: number) =>
          idx % 2 == 1 ? (
            <div
              key={content.id}
              className="relative left-1/2 right-1/2 -ml-[50vw] w-screen bg-[#F5F7FA]"
            >
              <div className="mx-auto w-full max-w-[1440px] space-y-10 overflow-hidden px-6 py-6 text-[#0D1846] sm:px-16 sm:py-16">
                <Feature content={content} reverse={true} />
              </div>
            </div>
          ) : (
            <div
              key={content.id}
              className="relative left-1/2 right-1/2 -ml-[50vw] w-screen"
            >
              <div className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-6 text-[#0D1846] sm:px-16 sm:py-16">
                <Feature content={content} />
              </div>
            </div>
          ),
        )}
      </div>
      <Button
        asChild
        className="w-full rounded-xl border border-[#0D1846] bg-[#0D1846] text-center text-white hover:bg-transparent hover:text-[#0D1846]"
      >
        <Link href={"/portofolio"} className="w-full underline">
          See More
        </Link>
      </Button>
    </section>
  );
}
