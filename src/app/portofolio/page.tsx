import { Metadata } from "next";
import Image from "next/image";
import avatar from "@/assets/Avatar.png";
import { Lexend } from "next/font/google";
import MenuTabs from "./MenuTabs";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Event Organizer (EO) Sport Terbaik Roro Jonggrang",
  description:
    "Roro Jonggrang Indonesia Event Organizer (EO) spesialis sport terbaik melayani beragam klien dari seluruh Indonesia, seperti SuperSoccer, PORAPPI, dan lainnya",
  keywords: [
    "Roro Jonggrang Indonesia EO Berpengalaman",
    "EO Sport",
    "EO Jakarta",
  ],
};

export default async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios?populate=*`,
  );
  const { data } = await response.json();

  const filterData = data.reverse();
  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 pb-10 text-[#0D1846] sm:px-16">
      <div className="min-h-[650px] w-full items-center justify-center space-y-5 py-10 sm:flex">
        <div className="max-w-2xl space-y-4 text-center sm:w-1/2 sm:text-start">
          <h1 className={`${lexend.className} text-xl font-bold sm:text-6xl`}>
            Discover Our Works!
          </h1>
          <p className="max-w-md">
            Jelajahi karya kami di Roro Jonggrang Indonesia, event organizer
            sport yang menghadirkan pengalaman tak terlupakan melalui
            perencanaan dan pelaksanaan acara yang kreatif dan inovatif.
          </p>
        </div>
        <div className="max-w-xl sm:w-1/2">
          <Image src={avatar} alt="" sizes="100vw" />
        </div>
      </div>
      <MenuTabs data={filterData} />
    </main>
  );
}
