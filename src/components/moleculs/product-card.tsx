import { IProduct } from "@/services/interfaces/product-interface";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import { Carousel, CarouselContent, CarouselItem } from "../atoms/carousel";
import { Badge } from "../atoms/badge";
import { Button } from "../atoms/button";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
import { formatCurrency } from "@/lib/format-currency";
import ButtonTooltip from "../atoms/button-tooltip";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <Card>
      <CardHeader>
        <Carousel>
          <Badge className="absolute top-1 right-1 z-50">
            {product?.category?.name}
          </Badge>
          <CarouselContent>
            {product?.image?.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt="" className="rounded-md" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardHeader>
      <CardContent>
        <h1 className="mb-2 font-medium">
          <span>{product?.name}</span>
        </h1>
        <h2 className="mb-2 font-medium">{formatCurrency(product?.price)}</h2>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-4">
        <ButtonTooltip content="Add to cart">
          <Button>
            <ShoppingBagIcon />
          </Button>
        </ButtonTooltip>
        <ButtonTooltip content="View detail">
          <Button variant={"neutral"}>
            <EyeIcon />
          </Button>
        </ButtonTooltip>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;