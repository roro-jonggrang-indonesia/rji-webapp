import AnimatedCounter from "@/components/AnimatedCounter";
import FactsHeader from "./facts/FactsHeaders";

export default async function Facts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page-pengalaman-kami`,
  );
  const { data } = await response.json();
  return (
    <section className="w-full bg-[#0D1846] py-10 text-white">
      <div className="mx-auto max-w-[1440px] space-y-10 px-6 sm:px-16 md:flex">
        <div className="my-auto flex w-full flex-col space-y-5 md:pe-10">
          <FactsHeader data={data} />
        </div>
        <div className="grid w-full grid-cols-1 gap-px bg-white md:grid-cols-2">
          <div className="mx-auto flex w-full flex-col bg-[#0D1846] py-8 text-center sm:-ms-px sm:-mt-px sm:me-px">
            <h3 className="text-4xl font-bold text-primary">
              <AnimatedCounter from={0} to={100} duration={3} />+
            </h3>
            <p>Clients and Partner</p>
          </div>
          <div className="mx-auto flex w-full flex-col bg-[#0D1846] py-8 text-center sm:-me-px sm:-mt-px">
            <h3 className="text-4xl font-bold text-primary">
              <AnimatedCounter from={0} to={200} duration={5} />+
            </h3>
            <p>Events Manage Successfully</p>
          </div>
          <div className="mx-auto flex w-full flex-col bg-[#0D1846] py-8 text-center sm:-mb-px sm:-ms-px">
            <h3 className="text-4xl font-bold text-primary">
              <AnimatedCounter from={0} to={10} duration={3} />+
            </h3>
            <p>Years of experience</p>
          </div>

          <div className="mx-auto flex w-full flex-col bg-[#0D1846] py-8 text-center sm:-mb-px sm:-me-px">
            <h3 className="text-4xl font-bold text-primary">UNLIMITED</h3>
            <p>Clients Smiles Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
