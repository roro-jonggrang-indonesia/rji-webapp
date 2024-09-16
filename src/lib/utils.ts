import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date, includeDay = true): string => {
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: includeDay ? "numeric" : undefined,
  });
};
