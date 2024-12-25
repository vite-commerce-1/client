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
import { createCartSchema, useCreateCart } from "../utils/use-create-cart";
import { IProduct } from "@/services/interfaces/product-interface";
import { formatCurrency } from "@/lib/format-currency";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/atoms/form";
import { useNavigate } from "react-router-dom";

interface IProps {
  product: IProduct;
  stock: number;
}

const PopupCreateCart = ({ product, stock }: IProps) => {
  const { mutate: createCart } = useCreateCart();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof createCartSchema>>({
    resolver: zodResolver(createCartSchema),
    defaultValues: {
      productId: product._id,
      quantity: 1,
    },
  });

  const { watch, setValue } = form;
  const quantity = watch("quantity");

  // Handle quantity adjustments
  const minusQuantity = () => {
    if (quantity > 1) {
      setValue("quantity", quantity - 1, { shouldValidate: true });
    }
  };

  const plusQuantity = () => {
    if (quantity < stock) {
      setValue("quantity", quantity + 1, { shouldValidate: true });
    }
  };

  // Handle form submission or Enter key press
  const handleCreateCart = async (data: z.infer<typeof createCartSchema>) => {
    createCart(data);
    navigate("/profile/cart");
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
          <figure className="flex flex-col md:flex-row items-start justify-start gap-4">
            <img
              src={product?.image[0]}
              alt={product?.name}
              className="aspect-square w-full rounded-md md:w-24"
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleCreateCart)}
              className="w-full flex items-start justify-start gap-2"
            >
              <div className="flex items-center justify-center gap-x-2">
                <Button
                  type="button"
                  variant={"outline"}
                  size={"icon"}
                  onClick={minusQuantity}
                  disabled={quantity === 1}
                  className="aspect-square"
                >
                  <MinusIcon />
                </Button>
                <FormField
                  name="quantity"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          inputMode="numeric"
                          value={quantity}
                          onInput={(e: React.FormEvent<HTMLInputElement>) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.replace(/[^0-9]/g, ""); // Allow only numeric characters
                            field.onChange(input.value); // Pass cleaned value to form state
                          }}
                          className="w-full text-center"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant={"outline"}
                  size={"icon"}
                  onClick={plusQuantity}
                  disabled={quantity === stock}
                  className="aspect-square"
                >
                  <PlusIcon />
                </Button>
              </div>
              <Button className="w-full" type="submit">
                Add to cart
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupCreateCart;
