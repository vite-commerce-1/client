// src/components/atoms/TextHeaderSection.tsx
import React, { FC } from "react";
import { cn } from "@/lib/utils"; // Asumsi Anda memiliki utility function `cn`

interface TextHeaderSectionProps {
  title: string;
  className?: string;
}

const TextHeaderSection: FC<TextHeaderSectionProps> = ({
  title,
  className,
}) => {
  return (
    <h1
      className={cn(
        "text-xl md:text-2xl tracking-widest font-semibold font-bebas whitespace-nowrap",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default React.memo(TextHeaderSection);
