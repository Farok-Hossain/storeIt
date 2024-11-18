"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Porps {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ ownerId, accountId, className }: Porps) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button type="button" className={cn("Uploader-button", className)}>
        <Image
          src="/assets/icons/upload.svg"
          alt="upload"
          width={24}
          height={24}
        />{" "}
      </Button>
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileUploader;
