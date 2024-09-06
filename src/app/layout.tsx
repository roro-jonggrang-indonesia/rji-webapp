import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DM_Sans } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Roro Jonggrang Indonesia",
    template: "%s | Roro Jonggrang Indonesia",
  },
  description: "Sports Event Organizer in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${dmSans.className} relative bg-white`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
