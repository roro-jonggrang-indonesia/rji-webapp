import avatar from "@/assets/Avatar.png";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import { Metadata } from "next";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Service from "./Service";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layanan Event Organizer (EO) Sport Korporat Terbaik",
  description:
    "Roro Jonggrang Event Organizer (EO) acara sport (plan, venue, tiket, atlet, logistik, streaming) korporat (seminar, brand, exhibition, katering) virtual VIP",
  keywords: ["EO Sport", "EO Korporat", "EO Jakarta"],
};

export default async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services?populate=*`,
    { next: { revalidate: 1 } },
  );
  const { data } = await response.json();

  const filterData = data.reverse();
  return (
    <main>
      {/* header */}
      <section>
        <div className="absolute z-10 h-screen w-full bg-black/50" />
        <div className="relative h-screen object-fill md:object-cover">
          <Image
            src={avatar}
            alt=""
            sizes="100vw"
            width={1440}
            height={810}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 mx-auto flex max-w-[1440px] flex-col items-center justify-center space-y-5 px-6 text-center md:px-16">
            <h1
              className={`max-w-72 text-4xl tracking-wider ${lexend.className} font-semibold text-white`}
            >
              Our Services
            </h1>
            <p className="w-full max-w-5xl text-lg font-light tracking-wider text-white">
              Kami menyediakan layanan perencanaan dan manajemen acara yang
              komprehensif untuk memastikan setiap detail berjalan dengan
              lancar. Dengan pengalaman bertahun-tahun, tim kami ahli dalam
              merancang acara yang tak terlupakan, mulai dari acara korporat
              hingga perayaan pribadi yang mewah.
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 pb-10 pt-16 text-[#0D1846] sm:px-16">
        {/* blog */}
        {filterData.map((data: any, idx: number) => (
          <Service key={idx} data={data} reverse={idx % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
