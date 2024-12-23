import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import { useProducts } from "@/services/api/product/use-products";
import { Link } from "react-router-dom";
import React from "react";
import { conditionalRender } from "@/lib/render-helper";
import { Skeleton } from "@/components/atoms/skeleton";

const Container = React.lazy(() => import("@/components/atoms/container"));
const ProductCard = React.lazy(
  () => import("@/components/moleculs/product-card")
);

const ProductSlider = () => {
  const { data, isLoading } = useProducts();

  const products = data?.products || []; // Ensure products is an array

  return (
    <Container className="space-y-4 py-4">
      <header className="flex items-center justify-between">
        <h1 className="section-title">Our stuff</h1>
        <Link to={"/products"} className="text-sm font-medium hover:underline">
          View all products
        </Link>
      </header>
      <Carousel>
        <CarouselContent>
          {conditionalRender(
            isLoading,
            // Ensure renderTrue always returns an array
            () =>
              Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Skeleton className="h-96" />
                </CarouselItem>
              )),
            () => {
              return products.length > 0 ? (
                products.map((product) => (
                  <CarouselItem
                    key={product._id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))
              ) : (
                <div>No products available</div>
              );
            }
          )}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </Container>
  );
};

export default ProductSlider;
