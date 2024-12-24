import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const productNameVariant = cva("font-medium", {
  variants: {
    size: {
      xs: "text-xs md:text-sm",
      sm: "text-sm md:text-base",
      default: "text-base md:text-lg lg:text-xl",
      lg: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
      xl: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ProductNameProps extends VariantProps<typeof productNameVariant> {
  name: string;
  className?: string;
}

const ProductName = ({ name, className, size }: ProductNameProps) => {
  return <p className={cn(productNameVariant({ size, className }))}>{name}</p>;
};

export default ProductName;
