import Blog from "@/components/Blog";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { ArrowRightCircle } from "lucide-react";
import BlogsHeaders from "./blogs/BlogsHeader";

const lexend = Lexend({ subsets: ["latin"] });

export default async function Blogs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page-artikel`,
  );
  const { data } = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles?populate=*`,
    { next: { revalidate: 10 } },
  );

  const { data: articles } = await response2.json();
  return (
    <section className="bg-[#0D1846] py-10 text-[#C0AF65]">
      <div className="mx-auto w-full max-w-[1440px] space-y-10 px-6 sm:px-16">
        <div className="mx-auto max-w-xl space-y-5 text-center">
          <BlogsHeaders data={data} />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-3">
          {articles
            .reverse()
            .slice(0, 3)
            .map((article: any) => (
              <Blog duration={1} key={article.id} article={article} />
            ))}
        </div>
        <Link
          href="/artikel"
          className="flex items-center justify-center text-center text-white hover:underline"
        >
          See more <ArrowRightCircle className="ml-3 size-5" />
        </Link>
      </div>
    </section>
  );
}
