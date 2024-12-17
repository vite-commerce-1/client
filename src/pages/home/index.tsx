import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import Container from "@/components/atoms/container";
import CategoryCard from "@/components/moleculs/category-card";
import { useCategories } from "@/services/api/category/use-categories";

const HomePage = () => {
  const { data: categories } = useCategories();
  console.log(categories);
  return (
    <div className="w-full pt-20">
      <section className="w-full">Hero Section</section>
      <Container className="space-y-4 py-4">
        <header>
          <h1 className="text-xl md:text-2xl tracking-widest font-semibold font-bebas text-nowrap">
            Choose Category
          </h1>
        </header>
        <Carousel>
          <CarouselContent className="pb-4 pr-4">
            {categories?.map((category) => (
              <CarouselItem className="basis-1/1 w-[150px]">
                <CategoryCard category={category} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </Container>
    </div>
  );
};

export default HomePage;
