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
import ProfileAddressList from "@/components/organisme/address/profile-address-list";
import ProfileImage from "@/components/organisme/profile/profile-image";
import ProfileInformationList from "@/components/organisme/profile/profile-information-list";
import UpdateProfileForm from "@/features/auth/components/update-profile-form";
import { useCurrentUser } from "@/features/auth/utils/use-current-user";

const ProfileView = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div>
      <Container className="pt-20">
        <h1 className="text-3xl font-bebas tracking-wider font-bold mb-6">User Profile</h1>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 grid-flow-row">
            {/* Profile image */}
            {currentUser && (
              <ProfileImage
                image={currentUser?.image}
                className="col-start-1"
              />
            )}

            {/* Profile information list */}
            {currentUser && (
              <ProfileInformationList
                username={currentUser?.username}
                email={currentUser?.email}
                phone={currentUser?.phone}
                isVerified={currentUser?.isVerified}
              />
            )}

            {/* Profile action */}
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
          </CardContent>
          <CardFooter>
            <ProfileAddressList />
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};

export default ProfileView;
