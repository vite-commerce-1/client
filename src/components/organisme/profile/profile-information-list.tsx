import { Badge } from "../../atoms/badge";

interface IProps {
  username: string;
  email: string;
  phone: string;
  isVerified: boolean;
}

const ProfileInformationList = ({
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
      <li className="flex justify-between items-center border-b border-border">
        <span className="font-semibold">Is Verified:</span>
        <span className="text-gray-600 flex items-center justify-end gap-4">
          {isVerified ? "Verified" : "Not Verified"}
          <Badge>{isVerified ? "Verified" : "Not Verified"}</Badge>
        </span>
      </li>
    </ul>
  );
};

export default ProfileInformationList;
