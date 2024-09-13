import Image from "next/image";
import notFoundImage from "@/assets/not-found.png";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto h-screen w-full max-w-[1440px] px-6 pb-10 text-[#0D1846] sm:px-16">
      <div className="mx-auto flex h-full w-full max-w-4xl items-center justify-between gap-x-12">
        <Image src={notFoundImage} alt="" sizes="100vw" />
        <div className="space-y-7">
          <h2 className="text-4xl font-bold tracking-wider">Ooops...</h2>
          <h3 className="text-2xl font-semibold tracking-widest">
            Page not found{" "}
          </h3>
          <p>
            Page ini tidak tersedia, silakan kembali ke halaman utama untuk
            melanjutkan
          </p>
          <Button
            asChild
            className="rounded-2xl border bg-[#0D1846] text-white hover:border-[#0D1846] hover:bg-transparent hover:text-[#0D1846]"
          >
            <Link href="/">
              <ArrowLeftCircle className="flex-shrink-2 mr-3 size-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
