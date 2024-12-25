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
import TextHeaderSection from "@/components/shared/text-header-section";
import ProfileAddressList from "@/components/organisme/address/card-default-address";
import ProfileImage from "@/components/organisme/profile/image-profile";
import ProfileInformationList from "@/components/organisme/profile/list-information-profile";
import UpdatePasswordForm from "@/features/auth/components/form-update-password";
import UpdateProfileForm from "@/features/auth/components/form-update-profile";
import { useCurrentUser } from "@/features/auth/utils/use-current-user";

const ProfileView = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div>
      <Container className="pt-20">
        <TextHeaderSection title="Profile" />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl tracking-tight">
              Profile Information
            </CardTitle>
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
                    <UpdatePasswordForm />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
          {/* Profile address list */}
          <CardFooter>
            <ProfileAddressList />
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};

export default ProfileView;
