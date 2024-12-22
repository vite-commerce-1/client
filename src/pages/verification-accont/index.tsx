import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import Container from "@/components/atoms/container";
import { Form, FormField, FormItem } from "@/components/atoms/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/atoms/input-otp";
import {
  useVerificationAccount,
  verificationSchema,
} from "@/services/api/auth/use-verification-account";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const VerificationAccountPage = () => {
  const form = useForm<z.infer<typeof verificationSchema>>({
    resolver: zodResolver(verificationSchema),
  });

  const { mutate: verification, status } = useVerificationAccount();
  const isLoading = status === "pending";

  const onSubmit = async (data: z.infer<typeof verificationSchema>) => {
    verification(data);
  };

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  name="otp"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-4 w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>
              </form>
            </Form>
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

export default VerificationAccountPage;
