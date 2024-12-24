import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import Container from "@/components/atoms/container";
import VerificationForm from "@/features/auth/components/verification-form";

const VerificationAccountView = () => {
  return (
    <div>
      <Container className="min-h-screen flex items-center justify-center">
        <Card className="max-w-sm">
          <CardHeader className="flex flex-col items-center justify-center">
            <h1 className="section-title">Verification Account</h1>
            <p className="text-center">
              Please check your email to verify your account
            </p>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <VerificationForm />
          </CardContent>
          <CardFooter className="flex items-center justify-center flex-col gap-3">
            <p className="text-center">
              If you don&apos;t receive an email, please regenerate OTP code
            </p>
            <Button>Regenerate OTP</Button>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};

export default VerificationAccountView;
