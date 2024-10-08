import { Metadata } from "next";
import Image from "next/image";
import TentangKami from "@/assets/tentang-kami.webp";
import { Lexend } from "next/font/google";
import owner from "@/assets/owner.webp";
import { cn } from "@/lib/utils";
import image1 from "@/assets/tentang-kami-1.webp";
import image2 from "@/assets/tentang-kami-2.webp";
import image3 from "@/assets/tentang-kami-3.webp";
import image4 from "@/assets/tentang-kami-4.webp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tentang Event Organizer (EO) Sports Terbaik",
  description:
    "Roro Jonggrang Indonesia (RJI) oleh PT Mahakarya Insan Persada adalah Event Organizer (EO) & planner Jakarta spesialis sport terbaik dan profesional | We Create, You Celebrate",
  keywords: [
    "Roro Jonggrang Indonesia",
    "PT Mahakarya Insan Persada EO Jakarta",
    "EO Sport",
  ],
};

const bgColor: string[] = ["bg-[#008080]", "bg-[#0D1846]", "bg-[#CFC28A]"];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-16 text-[#0D1846] sm:px-16">
      <div className="space-y-5 py-16">
        <div className="space-y-2">
          <p className="text-center">Tentang Kami</p>
          <h1 className={`${lexend.className} text-center text-3xl font-bold`}>
            Roro Jonggrang Indonesia
          </h1>
        </div>
        <Image
          src={TentangKami}
          alt=""
          sizes="100vw"
          priority
          className="mx-auto aspect-square w-full rounded-2xl object-cover sm:aspect-[2.1/1] sm:object-cover"
        />
        <ParagraphSection />
        <CommitmentSection />
        <TeamMemberSection />
        <SnapshootSection />
      </div>
    </main>
  );
}

async function TeamMemberSection() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/about-us-team-members?populate=*`,
  );

  const { data } = await response.json();
  return (
    <div className="space-y-10 py-16">
      <div className="mx-auto space-y-5">
        <h2
          className={`${lexend.className} text-center text-2xl font-semibold`}
        >
          Meet Our Team Members
        </h2>
        <p className="text-center">
          Tim RJI terdiri dari para profesional berpengalaman yang menguasai
          berbagai aspek manajemen acara. Mulai dari perencanaan hingga eksekusi
          di lapangan, kami memastikan setiap detail acara terorganisir dengan
          sempurna, menjamin hasil akhir yang memenuhi standar tinggi kami dan
          ekspektasi klien. Dengan layanan yang mencakup setiap tahapan acara,
          kami memberikan perhatian penuh terhadap kualitas dan kepuasan
          pelanggan.
        </p>
      </div>
      <Carousel className="mx-auto w-64 sm:w-full">
        <CarouselContent className="">
          {data.map((teamMember: any, idx: number) => (
            <CarouselItem key={teamMember.id} className="py-5 sm:basis-1/3">
              <TeamMember
                className={`${bgColor[idx % bgColor.length]}`}
                teamMember={teamMember}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

interface TeamMemberProps {
  className?: string;
  teamMember: any;
}

function TeamMember({ className = "", teamMember }: TeamMemberProps) {
  return (
    <div className="mx-auto flex max-w-72 flex-col items-center space-y-3">
      <div className={cn("max-w-[300px] rounded-full", className)}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${teamMember.attributes.image.data.attributes.url}`}
          width={+`${teamMember.attributes.image.data.attributes.width}`}
          height={+`${teamMember.attributes.image.data.attributes.height}`}
          alt=""
          sizes="100vw"
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <h3 className={`${lexend.className} text-center text-lg font-semibold`}>
        {teamMember.attributes.nama}
      </h3>
      <p className="text-center">{teamMember.attributes.occupation}</p>
    </div>
  );
}

function SnapshootSection() {
  return (
    <div className="space-y-10">
      <h2 className={`${lexend.className} text-center text-2xl font-semibold`}>
        Our Snapshoot
      </h2>
      <p className="mx-auto max-w-xl text-center">
        Intip momen-momen terbaik dari acara yang telah kami selenggarakan yang
        menampilkan kreativitas, profesionalisme, dan dedikasi kami dalam setiap
        detail untuk menciptakan pengalaman yang tak terlupakan.
      </p>
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 place-content-center gap-5 sm:grid-cols-3">
        <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-red-400 sm:col-span-2">
          <Image
            src={image1}
            alt=""
            sizes="100vw"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-blue-400">
          <Image
            src={image2}
            alt=""
            sizes="100vw"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-green-400">
          <Image
            src={image3}
            alt=""
            sizes="100vw"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-yellow-400 sm:col-span-2">
          <Image
            src={image4}
            alt=""
            sizes="100vw"
            className="absolute h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function CommitmentSection() {
  return (
    <div className="space-y-5 py-16">
      <h2 className={`${lexend.className} text-center text-2xl font-semibold`}>
        Our Commitment to the World of Sports
      </h2>
      <div className="gap-10 overflow-hidden rounded-2xl bg-[#F5F7FA] shadow-md sm:flex">
        <Image
          src={owner}
          alt=""
          sizes="100vw"
          className="aspect-square object-cover sm:aspect-[0.8/1] sm:w-2/5"
        />
        <div className="flex flex-col justify-center space-y-5 px-6 py-6 text-justify sm:w-3/5 sm:px-16">
          <h3 className={`${lexend.className} text-3xl font-semibold`}>
            “Bringing Dreams to Life in Sports”
          </h3>
          <p>
            Joko Pramuji, atau yang akrab disapa Jokes, lahir pada 28 Oktober
            1979 dan telah menekuni dunia event organizer sejak masa kuliahnya
            di Universitas Nasional, jurusan Ekonomi. Berbekal pengalaman dan
            passion yang kuat, Jokes terus konsisten mengembangkan karir di
            industri ini hingga menjadi salah satu figur sentral dalam
            penyelenggaraan berbagai event olahraga berskala nasional.
          </p>
          <p>
            Dengan pengalaman yang luas serta jaringan yang kuat di dunia
            olahraga, Jokes tidak hanya dikenal karena profesionalismenya,
            tetapi juga karena kemampuannya membangun hubungan yang baik di
            industri ini. Di bawah kepemimpinannya, Roro Jonggrang Indonesia
            terus berinovasi dan berkembang menjadi EO yang unggul dan
            terpercaya.
          </p>
          <div className="text-start">
            <p>Best Regards,</p>
            <p className="font-semibold">Joko Pramuji</p>
            <p>Chief of Roro Jonggrang Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParagraphSection() {
  return (
    <div className="space-y-7 text-justify">
      <p>
        Roro Jonggrang Indonesia (RJI) adalah Event Organizer (EO) profesional
        yang berbasis di Jakarta, beroperasi di bawah PT Mahakarya Insan
        Persada. Sebagai EO spesialis event olahraga, RJI memiliki jaringan luas
        yang mencakup tim dan vendor terpercaya di seluruh Indonesia, dari
        Sumatera hingga Papua, siap mendukung kesuksesan setiap acara di
        berbagai wilayah.
      </p>
      <p>
        Sejak berdiri pada tahun 2009, RJI telah menangani berbagai event
        berskala regional dan internasional dengan sukses. Fokus utama kami
        meliputi penyelenggaraan kompetisi olahraga, corporate gathering,
        product launching, dan MICE (Meetings, Incentives, Conferences,
        Exhibitions). Kami menawarkan fleksibilitas dalam format acara, mulai
        dari penyelenggaraan secara on-site, hybrid, hingga virtual atau live
        streaming, yang memungkinkan kami memenuhi kebutuhan beragam klien kami.
      </p>
      <p>
        Kami juga memanfaatkan teknologi canggih dalam pengelolaan acara,
        seperti pengembangan website khusus event, layanan pendaftaran online,
        pengelolaan media sosial acara, serta layanan live skor dan statistik
        real-time untuk kompetisi olahraga. Teknologi ini membantu meningkatkan
        keterlibatan peserta dan penonton, serta memastikan pengelolaan event
        berjalan dengan efisien dan lancar.
      </p>
      <p>
        Sebagai partner andal, Roro Jonggrang Indonesia berkomitmen untuk terus
        berkembang dan berinovasi dalam menghadirkan konsep acara yang kreatif,
        solutif, dan berkelas. Kami memahami bahwa setiap acara adalah
        kesempatan unik untuk menciptakan momen berkesan, dan kami siap untuk
        mewujudkan kebutuhan Anda dengan fleksibilitas anggaran yang
        disesuaikan.
      </p>
    </div>
  );
}
