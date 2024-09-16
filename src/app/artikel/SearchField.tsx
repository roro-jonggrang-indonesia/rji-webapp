"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ArtikelSection() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) router.push("/artikel");

    router.push(`/artikel?q=${encodeURIComponent(q)}`);
  }
  return (
    <div className="space-y-10">
      <div className="w-full sm:flex"></div>
      <form onSubmit={handleSubmit} action="/search">
        <div className="relative">
          <Input
            name="q"
            placeholder="Cari Artikel Lainnya"
            className="rounded-full bg-[#F5F7FA] pe-20 ps-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 size-5 -translate-y-1/2 transform" />
          <Button className="absolute right-1 top-1/2 size-5 -translate-y-1/2 transform rounded-2xl border border-[#0D1846] bg-[#0D1846] px-8 py-4 text-white hover:text-[#0D1846]">
            Cari
          </Button>
        </div>
      </form>
    </div>
  );
}
