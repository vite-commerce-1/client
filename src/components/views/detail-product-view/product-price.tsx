import { formatCurrency } from "@/lib/format-currency";
import { cva, VariantProps } from "class-variance-authority";

const productPriceVariant = cva("font-bebas font-bold tracking-wide", {
  variants: {
    size: {
      xs: "text-xs md:text-sm lg:text-base xl:text-lg",
      sm: "text-sm md:text-base lg:text-lg xl:text-xl",
      default: "text-base md:text-lg lg:text-xl xl:text-2xl",
      lg: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
      xl: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Define the props interface, including VariantProps for the variants
interface ProductPriceProps extends VariantProps<typeof productPriceVariant> {
  price: number;
  className?: string;
}

const ProductPrice = ({ price, size, className }: ProductPriceProps) => {
  return (
    <h1 className={productPriceVariant({ size, className })}>
      {formatCurrency(price)}
    </h1>
  );
};

export default ProductPrice;
