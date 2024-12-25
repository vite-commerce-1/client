import { Button } from "@/components/atoms/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import {
  registerSchema,
  useRegister,
} from "@/features/auth/utils/use-register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormRegister = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: register, status } = useRegister();
  const isLoading = status === "pending";

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    register(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </form>
    </Form>
  );
};

export default FormRegister;
