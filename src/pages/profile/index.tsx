import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import Container from "@/components/atoms/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";
import { Separator } from "@/components/atoms/separator";
import { Skeleton } from "@/components/atoms/skeleton";
import UpdateProfileForm from "@/components/organisme/auth/update-profile-form";
import { useAddress } from "@/services/api/auth/use-address";
import { useCurrentUser } from "@/services/api/auth/use-current-user";

const ProfilePage = () => {
  const { data: currentUser, isLoading } = useCurrentUser();
  const { data: address } = useAddress();
  return (
    <div>
      <Container>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">User Profile</h1>
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              {currentUser?.image && (
                <figure className="rounded-full overflow-hidden border border-border aspect-square max-w-[200px] mb-4">
                  <img src={currentUser?.image} alt="profile_image" />
                </figure>
              )}
              <Separator />
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ) : (
                <div className="space-y-4 mt-4">
                  <ProfileItem label="Username" value={currentUser?.username} />
                  <ProfileItem label="Email" value={currentUser?.email} />
                  <ProfileItem label="Phone" value={currentUser?.phone} />
                  <ProfileItem label="Role" value={currentUser?.role} />
                  <ProfileItem
                    label="Verification Status"
                    value={
                      currentUser?.isVerified ? "Verified" : "Not Verified"
                    }
                    badge={currentUser?.isVerified}
                  />
                  <Card className="flex flex-col justify-start items-start w-full">
                    <CardHeader>
                      <span className="font-semibold mb-4">Address </span>
                    </CardHeader>
                    <CardContent className="w-full">
                      <ul className="w-full flex flex-col items-start space-y-4">
                        <li className="w-full flex items-center justify-between">
                          <span className="font-semibold">City : </span>
                          <span className="text-gray-600">
                            {address[0]?.city}
                          </span>
                        </li>
                        <li className="w-full flex items-center justify-between">
                          <span className="font-semibold">Country : </span>
                          <span className="text-gray-600">
                            {address[0]?.country}
                          </span>
                        </li>
                        <li className="w-full flex items-center justify-between">
                          <span className="font-semibold">Provence : </span>
                          <span className="text-gray-600">
                            {address[0]?.province}
                          </span>
                        </li>
                        <li className="w-full flex items-center justify-between">
                          <span className="font-semibold">District : </span>
                          <span className="text-gray-600">
                            {address[0]?.district}
                          </span>
                        </li>
                        <li className="w-full flex items-center justify-between">
                          <span className="font-semibold">Sub District : </span>
                          <span className="text-gray-600">
                            {address[0]?.subDistrict}
                          </span>
                        </li>
                        <li className="w-full flex items-center justify-between">
                          <span className="font-semibold">Postal Code : </span>
                          <span className="text-gray-600">
                            {address[0]?.postalCode}
                          </span>
                        </li>
                        <li className="w-full flex items-center justify-between">
                          <span className="font-semibold">Detail : </span>
                          <span className="text-gray-600">
                            {address[0]?.detail}
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4 space-x-4">
                        <Button>Add Address</Button>
                        <Button>Edit default address</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex items-center justify-end gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"secondary"}>Edit Profile</Button>
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
                  <Button variant={"secondary"}>Update Password</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Password</DialogTitle>
                    <DialogDescription>
                      Please field old password and your new password
                    </DialogDescription>
                  </DialogHeader>
                  {/* <Form>
                    <form action=""></form>
                  </Form> */}
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;

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
