import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const productDescriptionVariant = cva("line-clamp-3", {
  variants: {
    size: {
      xs: "text-xs md:text-sm",
      sm: "text-sm md:text-base",
      default: "text-base md:text-lg lg:text-xl xl:text-2xl",
      lg: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
      xl: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ProductDescriptionProps
  extends VariantProps<typeof productDescriptionVariant> {
  children: React.ReactNode;
  className?: string;
}

const DescriptionProduct = ({
  children,
  className,
  size,
}: ProductDescriptionProps) => {
  return (
    <p className={productDescriptionVariant({ size, className })}>{children}</p>
  );
};

export default DescriptionProduct;
