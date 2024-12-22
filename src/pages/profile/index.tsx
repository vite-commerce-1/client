import Container from "@/components/atoms/container";
import { UserProfile } from "@/components/organisme/auth/user-profile";

const userData = {
  username: "User",
  email: "user@example.com",
  phone: "0987654321",
  role: "user",
  isVerified: true,
  emailVerifiedAt: "2024-12-16T11:26:39.002Z",
};

const ProfilePage = () => {
  return (
    <div>
      <Container>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">User Profile</h1>
          <UserProfile user={userData} />
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
