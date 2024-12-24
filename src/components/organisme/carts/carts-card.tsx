import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import {
  createCartSchema,
  useCreateCart,
} from "@/features/cart/utils/use-create-cart";
import { useRemoveCartItem } from "@/features/cart/utils/use-remove-cart-item";
import { useProduct } from "@/features/product/use-product";
import { formatCurrency } from "@/lib/format-currency";
import { ICartItem } from "@/services/interfaces/cart-interface";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

interface IProps {
  cart: ICartItem;
}

const CartsCard = ({ cart }: IProps) => {
  const { mutate: createCart } = useCreateCart();
  const { mutate: remove } = useRemoveCartItem();
  const { data: product } = useProduct(cart.product._id!);
  const [quantity, setQuantity] = useState(cart?.quantity);

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plusQuantity = () => {
    if (quantity < product?.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleCreateCart = (data: z.infer<typeof createCartSchema>) => {
    createCart({ productId: data.productId, quantity: data.quantity });
  };

  if (!cart) {
    return "Loading";
  }

  if (!product) {
    return "Loading";
  }

  return (
    <Card>
      <CardHeader>
        <figure>
          <img src={product.image[0]} alt={product.name} />
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
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div className="flex items-center justify-center gap-x-2">
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={minusQuantity}
              disabled={quantity === 1}
            >
              <MinusIcon />
            </Button>
            <Input
              type="text"
              inputMode="numeric"
              value={quantity}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/[^0-9]/g, ""); // Allow only numeric characters
              }}
              onChange={(e) => setQuantity(Number(e.target.value))} // Use setQuantity directly
              className="w-full text-center"
            />

            <Button
              variant={"outline"}
              size={"icon"}
              onClick={plusQuantity}
              disabled={quantity === product.stock}
            >
              <PlusIcon />
            </Button>
          </div>
          <Button
            className="w-full"
            onClick={() =>
              handleCreateCart({ productId: product._id, quantity })
            }
          >
            Save
          </Button>
        </div>
        <Button
          className="w-full"
          variant={"destructive"}
          onClick={() => remove(product._id)}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartsCard;
