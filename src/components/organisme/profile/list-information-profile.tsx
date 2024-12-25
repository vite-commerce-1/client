import { Link } from "react-router-dom";
import { Badge } from "../../atoms/badge";
import { buttonVariants } from "@/components/atoms/button";

interface IProps {
  username: string;
  email: string;
  phone: string;
  isVerified: boolean;
}

const ListInformationProfile = ({
  username,
  email,
  phone,
  isVerified,
}: IProps) => {
  if (!username && !email && !phone && !isVerified) {
    return (
      <ul className="space-y-3 mt-4">
        <li className="flex justify-between items-center">
          <span className="font-semibold">No data available</span>
        </li>
      </ul>
    );
  }

  return (
    <ul className="space-y-3 mt-4">
      <li className="flex justify-between items-center border-b border-border">
        <span className="font-semibold">Username:</span>
        <span className="text-gray-600">{username}</span>
      </li>
      <li className="flex justify-between items-center border-b border-border">
        <span className="font-semibold">Email:</span>
        <span className="text-gray-600">{email}</span>
      </li>
      <li className="flex justify-between items-center border-b border-border">
        <span className="font-semibold">Phone No:</span>
        <span className="text-gray-600">{phone}</span>
      </li>
      {!isVerified ? (
        <Link to={"/verify"} className={buttonVariants()}>
          Verification Account
        </Link>
      ) : (
        <li className="flex justify-between items-center border-b border-border">
          <span className="font-semibold">Is Verified:</span>
          {isVerified && <Badge>Verified</Badge>}
        </li>
      )}
    </ul>
  );
};

export default ListInformationProfile;
