import { Metadata } from "next";
import { Lexend } from "next/font/google";
import Image from "next/image";
import avatar from "@/assets/artikel-image.png";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artikel Event Organizer (EO) Sports Terbaik",
  description:
    "Roro Jonggrang Indonesia Event Organizer (EO) memberikan informasi lengkap, terbaik & profesional untuk seluruh klien terkait kebutuhan acara sport & korporat",
  keywords: ["Event Organizer (EO)", "EO Sport", "EO Jakarta", "EO Event"],
};
interface PageProps {
  searchParams: { q: string };
}

export default async function Page({ searchParams: { q } }: PageProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles?populate=*`,
  );
  const { data } = await response.json();

  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-16 text-[#0D1846] sm:px-16">
      <div className="min-h-[650px] w-full items-center justify-center space-y-16 py-10">
        <div className="flex w-full flex-col items-center justify-center space-y-10 pt-16 text-center sm:pt-0">
          <h1
            className={`${lexend.className} max-w-xl text-4xl font-bold sm:text-6xl`}
          >
            Welcome to Our Blogs
          </h1>
          <p className="max-w-md">
            Selamat datang di blog kami! Temukan berbagai informasi menarik
            seputar dunia event olahraga, inspirasi, dan tips menarik dari tim
            Roro Jonggrang Indonesia!
          </p>
        </div>
        <Image
          src={avatar}
          alt=""
          sizes="100vw"
          className="w-full object-cover"
          priority
        />
      </div>
      <SearchField />
      <SearchResult query={q} data={data} />
    </main>
  );
}
