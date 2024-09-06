import Image from "next/image";
import logo from "@/assets/rji-logo-white.png";

export default function Footer() {
  return (
    <footer className="mx-auto bg-[#0D1846] px-6 py-16 text-white sm:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-10 space-y-5 sm:grid-cols-4 sm:space-y-0">
        <div className="col-span-2 mx-auto space-y-5 text-center sm:col-span-1 sm:text-start">
          <div className="flex items-center justify-center gap-x-5 sm:justify-start">
            <Image
              src={logo}
              alt=""
              width={100}
              height={100}
              className="size-10"
            />
            <p className="text-2xl">LOGO</p>
          </div>
          <p className="text-muted-foreground">
            Event Organizer (EO) Sport terbaik dan profesional di Jakarta
          </p>
        </div>

        <div className="col-span-1 space-y-3 sm:mx-auto">
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Service</li>
            <li>Blogs</li>
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
      <div className="space-y-3 py-5">
        <hr />
        <p className="text-center text-sm text-muted-foreground">
          Copyright {new Date().getFullYear()} Roro Jonggrang Indonesia
        </p>
      </div>
    </footer>
  );
}
