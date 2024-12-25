import { Helmet } from "react-helmet-async";
import LoginView from "@/components/views/login-view";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - E-Commerce</title>
        <meta name="description" content="Login to access your account" />
      </Helmet>
      <LoginView />
    </>
  );
};

export default LoginPage;
