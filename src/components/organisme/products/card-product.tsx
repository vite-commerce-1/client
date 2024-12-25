import { IProduct } from "@/services/interfaces/product-interface";
import { Card, CardContent, CardFooter, CardHeader } from "../../atoms/card";
import { Carousel, CarouselContent, CarouselItem } from "../../atoms/carousel";
import { Badge } from "../../atoms/badge";
import { buttonVariants } from "../../atoms/button";
import { EyeIcon } from "lucide-react";
import { formatCurrency } from "@/lib/format-currency";
import ButtonTooltip from "../../atoms/button-tooltip";
import { Link } from "react-router-dom";
import CreateCartPopup from "@/features/cart/components/popup-create-cart";
import { Skeleton } from "@/components/atoms/skeleton";

interface IProps {
  product: IProduct;
  hideFooter?: boolean;
}

const CardProduct = ({ product, hideFooter = false }: IProps) => {
  if (!product) {
    return <Skeleton className="h-full w-full" />;
  }
  return (
    <Card className="h-full w-full">
      <Link className="flex flex-col" to={`/products/${product?._id}`}>
        <CardHeader>
          <Carousel>
            <Badge className="absolute top-1 right-1 z-10 capitalize">
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
      </Link>
      {!hideFooter && (
        <CardFooter className="flex flex-wrap gap-4">
          <CreateCartPopup product={product} stock={product?.stock || 0} />
          <ButtonTooltip content="View detail">
            <Link
              to={`/products/${product?._id}`}
              className={buttonVariants({})}
            >
              <EyeIcon />
            </Link>
          </ButtonTooltip>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardProduct;
