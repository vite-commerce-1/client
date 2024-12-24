import { Button } from "@/components/atoms/button";
import ButtonTooltip from "@/components/atoms/button-tooltip";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import { IProduct } from "@/services/interfaces/product-interface";

interface IProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products?.map((product) => (
        <Card>
          <CardHeader>
            <figure className="rounded-md aspect-auto object-cover object-center">
              <img src={product.image[0]} alt={product.name} />
            </figure>
          </CardHeader>
          <CardContent>
            <h1 className="text-3xl font-bebas tracking-wide">
              {product.price}
            </h1>
            <p className="text-base md:text-lg font-semibold">{product.name}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <ButtonTooltip content="Add to cart">
              <Button variant={"secondary"}>Add cart</Button>
            </ButtonTooltip>
            <ButtonTooltip content="View detail">
              <Button variant={"secondary"}>View Detail</Button>
            </ButtonTooltip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
