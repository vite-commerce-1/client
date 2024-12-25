import Container from "@/components/atoms/container";
import CreateAddressForm from "@/features/address/components/form-create-address";

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
