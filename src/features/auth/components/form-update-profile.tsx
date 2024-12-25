import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateAccout } from "@/features/auth/utils/use-update-account"; // Assuming useUpdateAccout is correctly set up for API call
import { Input } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Button } from "@/components/atoms/button";
import { DialogClose } from "@/components/atoms/dialog";

// Validation schema with optional fields
export const updateAccountSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  image: z.instanceof(FileList).optional(),
});

// Form component to update user account
const FormUpdateProfile = () => {
  const form = useForm<z.infer<typeof updateAccountSchema>>({
    resolver: zodResolver(updateAccountSchema),
    defaultValues: {
      username: undefined,
      email: undefined,
      phone: undefined,
      image: undefined,
    },
  });

  // Mutation hook for updating the account
  const { mutateAsync, status } = useUpdateAccout();
  const isLoading = status === "pending";

  const onSubmit = async (data: z.infer<typeof updateAccountSchema>) => {
    const formData = new FormData();

    if (data.username) formData.append("username", data.username);
    if (data.email) formData.append("email", data.email);
    if (data.phone) formData.append("phone", data.phone);

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    try {
      await mutateAsync(formData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your username" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your phone number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="image"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
                    onChange={(e) => {
                      field.onChange(e.target.files);
                    }}
                  />
                </FormControl>
                <FormDescription>format: jpg, jpeg, png</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-4 flex justify-between">
            <DialogClose type="button" className="btn btn-secondary">
              <Button type="button" variant={"destructive"}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormUpdateProfile;
