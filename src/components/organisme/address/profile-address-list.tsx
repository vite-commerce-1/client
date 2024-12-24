import { buttonVariants } from "../../atoms/button";
import { useAddress } from "@/features/address/utils/use-address";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
}

const ProfileAddressList = ({ className }: IProps) => {
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

  return (
    <div
      className={cn(
        "w-full border border-border rounded-md py-6 px-4 mt-8 space-y-6",
        className
      )}
    >
      <header className="section-title">Address</header>
      <ul className="w-full flex flex-col items-start space-y-4">
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">City:</span>
          <span className="text-gray-600">{defaultAddress?.city}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Country:</span>
          <span className="text-gray-600">{defaultAddress?.country}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Province:</span>{" "}
          {/* Perbaiki typo di sini */}
          <span className="text-gray-600">{defaultAddress?.province}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">District:</span>
          <span className="text-gray-600">{defaultAddress?.district}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Sub District:</span>
          <span className="text-gray-600">{defaultAddress?.subDistrict}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Postal Code:</span>
          <span className="text-gray-600">{defaultAddress?.postalCode}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Detail:</span>
          <span className="text-gray-600">{defaultAddress?.detail}</span>
        </li>
      </ul>
      <Link
        to="/manage-address"
        className={buttonVariants({ variant: "outline" })}
      >
        Manage address
      </Link>
    </div>
  );
};

export default ProfileAddressList;
