import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import ProductCard from "@/components/moleculs/product-card";
import { IProduct } from "@/services/interfaces/product-interface";

interface IProps {
  products: IProduct[];
}

const RelatedProductSlider = ({ products }: IProps) => {
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
              <ProductCard product={product} hideFooter />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-0" />
        <CarouselNext className="hidden sm:flex right-0" />
      </Carousel>
    </section>
  );
};

export default RelatedProductSlider;
