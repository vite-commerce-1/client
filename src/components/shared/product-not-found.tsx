// src/components/organisme/ProductNotFound.tsx
import React, { FC } from "react";
import Container from "../atoms/container";
import SearchInput from "@/components/shared/navbar/search-input";
import HeaderSection from "./text-header-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../atoms/carousel";
import ProductCard from "../organisme/products/card-product";
import { cn } from "@/lib/utils";
import { useProducts } from "@/features/product/utils/use-products";
import Loader from "./loader";

interface ProductNotFoundProps {
  className?: string;
}

const ProductNotFound: FC<ProductNotFoundProps> = ({ className }) => {
  const { data: productsData, isLoading, isError, error } = useProducts();

  const products = productsData?.products || [];

  return (
    <div className={cn(className, "bg-overlay/10 p-10 rounded-md")}>
      <Container>
        <h1 className="section-title">Product Not Found</h1>
        <p className="text-sm sm:text-base my-2">
          We're sorry, but the product you're looking for couldn't be found. It
          may be out of stock or no longer available.
        </p>
        <SearchInput />
        {isLoading ? (
          <div className="flex justify-center items-center py-4">
            <Loader />
          </div>
        ) : isError ? (
          <div className="text-red-500">
            Error: {error?.message || "Failed to load products."}
          </div>
        ) : products.length > 0 ? (
          <Container className="space-y-4 py-4">
            <HeaderSection title="Other Products" />
            <Carousel>
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem
                    key={product._id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </Container>
        ) : null}
      </Container>
    </div>
  );
};

export default React.memo(ProductNotFound);
