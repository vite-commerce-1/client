import Container from "@/components/atoms/container";
import TextHeaderSection from "@/components/moleculs/text-header-section";
import CartsCard from "@/components/organisme/carts/carts-card";
import { useCarts } from "@/features/cart/utils/use-carts";

const CartsView = () => {
  const { data: carts } = useCarts();

  return (
    <div>
      <Container className="pt-20">
        <header>
          <TextHeaderSection title="Carts" />
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {carts?.items.map((cart, index: number) => (
            <CartsCard cart={cart} key={index} />
          ))}
        </main>
      </Container>
    </div>
  );
};

export default CartsView;
