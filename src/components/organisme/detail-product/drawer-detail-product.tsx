import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/atoms/drawer";
import Loader from "@/components/moleculs/loader";
import { IProduct } from "@/services/interfaces/product-interface";

interface IProps {
  children: React.ReactNode;
  product: IProduct;
}

const DrawerDetailProduct = ({ children, product }: IProps) => {
  if (!product) {
    return <Loader />;
  }

  const {
    image = [],
    name = "Unknown Product",
    description = "No description available",
  } = product;

  return (
    <Drawer>
      <DrawerTrigger asChild className="cursor-pointer">
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Detail Product</DrawerTitle>
        </DrawerHeader>
        <figure className="flex items-start justify-start gap-4 pl-4">
          <img
            src={image[0] || "path/to/fallback-image.png"}
            alt={name || "Product image"}
            className="w-14 rounded-md border-2"
          />
          <p className="font-medium text-base md:text-lg">{name}</p>
        </figure>
        <section className="pl-4 py-4">
          <header className="text-base md:text-lg font-semibold">
            Description Product
          </header>
          <p className="font-normal text-sm md:text-base">{description}</p>
        </section>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDetailProduct;
