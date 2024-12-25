import { Badge } from "@/components/atoms/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/carousel";
import { cn } from "@/lib/utils";
import { IProduct } from "@/services/interfaces/product-interface";

interface IProps {
  product: IProduct;
  className?: string;
}

const ImageSliderDetailProduct = ({ product, className }: IProps) => {
  const { image = [], category } = product || {};

  return (
    <Carousel
      className={cn("max-w-md w-full", className)}
      role="region"
      aria-label="Product images"
    >
      <CarouselContent className="w-full">
        {image.length > 0 ? (
          image.map((imgSrc: string, index: number) => (
            <CarouselItem className="w-full" key={index}>
              {category && (
                <Badge className="absolute top-1 right-1 z-10 capitalize">
                  {category.name}
                </Badge>
              )}
              <img
                src={imgSrc || "path/to/placeholder-image.jpg"}
                alt={category ? `${category.name} image` : "Product image"}
                className="w-full rounded-md"
              />
            </CarouselItem>
          ))
        ) : (
          <div className="w-full text-center">No images available</div>
        )}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSliderDetailProduct;
