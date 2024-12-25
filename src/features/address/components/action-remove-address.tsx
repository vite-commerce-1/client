import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { useDeleteAddress } from "../utils/use-remove-address";
import { useCallback } from "react";

interface IProps {
  className?: string;
  addressId: string;
}

const ActionRemoveAddress = ({ className, addressId }: IProps) => {
  const { mutate: deleteAddress, status: deleteStatus } = useDeleteAddress();
  const isLoading = deleteStatus === "pending";

  const handleDelete = useCallback(() => {
    deleteAddress(addressId);
  }, [addressId, deleteAddress]);

  return (
    <Button
      onClick={handleDelete}
      disabled={isLoading}
      variant={"destructive"}
      className={cn(className, "")}
    >
      {isLoading ? "Loading..." : "Remove Address"}
    </Button>
  );
};

export default ActionRemoveAddress;
