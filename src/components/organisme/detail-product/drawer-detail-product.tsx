import { Badge } from "@/components/atoms/badge";
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
    type = [],
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
        <section className="pl-4 py-4">
          <header className="text-base md:text-lg font-semibold">
            Variant Product
          </header>
          <div className="flex flex-wrap items-center justify-start mt-1">
            {type?.map((typeItem) => (
              <div
                key={typeItem._id}
                className="flex flex-col items-start justify-start gap-1"
              >
                <h1 className="capitalize font-semibold">{typeItem.key}</h1>
                <div className="flex flex-wrap justify-start gap-1">
                  {typeItem.values?.map((value) => (
                    <Badge key={value} className="capitalize">
                      {value}
                    </Badge>
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
