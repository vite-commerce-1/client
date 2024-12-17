import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Definisikan containerVariant dengan cva
const containerVariant = cva("", {
  variants: {
    variant: {
      default:
        "container px-2 w-full mx-auto sm:max-w-2xl sm:px-0 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl",
      fluid: "px-2 w-full mx-auto", // fluid variant
    },
  },
  defaultVariants: {
    variant: "default", // default variant
  },
});

// Interface untuk props komponen, termasuk support variant
export interface ContainerProps extends VariantProps<typeof containerVariant> {
  children: React.ReactNode;
  className?: string;
}

// Komponen Container
const Container = ({
  children,
  className,
  variant,
  ...props
}: ContainerProps) => {
  return (
    <section
      {...props}
      className={cn(containerVariant({ variant }), className)}
    >
      {children}
    </section>
  );
};

export default Container;
