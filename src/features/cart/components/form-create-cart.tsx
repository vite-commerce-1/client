import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCartSchema, useCreateCart } from "../utils/use-create-cart";
import { ICartItem } from "@/services/interfaces/cart-interface";
import { useProduct } from "@/features/product/utils/use-product";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/atoms/button";
import { MinusIcon, PlusIcon } from "lucide-react";

interface IProps {
  cart: ICartItem;
}
const FormCreateCart = ({ cart }: IProps) => {
  const navigate = useNavigate();

  const { mutate: createCart, status: createCartStatus } = useCreateCart();
  const { data: product } = useProduct(cart.product._id!);
  const createCartLoading = createCartStatus === "pending";

  const form = useForm<z.infer<typeof createCartSchema>>({
    resolver: zodResolver(createCartSchema),
    defaultValues: {
      productId: cart.product._id || "",
      quantity: cart.quantity || 1,
    },
  });

  const { watch, setValue } = form;
  const quantity = watch("quantity");

  const minusQuantity = () => {
    if (quantity > 1)
      setValue("quantity", quantity - 1, { shouldValidate: true });
  };

  const plusQuantity = () => {
    if (quantity < product?.stock) {
      setValue("quantity", quantity + 1, { shouldValidate: true });
    }
  };

  const handleCreateCart = async (data: z.infer<typeof createCartSchema>) => {
    createCart(data);
    navigate("/profile/cart");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateCart)}
        className="w-full flex flex-col items-center justify-center gap-2"
      >
        <div className="flex items-center justify-center gap-x-2">
          <Button
            type="button"
            variant={"outline"}
            size={"icon"}
            onClick={minusQuantity}
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
                    value={field.value}
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
            disabled={quantity === product.stock}
            className="aspect-square"
          >
            <PlusIcon />
          </Button>
        </div>
        <Button className="w-full" type="submit" disabled={createCartLoading}>
          {createCartLoading ? "Loading..." : "Save"}
        </Button>
      </form>
    </Form>
  );
};

export default FormCreateCart;
