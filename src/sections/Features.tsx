import Feature from "@/components/Feature";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturesHeaders from "./features/FeaturesHeaders";

export default function Features() {
  return (
    <section className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-16 text-[#0D1846] sm:px-16">
      <FeaturesHeaders data />
      <div className="space-y-20 overflow-hidden sm:overflow-visible">
        <Feature />
        <Feature reverse={true} />
        <Feature />
        <Feature reverse={true} />
      </div>
      <Button
        asChild
        className="w-full rounded-xl border border-[#0D1846] bg-[#0D1846] text-center text-white hover:bg-transparent hover:text-[#0D1846]"
      >
        <Link href={"/portfolio"} className="w-full underline">
          See More
        </Link>
      </Button>
    </section>
  );
}
