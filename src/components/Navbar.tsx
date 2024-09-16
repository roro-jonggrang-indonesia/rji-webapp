"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/assets/rji-logo.png";
import logoWhite from "@/assets/rji-logo-white.png";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data";
import { Equal, X } from "lucide-react";

export default function Navbar({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (current < 0.05) {
        setVisible(true);
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        if (direction < 0 || showNavbar) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "fixed top-0 z-50 h-[84px] w-full transition-colors duration-500 ease-in-out lg:min-w-fit",
          {
            "text-white": pathname === "/" || pathname.includes("layanan"),
            "bg-transparent": isAtTop && !showNavbar,
            "bg-[#0D1846] text-white": (!isAtTop && visible) || showNavbar,
          },
          className,
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-16">
          <div className="flex items-center gap-5">
            {(!isAtTop && visible) || showNavbar ? (
              <Image
                src={logoWhite}
                alt=""
                width={100}
                height={100}
                className="size-10"
              />
            ) : (
              <Image
                src={logo}
                alt=""
                width={100}
                height={100}
                className="size-10"
              />
            )}

            <p className="hidden md:block">Roro Jonggrang Indonesia</p>
            <p className="md:hidden">RJI</p>
          </div>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <div className="relative h-10 w-10">
              <X
                className={`absolute left-0 top-0 h-10 w-10 transform transition-transform duration-500 ease-in-out ${
                  showNavbar ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                }`}
              />
              <Equal
                className={`absolute left-0 top-0 h-10 w-10 transform transition-transform duration-500 ease-in-out ${
                  showNavbar ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
            </div>
          </Button>
          <ul className="hidden gap-6 md:flex">
            {navItems.map((item, i) => (
              <NavItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </motion.div>
      {showNavbar && (
        <motion.div
          key={"showNavbar"}
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.5,
          }}
          className="fixed left-0 right-0 top-[70px] z-30 rounded-b-xl bg-[#0D1846] shadow-2xl md:hidden"
        >
          <ul className="flex flex-col items-center justify-center">
            {navItems.map((item, i) => (
              <NavItem
                key={i}
                item={item}
                className="flex h-12 w-full items-center justify-center text-white hover:bg-black/20"
              />
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export interface NavItem {
  label: string;
  href: string;
}

interface NavItemProps {
  item: NavItem;
  className?: string;
}

function NavItem({ item, className = "" }: NavItemProps) {
  const pathname = usePathname();
  const router = useRouter(); // To programmatically navigate
  const active = pathname === item.href;

  const handleClick = (e: React.MouseEvent) => {
    if (item.href.startsWith("#")) {
      e.preventDefault();

      if (pathname === "/") {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/${item.href}`);
      }
    }
  };

  const DynamicTag = active ? "span" : Link;

  return (
    <li className={`${className} ${active ? "bg-black/20 md:bg-inherit" : ""}`}>
      <DynamicTag
        href={item.href}
        className={`${active ? "font-semibold" : ""}`}
        onClick={item.href.startsWith("#") ? handleClick : undefined}
      >
        {item.label}
      </DynamicTag>
    </li>
  );
}
