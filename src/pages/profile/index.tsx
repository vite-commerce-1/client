import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import Container from "@/components/atoms/container";
import ProfileAddressList from "@/components/moleculs/profile-address-list";
import ProfileInformationList from "@/components/moleculs/profile-information-list";
import { useAddress } from "@/services/api/address/use-address";
import { useCurrentUser } from "@/services/api/auth/use-current-user";

const ProfilePage = () => {
  const { data: currentUser } = useCurrentUser();
  const { data: addresses } = useAddress();

  const defaultAddress = Array.isArray(addresses)
    ? addresses.find((address) => address.defaultAddress)
    : addresses;

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
              {currentUser && <ProfileInformationList user={currentUser} />}
              {defaultAddress && (
                <ProfileAddressList address={defaultAddress} />
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
