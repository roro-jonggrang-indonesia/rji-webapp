import ContactUsForm from "./contactus/ContactUsForm";
import ContactUsHeaders from "./contactus/ContactUsHeaders";

export default async function ContactUs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page-hubungi-kami`,
  );
  const { data } = await response.json();
  return (
    <section className="bg-white py-10 text-[#0D1846]" id="contact-us">
      <div className="mx-auto w-full max-w-[1440px] justify-center gap-2 space-y-10 px-6 sm:flex sm:space-y-0 sm:px-16">
        <div className="mx-auto max-w-96 sm:w-1/2">
          <ContactUsHeaders data={data} />
        </div>
        <div className="mx-auto max-w-96 overflow-hidden sm:w-1/2 sm:overflow-visible">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
