import Navbar from "@/components/Navbar";
import Blogs from "@/sections/Blogs";
import ContactUs from "@/sections/ContactUs";
import Facts from "@/sections/Facts";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Partners from "@/sections/Partners";
import Testimonials from "@/sections/Testimonials";
import Services from "@/sections/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Facts />
      <Partners />
      <Testimonials />
      <Blogs />
    </main>
  );
}
