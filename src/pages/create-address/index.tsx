import CreateAddressView from "@/components/views/create-address-view";
import { Helmet } from "react-helmet-async";

const CreateAddressPage = () => {
  return (
    <>
      <Helmet>
        <title>Crete Address | E-commerce</title>
        <meta name="description" content="Create a new address for shipping" />
      </Helmet>
      <CreateAddressView />;
    </>
  );
};

export default CreateAddressPage;
