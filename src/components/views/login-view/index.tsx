// src/components/views/LoginView.tsx
import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import Container from "@/components/atoms/container";
import FormLogin from "@/features/auth/components/form-login";

const LoginView: FC = () => {
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormLogin />
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
  );
};

export default React.memo(LoginView);
