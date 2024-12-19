import { Badge } from "@/components/atoms/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import Container from "@/components/atoms/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/atoms/select";
import { Separator } from "@/components/atoms/separator";
import ProductCard from "@/components/moleculs/product-card";
import BreadcrumbDetailProduct from "@/components/organisme/detail-product/breadcrumb-detail-product";
import DrawerDetailProduct from "@/components/organisme/detail-product/drawer-detail-product";
import { formatCurrency } from "@/lib/format-currency";
import { useProduct } from "@/services/api/product/use-product";
import { useProducts } from "@/services/api/product/use-products";
import { IProductType } from "@/services/interfaces/product-interface";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { id } = useParams();

  const { data: product } = useProduct(id!);
  const { data: productsData } = useProducts();
  const products = productsData?.products;

  return (
    <div className="pt-20">
      <Container className="space-y-4">
        {/* Breadcrumb */}
        <BreadcrumbDetailProduct name={product?.name} />
        <main className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto_auto_1fr]">
          {/* Image Slider */}
          <Carousel className="max-w-md w-full md:col-start-1 md:row-span-4">
            <CarouselContent className="w-full">
              {product?.image?.map((image: string, index: number) => (
                <CarouselItem className="w-full" key={index}>
                  <Badge
                    variant={"neutral"}
                    className="absolute top-1 right-1 z-10 capitalize"
                  >
                    {product?.category?.name}
                  </Badge>
                  <img
                    src={image}
                    alt=""
                    key={index}
                    className="w-full rounded-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Product Price */}
          <h1 className="mt-4 md:mt-0 text-2xl md:text-3xl font-bebas tracking-wide">
            {formatCurrency(product?.price)}
          </h1>

          {/* Product Name */}
          <p className="mt-2 text-base md:text-lg  font-medium md:font-semibold">
            {product?.name}
          </p>

          <Separator className="my-4 md:hidden" />

          {/* Product Description include drawer for detail product */}
          <div className="mb-4 md:mt-4">
            <p className="line-clamp-3 text-sm">{product?.description}</p>
            <DrawerDetailProduct product={product!}>
              <p className="text-sm underline text-main mt-2">
                Baca Selengkapnya
              </p>
            </DrawerDetailProduct>
          </div>

          {/* Select Variants */}
          <div className="grid grid-cols-2">
            {product?.type.map((type: IProductType) => (
              <Select key={type._id}>
                <SelectTrigger className="capitalize">{type.key}</SelectTrigger>
                <SelectContent>
                  {type?.values.map((value: string | number) => (
                    <SelectItem
                      className="capitalize"
                      value={value as string}
                      key={value}
                    >
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>

          {/* Todo Related Product */}
          <section className="py-8 space-y-4 md:col-span-2">
            <header className="text-2xl md:text-3xl font-semibold font-bebas tracking-wider">
              Related Products
            </header>
            <Carousel>
              <CarouselContent>
                {products?.map((product) => (
                  <CarouselItem
                    key={product._id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <ProductCard product={product} hideFooter />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                variant={"neutralNoShadow"}
                className="hidden sm:flex left-0"
              />
              <CarouselNext
                variant={"neutralNoShadow"}
                className="hidden sm:flex right-0"
              />
            </Carousel>
          </section>
        </main>
      </Container>
    </div>
  );
};

export default DetailProductPage;
