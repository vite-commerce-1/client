// src/components/organisme/carts/CartsCard.tsx

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";

import { Skeleton } from "@/components/atoms/skeleton"; // Import Skeleton
import ActionRemoveCart from "@/features/cart/components/action-remove-cart";
import FormCreateCart from "@/features/cart/components/form-create-cart";
import { useProduct } from "@/features/product/utils/use-product";
import { formatCurrency } from "@/lib/format-currency";
import { ICartItem } from "@/services/interfaces/cart-interface";

interface IProps {
  cart: ICartItem;
}

const CardCarts = ({ cart }: IProps) => {
  const { data: product, isLoading: productLoading } = useProduct(
    cart.product._id!
  );

  if (productLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-40 w-full rounded-md" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-4" />
          <Skeleton className="h-5 w-1/3" />
        </CardContent>
        <CardFooter className="flex items-center justify-center flex-col gap-y-4">
          <Skeleton className="h-12 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </CardFooter>
      </Card>
    );
  }

  if (!product) return <div>Product not found or deleted.</div>;

  return (
    <Card>
      <CardHeader>
        <figure>
          <img
            src={product.image[0]}
            alt={product.name}
            className="rounded-md h-40 w-full object-cover"
          />
        </figure>
      </CardHeader>
      <CardContent>
        <p className="text-base tracking-tight font-medium mb-1">
          {product.name}
        </p>
        <p className="text-base font-medium my-3">
          <span>Quantity : </span>
          <span className="text-muted-foreground">{cart.quantity}</span>
        </p>
        <h1 className="text-lg tracking-tighter font-medium">
          <span>Total Price : </span>
          <span className="text-muted-foreground">
            {formatCurrency(cart.totalPrice)}
          </span>
        </h1>
      </CardContent>
      <CardFooter className="flex items-center justify-center flex-col gap-y-4">
        <FormCreateCart cart={cart} />
        <ActionRemoveCart productId={cart.product._id!} />
      </CardFooter>
    </Card>
  );
};

export default CardCarts;
