import { Badge } from "@/components/atoms/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/carousel";
import { Skeleton } from "@/components/atoms/skeleton";
import { IProduct } from "@/services/interfaces/product-interface";

interface IProps {
  product: IProduct;
}

const ImageSliderProduct = ({ product }: IProps) => {
  if (!product) {
    <Skeleton className="max-w-md w-full md:col-start-1 md:row-span-4" />;
  }

  return (
    <Carousel className="max-w-md w-full md:col-start-1 md:row-span-4">
      <CarouselContent className="w-full">
        {product?.image?.map((image: string, index: number) => (
          <CarouselItem className="w-full" key={index}>
            <Badge className="absolute top-1 right-1 z-10 capitalize">
              {product?.category?.name}
            </Badge>
            <img src={image} alt="" key={index} className="w-full rounded-md" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSliderProduct;
