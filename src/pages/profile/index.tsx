import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { useAddress } from "@/services/api/address/use-address";
import { useCurrentUser } from "@/services/api/auth/use-current-user";
import { conditionalRender } from "@/lib/render-helper";
import { Skeleton } from "@/components/atoms/skeleton";
import ProfileAddressList from "@/components/moleculs/profile-address-list";

const Container = React.lazy(() => import("@/components/atoms/container"));
const ProfileInformationList = React.lazy(
  () => import("@/components/moleculs/profile-information-list")
);

const ProfilePage = () => {
  const { data: currentUser, isLoading: currentUserLoading } = useCurrentUser();
  const { data: addresses, isLoading: addressLoading } = useAddress();

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
              {conditionalRender(
                currentUserLoading,
                () => (
                  <>
                    <Skeleton className="max-w-[200px] rounded-full overflow-hidden aspect-square" />
                    <div className="space-y-3 mt-4">
                      <Skeleton className="h-6" />
                      <Skeleton className="h-6" />
                      <Skeleton className="h-6" />
                      <Skeleton className="h-6" />
                      <div className="flex items-center justify-end gap-4">
                        <Skeleton className="h-10 max-w-[200px] w-full" />
                        <Skeleton className="h-10 max-w-[200px] w-full" />
                      </div>
                    </div>
                  </>
                ),
                () => {
                  return currentUser ? (
                    <ProfileInformationList user={currentUser} />
                  ) : (
                    <h1>Not Loged in</h1>
                  );
                }
              )}

              {conditionalRender(
                addressLoading,
                () => (
                  <div className="border border-border rounded-md p-4 mt-8">
                    <Skeleton className="h-10 w-full max-w-[200px]" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-14 justify-self-end max-w-[200px] mt-4" />
                  </div>
                ),
                () => {
                  return defaultAddress ? (
                    <ProfileAddressList address={defaultAddress} />
                  ) : (
                    <h1>Not have address</h1>
                  );
                }
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
