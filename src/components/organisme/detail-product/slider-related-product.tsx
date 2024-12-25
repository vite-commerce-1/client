import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import Loader from "@/components/shared/loader";
import { IProduct } from "@/services/interfaces/product-interface";

import React, { Suspense } from "react";

const ProductCard = React.lazy(
  () => import("@/components/organisme/products/card-product")
);

interface IProps {
  products: IProduct[];
}

const SliderRelatedProduct = ({ products }: IProps) => {
  return (
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
              <Suspense fallback={<Loader />}>
                <ProductCard product={product} />
              </Suspense>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-0" />
        <CarouselNext className="hidden sm:flex right-0" />
      </Carousel>
    </section>
  );
};

export default SliderRelatedProduct;
