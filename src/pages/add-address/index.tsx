import React from "react";

const Container = React.lazy(() => import("@/components/atoms/container"));
const AddAddressForm = React.lazy(
  () => import("@/components/organisme/auth/add-address-form")
);

const AddAddressPage = () => {
  return (
    <div>
      <Container className="pt-20">
        <AddAddressForm />
      </Container>
    </div>
  );
};

export default AddAddressPage;
