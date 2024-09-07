import Blog from "@/components/Blog";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { ArrowRightCircle } from "lucide-react";
import BlogsHeaders from "./blogs/BlogsHeader";

const lexend = Lexend({ subsets: ["latin"] });

export default function Blogs() {
  return (
    <section className="bg-[#0D1846] py-10 text-[#C0AF65]">
      <div className="mx-auto w-full max-w-[1440px] space-y-10 px-6 sm:px-16">
        <div className="mx-auto max-w-xl space-y-5 text-center">
          <BlogsHeaders data />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-3">
          <Blog duration={1} />
          <Blog duration={1} />
          <Blog duration={1} />
        </div>

        <Link
          href="/artikel"
          className="flex items-center justify-center text-center hover:underline"
        >
          Explore more <ArrowRightCircle className="ml-3 size-5" />
        </Link>
      </div>
    </section>
  );
}
