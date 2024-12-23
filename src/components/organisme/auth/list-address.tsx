import { useAddress } from "@/services/api/address/use-address";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Button } from "@/components/atoms/button";
import { useNavigate } from "react-router-dom";
import React from "react";

const AddressCard = React.lazy(
  () => import("@/components/moleculs/address-card")
);
const ButtonTooltip = React.lazy(
  () => import("@/components/atoms/button-tooltip")
);
const ListAddress = () => {
  const navigate = useNavigate();
  const { data: addresses } = useAddress();

  const defaultAddress = Array.isArray(addresses)
    ? addresses.find((address) => address.defaultAddress)
    : addresses;

  const notDefaultAddress = Array.isArray(addresses)
    ? addresses.filter((address) => !address.defaultAddress)
    : addresses;

  return (
    <div className="relative max-h-[90vh]">
      <h1 className="section-title mb-4">Default Address</h1>
      {defaultAddress && <AddressCard address={defaultAddress} />}
      <ScrollArea className="h-full w-full pr-4 relative">
        <h1 className="section-title mt-8 mb-4">Other Address</h1>
        {Array.isArray(notDefaultAddress)
          ? notDefaultAddress.map((address) => (
              <AddressCard key={address._id} address={address} />
            ))
          : notDefaultAddress && <AddressCard address={notDefaultAddress} />}
      </ScrollArea>
      <ButtonTooltip content="Add Address">
        <Button
          onClick={() => navigate("/add-address")}
          size="icon"
          className="rounded-full fixed bottom-4 right-4 z-[999]"
        >
          +
        </Button>
      </ButtonTooltip>
    </div>
  );
};

export default ListAddress;
