import { useAddress } from "@/services/api/address/use-address";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Button } from "@/components/atoms/button";

import AddressCard from "@/components/moleculs/address-card";
import ButtonTooltip from "@/components/atoms/button-tooltip";
import { useNavigate } from "react-router-dom";
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
    <div>
      <ScrollArea className="h-[90vh] w-full pr-4 relative">
        <h1 className="section-title mb-4">Default Address</h1>
        {defaultAddress && <AddressCard address={defaultAddress} />}
        <h1 className="section-title mt-8 mb-4">Other Address</h1>
        {Array.isArray(notDefaultAddress)
          ? notDefaultAddress.map((address) => (
              <AddressCard key={address._id} address={address} />
            ))
          : notDefaultAddress && <AddressCard address={notDefaultAddress} />}
        <ButtonTooltip content="Add Address">
          <Button
            onClick={() => navigate("/add-address")}
            size="icon"
            className="rounded-full fixed bottom-4 right-4 z-[999]"
          >
            +
          </Button>
        </ButtonTooltip>
      </ScrollArea>
    </div>
  );
};

export default ListAddress;
