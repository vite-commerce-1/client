import Container from "@/components/atoms/container";
import CreateAddressForm from "@/features/address/components/create-address-form";

const CreateAddressView = () => {
  return (
    <div>
      <Container className="pt-20">
        <CreateAddressForm />
      </Container>
    </div>
  );
};

export default CreateAddressView;
