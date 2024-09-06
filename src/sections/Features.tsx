import Feature from "@/components/Feature";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function Features() {
  return (
    <section className="w-full space-y-10 px-6 py-16 text-[#0D1846] sm:px-16">
      <h2
        className={`text-center text-2xl font-bold text-primary sm:text-start ${lexend.className} text-[#0D1846]`}
      >
        Event Unggulan
      </h2>
      <div className="space-y-20 overflow-hidden">
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
