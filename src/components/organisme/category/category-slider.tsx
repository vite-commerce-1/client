import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import CategoryCard from "@/components/organisme/category/category-card";

import { useCategories } from "@/services/api/category/use-categories";

import React from "react";

const Container = React.lazy(() => import("@/components/atoms/container"));

const HeaderSection = React.lazy(
  () => import("@/components/moleculs/text-header-section")
);

const CategorySlider = () => {

  const { data: categories } = useCategories();
  
  return (
    <Container className="space-y-4 py-4">
      <HeaderSection title="Choose category" />
      <Carousel>
        <CarouselContent className="pb-4 pr-4">
          {categories?.map((category) => (
            <CarouselItem key={category._id} className="basis-1/1 w-[150px]">
              <CategoryCard category={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </Container>
  );
};

export default CategorySlider;
