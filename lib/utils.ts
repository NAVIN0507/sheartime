import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getIntials = (name : string):string=>
  name.split(" ").map((part)=>part[0]).join("").toUpperCase().slice(0,2)