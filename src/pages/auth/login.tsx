import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import React from "react";
import { Link } from "react-router-dom";

const Container = React.lazy(() => import("@/components/atoms/container"));
const LoginForm = React.lazy(
  () => import("@/components/organisme/auth/login-form")
);

const LoginPage = () => {
  return (
    <div>
      <Container className="min-h-screen flex items-center justify-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
