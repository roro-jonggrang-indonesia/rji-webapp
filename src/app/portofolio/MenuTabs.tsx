"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Feature from "@/components/Feature";

interface MenuTabsProps {
  data: any;
}

export default function MenuTabs({ data }: MenuTabsProps) {
  const [selected, setSelected] = useState("");
  const categories = [
    "All Services",
    ...new Set(
      data.flatMap((content: any) => content.attributes.service_category),
    ),
  ];

  const visibleCategories = categories.slice(0, 6);
  const dropdownCategories = categories.slice(6);
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] w-screen">
      <Tabs defaultValue="All Services" className="">
        <TabsList className="bg-[#008080]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-3 sm:grid-cols-7">
            {visibleCategories.map((category: any) => (
              <TabsTrigger
                key={category}
                value={category}
                className="break-words"
              >
                {category}
              </TabsTrigger>
            ))}
            <div className="sm:hidden"></div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  Lainnya <ChevronDown className="size-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={selected}
                  onValueChange={setSelected}
                >
                  {dropdownCategories.map((category: any) => (
                    <DropdownMenuRadioItem key={category} value={category}>
                      <TabsTrigger value={category}>{category}</TabsTrigger>
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="sm:hidden"></div>
          </div>
        </TabsList>
        {categories.map((category: any) => (
          <TabsContent
            key={category}
            value={category}
            className="mx-auto w-full max-w-[1440px] px-6 pt-16 text-[#0D1846] sm:px-16"
          >
            <div className="sm:overflow-visible">
              {data
                .filter((content: any) =>
                  category === "All Services"
                    ? true
                    : content.attributes.service_category.includes(category),
                )
                .map((content: any, idx: number) =>
                  idx % 2 === 1 ? (
                    <div
                      key={content.id}
                      className="relative left-1/2 right-1/2 -ml-[50vw] w-screen bg-[#F5F7FA]"
                    >
                      <div className="mx-auto w-full max-w-[1440px] space-y-10 overflow-hidden px-6 py-6 text-[#0D1846] sm:px-16 sm:py-16">
                        <Feature
                          restrictCategory={true}
                          content={content}
                          reverse={true}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      key={content.id}
                      className="relative left-1/2 right-1/2 -ml-[50vw] w-screen"
                    >
                      <div className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-6 text-[#0D1846] sm:px-16 sm:py-16">
                        <Feature restrictCategory={true} content={content} />
                      </div>
                    </div>
                  ),
                )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
