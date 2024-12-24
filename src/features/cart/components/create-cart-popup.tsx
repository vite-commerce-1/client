import { Button } from "@/components/atoms/button";
import ButtonTooltip from "@/components/atoms/button-tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";
import { Input } from "@/components/atoms/input";
import { MinusIcon, PlusIcon, ShoppingBagIcon } from "lucide-react";
import { useState } from "react";
import { useCreateCart } from "../utils/use-create-cart";
import { IProduct } from "@/services/interfaces/product-interface";
import { formatCurrency } from "@/lib/format-currency";

interface IProps {
  product: IProduct;
  stock: number;
}

const CreateCartPopup = ({ product, stock }: IProps) => {
  const [quantity, setQuantity] = useState(1);
  const { mutate: createCart } = useCreateCart();

  // Handle quantity adjustments
  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plusQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  // Handle form submission or Enter key press
  const handleCreateCart = () => {
    createCart({ productId: product._id, quantity });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      handleCreateCart();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ButtonTooltip content="Add to cart">
            <ShoppingBagIcon />
          </ButtonTooltip>
        </Button>
      </DialogTrigger>
      <DialogContent className="space-x-4 w-fit">
        <DialogHeader className="flex items-center justify-center flex-col">
          <DialogTitle>Add to cart</DialogTitle>
          <DialogDescription>Select quantity</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-2">
          <figure className="flex items-start justify-start gap-4">
            <img
              src={product?.image[0]}
              alt={product?.name}
              className="aspect-square w-24"
            />
            <div className="flex items-start justify-start flex-col">
              <figcaption className="text-base font-semibold tracking-tight">
                {product?.name}
              </figcaption>
              <p className="mt-2 font-medium">
                <span>Price : </span>
                <span>{formatCurrency(product?.price)}</span>
              </p>
            </div>
          </figure>
          <div className="flex items-center justify-center gap-x-2">
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={minusQuantity}
              disabled={quantity === 1}
              className="aspect-square"
            >
              <MinusIcon />
            </Button>
            <Input
              type="text"
              inputMode="numeric"
              value={quantity}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/[^0-9]/g, "");
              }}
              onChange={(e) => setQuantity(Number(e.target.value))}
              onKeyDown={handleKeyDown} // Listen for Enter key press
              className="w-full text-center"
            />
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={plusQuantity}
              disabled={quantity === stock}
              className="aspect-square"
            >
              <PlusIcon />
            </Button>
          </div>
          <Button
            className="w-full"
            onClick={handleCreateCart} // Trigger cart creation
          >
            Add to cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCartPopup;
