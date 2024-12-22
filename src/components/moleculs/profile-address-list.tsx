import { IAddress } from "@/services/interfaces/address-interface";
import { Dialog, DialogContent, DialogTrigger } from "../atoms/dialog";
import { Button } from "../atoms/button";
import ListAddress from "../organisme/auth/list-address";

interface IProps {
  address: IAddress;
}

const ProfileAddressList = ({ address }: IProps) => {
  return (
    <div className="border border-border rounded-md py-6 px-4 mt-8 space-y-6">
      <header className="section-title">Address</header>
      <ul className="w-full flex flex-col items-start space-y-4">
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">City : </span>
          <span className="text-gray-600">{address?.city}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Country : </span>
          <span className="text-gray-600">{address?.country}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Provence : </span>
          <span className="text-gray-600">{address?.province}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">District : </span>
          <span className="text-gray-600">{address?.district}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Sub District : </span>
          <span className="text-gray-600">{address?.subDistrict}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Postal Code : </span>
          <span className="text-gray-600">{address?.postalCode}</span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span className="font-semibold">Detail : </span>
          <span className="text-gray-600">{address?.detail}</span>
        </li>
      </ul>
      <div className="flex items-center justify-end gap-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Manage Address</Button>
          </DialogTrigger>
          <DialogContent>
            <ListAddress />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProfileAddressList;
