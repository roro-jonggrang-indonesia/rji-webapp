import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { DM_Sans } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";
import ContactUs from "@/sections/ContactUs";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const revalidate = 60;

export const metadata: Metadata = {
  title: {
    default: "Roro Jonggrang Event Organizer (EO) Sports Terbaik Jakarta",
    template: "%s | Roro Jonggrang",
  },
  description:
    "Roro Jonggrang Indonesia jasa Event Organizer (EO) & planner Jakarta spesialis sport profesional & terbaik melayani beragam kebutuhan acara olahraga dan lainnya",
  keywords: ["Event Organizer (EO) EO Event", "EO Jakarta", "EO Sport"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W37BGXNV3F"
        ></Script>
        <Script id="google-tag-manager">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W37BGXNV3F');
          `}
        </Script>
      </head>
      <body
        className={`${dmSans.className} relative overflow-x-hidden scroll-smooth bg-white focus:scroll-auto`}
      >
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
        <WhatsappButton />
        <Toaster />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/gtag/js?id=G-W37BGXNV3F"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
