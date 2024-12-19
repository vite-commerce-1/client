import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import Container from "@/components/atoms/container";
import { Form, FormField, FormItem, FormLabel } from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { registerSchema, useRegister } from "@/services/api/auth/use-register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const RegisterPage = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: register } = useRegister();

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    register(data);
  };
  return (
    <div>
      <Container className="min-h-screen flex items-center justify-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Register</CardTitle>
            <CardDescription>
              Please field the form below to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="phone">Phone number</FormLabel>
                      <Input
                        id="phone_number"
                        placeholder="Enter your phone number"
                        type="text"
                        inputMode="numeric"
                        onInput={(e: React.FormEvent<HTMLInputElement>) => {
                          e.preventDefault();
                          const input = e.target as HTMLInputElement;
                          input.value = input.value.replace(/[^0-9]/g, "");
                        }}
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <Button
                  variant={"neutralReverse"}
                  type="submit"
                  className="w-full"
                >
                  Register
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm flex items-center justify-center gap-1">
              Already have an account?
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};

export default RegisterPage;
