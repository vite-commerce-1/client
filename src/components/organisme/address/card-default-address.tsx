import { buttonVariants } from "../../atoms/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useDefaultAddress } from "@/features/address/utils/use-default-address";
import { Skeleton } from "@/components/atoms/skeleton"; // Adjust the import path as needed

interface IProps {
  className?: string;
}

const CardDefaultAddress = ({ className }: IProps) => {
  const { data: defaultAddress, isLoading } = useDefaultAddress();

  if (isLoading) {
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
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-4" />
          </li>
          <li className="w-full flex items-center justify-between">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-4" />
          </li>
          <li className="w-full flex items-center justify-between">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-4" />
          </li>
          <li className="w-full flex items-center justify-between">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-4" />
          </li>
          <li className="w-full flex items-center justify-between">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-4" />
          </li>
          <li className="w-full flex items-center justify-between">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-4" />
          </li>
          <li className="w-full flex items-center justify-between">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-4" />
          </li>
        </ul>
        <Skeleton className="w-40 h-10 mt-4" />
      </div>
    );
  }

  if (!defaultAddress) {
    return (
      <Link to={"/add-address"} className={buttonVariants({})}>
        Create address
      </Link>
    );
  }

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
          <span className="text-gray-600">{defaultAddress.city}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Country:</span>
          <span className="text-gray-600">{defaultAddress.country}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Province:</span>
          <span className="text-gray-600">{defaultAddress.province}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">District:</span>
          <span className="text-gray-600">{defaultAddress.district}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Sub District:</span>
          <span className="text-gray-600">{defaultAddress.subDistrict}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Postal Code:</span>
          <span className="text-gray-600">{defaultAddress.postalCode}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Detail:</span>
          <span className="text-gray-600">{defaultAddress.detail}</span>
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

export default CardDefaultAddress;
