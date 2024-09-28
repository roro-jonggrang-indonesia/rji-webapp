import { Lexend } from "next/font/google";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"] });

export default async function Hero() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page-hero-section`,
  );
  const { data } = await response.json();

  return (
    <section>
      <div className="absolute z-10 h-screen w-full bg-black/60" />
      <div className="relative h-screen object-fill md:object-cover">
        <video
          src={"/videoSementara.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-20 mx-auto flex max-w-[1440px] flex-col items-center justify-center space-y-5 px-6 py-24 text-center sm:justify-end md:items-start md:px-16 md:text-start">
          <h1
            className={`max-w-72 text-4xl tracking-wider ${lexend.className} font-semibold text-[#C0AF65]`}
          >
            {data.attributes.tagline}
          </h1>
          <p className="w-full max-w-5xl text-lg tracking-wider text-white sm:text-xl">
            {data.attributes.description}
          </p>
          <Button
            asChild
            className="rounded-2xl bg-[#C0AF65] font-semibold text-[#0D1846]"
          >
            <Link href="/portofolio">
              Lihat Portofolio <CircleArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
