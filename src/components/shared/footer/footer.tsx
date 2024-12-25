import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import Logo from "@/components/atoms/logo";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/atoms/form";
import React from "react";

const Container = React.lazy(() => import("@/components/atoms/container"));

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const Footer = () => {
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof subscribeSchema>) => {
    console.log(data);
  };

  return (
    <footer className="w-full bg-main border-t-2 border-border">
      <Container className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 py-4">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <ul className="flex flex-col items-start gap-2">
            <li>
              <Link to={"/"}>New Arrivals</Link>
            </li>
            <li>
              <Link to={"/"}>Best Seller</Link>
            </li>
            <li>
              <Link to={"/"}>Sale</Link>
            </li>
            <li>
              <Link to={"/"}>Collections</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl md:text-2xl tracking-widest font-semibold font-bebas text-nowrap">
            Customer Services
          </h1>
          <ul className="flex flex-col items-start gap-2">
            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/"}>Shipping & Returns</Link>
            </li>
            <li>
              <Link to={"/"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/"}>Size Guide</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl md:text-2xl tracking-widest font-semibold font-bebas text-nowrap">
            About Us
          </h1>
          <ul className="flex flex-col items-start gap-2">
            <li>
              <Link to={"/"}>Our Story</Link>
            </li>
            <li>
              <Link to={"/"}>Sustainibility</Link>
            </li>
            <li>
              <Link to={"/"}>Careers</Link>
            </li>
            <li>
              <Link to={"/"}>Press</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl md:text-2xl tracking-widest font-semibold font-bebas text-nowrap">
            Stay Connected
          </h1>
          <p>Subscribe to our newsletter for exclusive offers and updates.</p>
          <Form {...form}>
            <form
              className="grid grid-cols-1 gap-y-1"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="w-full">Subscribe</Button>
            </form>
          </Form>
          <ul className="flex justify-start gap-2">
            <li>
              <Link to="">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link to="">
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link to="">
                <TwitterIcon />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
