import RegisterView from "@/components/views/register-view";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register - E-Commerce</title>
        <meta name="description" content="Register to create an account" />
      </Helmet>
      <RegisterView />;
    </>
  );
};

export default RegisterPage;
