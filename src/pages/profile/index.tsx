import ProfileView from "@/components/views/profile-view";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Profile - E-Commerce</title>
        <meta name="description" content="Profile page" />
      </Helmet>
      <ProfileView />;
    </>
  );
};

export default ProfilePage;
