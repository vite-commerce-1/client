import { Form, FormField, FormItem } from "@/components/atoms/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/atoms/input-otp";
import { Button } from "@/components/atoms/button";
import {
  useVerificationAccount,
  verificationSchema,
} from "@/features/auth/utils/use-verification-account";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormVerification = () => {
  const form = useForm<z.infer<typeof verificationSchema>>({
    resolver: zodResolver(verificationSchema),
  });

  const { mutate: verification, status } = useVerificationAccount();
  const isLoading = status === "pending";

  const onSubmit = async (data: z.infer<typeof verificationSchema>) => {
    verification(data);
  };
  return (
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
        <Button type="submit" className="mt-4 w-full" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </Form>
  );
};

export default FormVerification;
