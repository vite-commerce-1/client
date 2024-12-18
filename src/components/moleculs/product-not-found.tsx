import Container from "../atoms/container";
import SearchInput from "./search-input";
import { useProducts } from "@/services/api/product/use-products";
import HeaderSection from "./header-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../atoms/carousel";
import ProductCard from "./product-card";
import { cn } from "@/lib/utils";

const ProductNotFound = ({ className }: { className?: string }) => {
  const { data: productsData } = useProducts();

  const products = productsData?.products;

  return (
    <div className={cn(className, "bg-overlay/10 p-10 rounded-md")}>
      <Container>
        <h1 className="section-title">Product Not Found</h1>
        <p className="text-sm sm:text-base my-2">
          We're sorry, but the product you're looking for couldn't be found. It
          may be out of stock or no longer available.
        </p>
        <SearchInput />
        <Container className="space-y-4 py-4">
          <HeaderSection title="Other Products" />
          <Carousel>
            <CarouselContent>
              {products?.map((product) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProductCard key={product._id} product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"neutralNoShadow"} className="left-0" />
            <CarouselNext variant={"neutralNoShadow"} className="right-0" />
          </Carousel>
        </Container>
      </Container>
    </div>
  );
};

export default ProductNotFound;
