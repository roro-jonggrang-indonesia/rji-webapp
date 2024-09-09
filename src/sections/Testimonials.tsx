import Testimony from "@/components/Testimony";
import Image from "next/image";
import TestimonialsHeaders from "./testimonials/TestimonialsHeaders";

const bgColor: string[] = ["bg-[#008080]", "bg-[#0D1846]", "bg-[#CFC28A]"];

export default async function Testimonials() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page-testimoni`,
  );
  const { data } = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonials?populate=*`,
  );
  const { data: testimonials } = await response2.json();
  return (
    <section className="bg-white py-10 text-[#0D1846]">
      <div className="mx-auto w-full max-w-[1440px] space-y-10 px-6 sm:px-16">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <TestimonialsHeaders data={data} />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-3">
          {testimonials.map((testimony: any, idx: number) => (
            <Testimony
              key={testimony.id}
              duration={1}
              className={`${bgColor[idx % bgColor.length]}`}
              testimony={testimony}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
