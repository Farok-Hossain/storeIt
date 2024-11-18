import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};

export const getFileType = (fileName: string) => {
  const extention = fileName.split(".").pop();
  let type = "";

  switch (extention) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      type = "image";
      break;
    case "mp4":
    case "mkv":
    case "avi":
      type = "video";
      break;
    case "mp3":
    case "wav":
      type = "audio";
      break;
    case "pdf":
    case "doc":
    case "docx":
      type = "document";
      break;
    default:
      type = "unknown";
  }
  return { type, extention };
};
