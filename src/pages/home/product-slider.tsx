import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import Container from "@/components/atoms/container";
import ProductCard from "@/components/moleculs/product-card";
import { useProducts } from "@/services/api/product/use-products";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const { data } = useProducts();

  const products = data?.products;
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
          {products?.map((product) => (
            <CarouselItem
              key={product._id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard key={product._id} product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </Container>
  );
};

export default ProductSlider;
