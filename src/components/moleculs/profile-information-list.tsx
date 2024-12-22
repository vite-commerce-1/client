import { ICurrentUser } from "@/services/interfaces/user-interface";
import { Badge } from "../atoms/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../atoms/dialog";
import { Button } from "../atoms/button";
import UpdateProfileForm from "../organisme/auth/update-profile-form";

interface IProps {
  user: ICurrentUser;
}

const ProfileInformationList = ({ user }: IProps) => {
  return (
    <>
      <figure className="max-w-[200px] rounded-full overflow-hidden">
        <img src={user?.image} alt="" />
      </figure>
      <div className="space-y-3 mt-4">
        <ProfileItem label="Username" value={user?.username} />
        <ProfileItem label="Email" value={user?.email} />
        <ProfileItem label="Phone" value={user?.phone} />
        <ProfileItem
          label="Verification Status"
          value={user?.isVerified ? "Verified" : "Not Verified"}
          badge={user?.isVerified}
        />
      </div>
      <div className="flex items-center justify-end gap-x-4 mt-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Please field the form below to update your profile
              </DialogDescription>
            </DialogHeader>
            <UpdateProfileForm />
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Update Password</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Password</DialogTitle>
              <DialogDescription>
                Please field old password and your new password
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ProfileInformationList;

function ProfileItem({
  label,
  value,
  badge,
}: {
  label: string;
  value: string;
  badge?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-semibold">{label}:</span>
      <span className="text-gray-600">
        {value}
        {badge && <Badge className="ml-2">Verified</Badge>}
      </span>
    </div>
  );
}
