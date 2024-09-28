import Image from "next/image";
import { Lexend } from "next/font/google";
import PartnersHeaders from "./partners/PartnersHeaders";
import PartnersLogo from "./partners/PartnersLogo";

const lexend = Lexend({ subsets: ["latin"] });

export default async function Partners() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/clients-logos?populate=*`,
  );
  const { data: logo } = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page-dipercaya-oleh`,
  );
  const { data } = await response2.json();

  return (
    <section
      className={`${lexend.className} mx-auto w-full max-w-[1440px] space-y-10 bg-white px-6 py-10 text-[#0D1846] sm:px-16`}
    >
      <div className="flex flex-col justify-center space-y-5 text-center">
        <PartnersHeaders data={data} />
      </div>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] grid w-screen grid-cols-2 gap-10 bg-[#F5F7FA] py-16 sm:grid-cols-5">
        {logo.map((client: any) => (
          <PartnersLogo data={client} key={client.id} />
        ))}
      </div>
    </section>
  );
}
