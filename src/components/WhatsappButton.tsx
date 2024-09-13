import Image from "next/image";
import Link from "next/link";
import whatsappImage from "@/assets/whatsapp.png";

export default function WhatsappButton() {
  return (
    <Link
      href={`https://api.whatsapp.com/send/?phone=6285282673389&text&type=phone_number&app_absent=0`}
      className="fixed bottom-6 right-6 z-10"
    >
      <div className="flex size-16 items-center justify-center rounded-full bg-white">
        <Image
          src={whatsappImage}
          alt=""
          width={60}
          height={60}
          className="size-10"
        />
      </div>
    </Link>
  );
}
