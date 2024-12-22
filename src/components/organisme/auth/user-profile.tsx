import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Badge } from "@/components/atoms/badge";

interface UserProfileProps {
  user: {
    username: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
    emailVerifiedAt: string;
  };
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ProfileItem label="Username" value={user.username} />
          <ProfileItem label="Email" value={user.email} />
          <ProfileItem label="Phone" value={user.phone} />
          <ProfileItem label="Role" value={user.role} />
          <ProfileItem
            label="Verification Status"
            value={user.isVerified ? "Verified" : "Not Verified"}
            badge={user.isVerified}
          />
        </div>
      </CardContent>
    </Card>
  );
}

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
