import { Button } from "@/components/atoms/button";
import { useSetDefaultAddress } from "../utils/use-set-default-address";
import { useCallback } from "react";

interface IProps {
  addressId: string;
}

const ActionSetDefaultAddress = ({ addressId }: IProps) => {
  const { mutate: setAsDefault, status: setDefaultStatus } =
    useSetDefaultAddress();

  const handleSetAsDefault = useCallback(() => {
    setAsDefault(addressId);
  }, [addressId, setAsDefault]);

  const isLoading = setDefaultStatus === "pending";
  return (
    <Button
      onClick={handleSetAsDefault}
      disabled={isLoading}
      variant={"outline"}
    >
      {isLoading ? "Loading..." : "Set as Default"}
    </Button>
  );
};

export default ActionSetDefaultAddress;
