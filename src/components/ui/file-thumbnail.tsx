import * as React from "react";
import { cn } from "@/lib/utils";

export interface FileThumbnailProps {
  file: {
    name: string;
    type: string;
  };
  previewImageUrl?: string | null;
  className?: string;
}

export function FileThumbnail({
  file,
  previewImageUrl,
  className,
}: FileThumbnailProps) {
  if (previewImageUrl) {
    return (
      <img
        src={previewImageUrl}
        alt={file.name}
        className={cn("object-cover border rounded-lg bg-muted", className)}
      />
    );
  }

  const isImage = file.type.startsWith("image/");
  const isPdf = file.type === "application/pdf" || file.name.endsWith(".pdf");

  return (
    <div
      className={cn(
        "grid place-items-center rounded-lg border bg-muted/50 text-muted-foreground font-mono text-[10px] font-bold uppercase select-none",
        className,
      )}
    >
      {isImage ? "IMG" : isPdf ? "PDF" : "FILE"}
    </div>
  );
}
