import { useAddress } from "@/features/address/utils/use-address";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Button } from "@/components/atoms/button";
import { useNavigate } from "react-router-dom";
import AddressCard from "./address-card";
import ButtonTooltip from "@/components/atoms/button-tooltip";

const ListAddress = () => {
  const navigate = useNavigate();
  const { data: addresses, isLoading, isError } = useAddress();

  // Menangani loading state
  if (isLoading) {
    return <div>Loading addresses...</div>; // Tampilkan loading state
  }

  // Menangani error state
  if (isError) {
    return <div>Error fetching addresses.</div>; // Tampilkan error state
  }

  const defaultAddress = Array.isArray(addresses)
    ? addresses.find((address) => address.defaultAddress)
    : null;

  const notDefaultAddress = Array.isArray(addresses)
    ? addresses.filter((address) => !address.defaultAddress)
    : [];

  return (
    <div className="relative max-h-[90vh]">
      <ScrollArea className="h-full w-full pr-4 relative">
        <h1 className="section-title mb-4">Default Address</h1>
        {defaultAddress && <AddressCard address={defaultAddress} />}
        <h1 className="section-title mt-8 mb-4">Other Address</h1>
        {notDefaultAddress.length > 0 ? (
          notDefaultAddress.map((address) => (
            <AddressCard key={address._id} address={address} />
          ))
        ) : (
          <div>No other addresses found.</div> // Tampilkan pesan jika tidak ada alamat
        )}
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
