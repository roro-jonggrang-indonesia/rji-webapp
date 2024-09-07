import { Mail, MapPin, Phone, Pin } from "lucide-react";
import ContactUsForm from "./contactus/ContactUsForm";
import ContactUsHeaders from "./contactus/ContactUsHeaders";

export default function ContactUs() {
  return (
    <section className="bg-white py-10 text-[#0D1846]">
      <div className="mx-auto w-full max-w-[1440px] justify-center gap-5 space-y-10 px-6 sm:flex sm:space-y-0 sm:px-16">
        <div className="mx-auto max-w-96 sm:w-1/2">
          <ContactUsHeaders data />
        </div>
        <div className="mx-auto max-w-96 overflow-hidden sm:w-1/2 sm:overflow-visible">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
