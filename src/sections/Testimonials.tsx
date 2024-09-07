import Testimony from "@/components/Testimony";
import Image from "next/image";
import TestimonialsHeaders from "./testimonials/TestimonialsHeaders";

export default function Testimonials() {
  return (
    <section className="bg-white py-10 text-[#0D1846]">
      <div className="mx-auto w-full max-w-[1440px] space-y-10 px-6 sm:px-16">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <TestimonialsHeaders data />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-3">
          <Testimony duration={1} className="bg-[#008080]" />
          <Testimony duration={1} className="bg-[#0D1846]" />
          <Testimony duration={1} className="bg-[#CFC28A]" />
        </div>
      </div>
    </section>
  );
}
