import Service from "@/components/Service";
import ServicesHeader from "./services/ServicesHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Services() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services?populate=*`,
  );
  const { data } = await response.json();
  return (
    <section className="mx-auto w-full max-w-[1440px] space-y-10 px-6 pb-16 text-[#0D1846] sm:px-16">
      <div className="flex flex-col justify-center space-y-5 text-center">
        <ServicesHeader />
      </div>
      <div className="mx-auto grid grid-cols-1 gap-2.5 sm:grid-cols-4">
        {data.map((service: any) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
      <Button
        asChild
        className="w-full rounded-xl border border-[#0D1846] bg-[#0D1846] text-center text-white hover:bg-transparent hover:text-[#0D1846]"
      >
        <Link href={"/layanan"} className="w-full underline">
          See More
        </Link>
      </Button>
    </section>
  );
}
