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
const RegisterForm = React.lazy(
  () => import("@/features/auth/components/form-register")
);

const RegisterView = () => {
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
            <RegisterForm />
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

export default RegisterView;
