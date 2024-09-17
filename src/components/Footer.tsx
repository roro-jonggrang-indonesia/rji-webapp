import Image from "next/image";
import logo from "@/assets/rji-logo-white.png";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto bg-[#0D1846] pb-5 pt-16 text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-10 space-y-5 px-6 sm:grid-cols-4 sm:space-y-0 sm:px-16">
        <div className="col-span-2 mx-auto space-y-5 sm:col-span-1 sm:text-start">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt=""
              width={100}
              height={100}
              className="size-10"
            />
            <p className="text-xl">Roro Jonggrang Indonesia</p>
          </div>
          <p className="text-muted-foreground">
            Event Organizer (EO) Sport terbaik dan profesional di Jakarta
          </p>
          <div className="flex gap-2">
            <Link
              href={"https://www.instagram.com/rorojonggrangsporteo/"}
              className="flex size-7 items-center justify-center rounded-xl border border-white"
            >
              <Instagram className="size-4" />
            </Link>
            <Link
              href={"https://www.youtube.com/@rorojonggrangindonesiaspor8098"}
              className="flex size-7 items-center justify-center rounded-xl border border-white"
            >
              <Youtube className="size-4" />
            </Link>
          </div>
        </div>

        <div className="col-span-1 space-y-3 sm:mx-auto">
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <Link href={"/tentang-kami"}>About Us</Link>
            </li>
            <li>
              <Link href={"/portofolio"}>Portfolio</Link>
            </li>
            <li>
              <Link href={"/layanan"}>Layanan</Link>
            </li>
            <li>
              <Link href={"/artikel"}>Blogs</Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3 sm:mx-auto">
          <h3 className="font-bold">Events</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Sports and Competition</li>
            <li>Music and Art</li>
            <li>MICE</li>
            <li>Team Building</li>
            <li>Party and Gala</li>
            <li>Product Launching</li>
            <li>Brand Activation</li>
          </ul>
        </div>

        <div className="col-span-2 space-y-3 sm:col-span-1 sm:mx-auto">
          <h3 className="font-bold">Specific Services</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Venue Selection and Booking</li>
            <li>Athlete Management</li>
            <li>Ticketing and Registration</li>
            <li>Sponsorship and Partnership</li>
            <li>Media Converge</li>
            <li>Guest and VIP Management</li>
            <li>Travel and Accomodation Management</li>
            <li>Event Technology Solution</li>
            <li>Catering and Hospitality Services</li>
            <li>Equipment and Logistic Rent</li>
            <li>Live Score</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] space-y-3 px-6 py-5 sm:px-16">
        <hr />
        <p className="text-center text-sm text-muted-foreground">
          Copyright &copy; {new Date().getFullYear()} Roro Jonggrang Indonesia
        </p>
      </div>
    </footer>
  );
}
