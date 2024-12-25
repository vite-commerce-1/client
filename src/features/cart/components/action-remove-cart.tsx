import { Button } from "@/components/atoms/button";
import { useRemoveCartItem } from "../utils/use-remove-cart-item";

interface IProps {
  productId: string;
}
const ActionRemoveCart = ({ productId }: IProps) => {
  const { mutate: remove, status: removeCartStatus } = useRemoveCartItem();
  const isLoading = removeCartStatus === "pending";
  return (
    <Button
      className="w-full"
      variant={"destructive"}
      disabled={isLoading}
      onClick={() => remove(productId)}
    >
      {isLoading ? "Loading..." : "Remove"}
    </Button>
  );
};

export default ActionRemoveCart;
