import VerificationAccountView from "@/components/views/verification-account-view";
import { Helmet } from "react-helmet-async";

const VerificationAccountPage = () => {
  return (
    <>
      <Helmet>
        <title>Verification Account - E-Commerce</title>
        <meta name="description" content="Verification Account" />
      </Helmet>
      <VerificationAccountView />;
    </>
  );
};

export default VerificationAccountPage;
