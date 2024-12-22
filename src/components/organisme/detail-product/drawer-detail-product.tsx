import { Badge } from "@/components/atoms/badge";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/atoms/drawer";
import { IProduct } from "@/services/interfaces/product-interface";

interface IProps {
  children: React.ReactNode;
  product: IProduct;
}
const DrawerDetailProduct = ({ children, product }: IProps) => {
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
            src={product?.image[0]}
            alt={product?.name}
            className="w-14 rounded-md border-2"
          />
          <p className="font-medium text-base md:text-lg">{product?.name}</p>
        </figure>
        <section className="pl-4 py-4">
          <header className="text-base md:text-lg font-semibold">
            Description Product
          </header>
          <p className="font-normal text-sm md:text-base">
            {product?.description}
          </p>
        </section>
        <section className="pl-4 py-4">
          <header className="text-base md:text-lg font-semibold">
            Variant Product
          </header>
          <div className="flex flex-wrap items-center justify-start mt-1">
            {product?.type?.map((type) => (
              <div className="flex flex-col items-start justify-start gap-1">
                <h1 className="capitalize font-semibold">{type.key}</h1>
                <div className="flex flex-wrap justify-start gap-1">
                  {type.values?.map((value) => (
                    <Badge className="capitalize">{value}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDetailProduct;
