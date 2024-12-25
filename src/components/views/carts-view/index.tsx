import Container from "@/components/atoms/container";
import TextHeaderSection from "@/components/shared/text-header-section";
import { useCarts } from "@/features/cart/utils/use-carts";
import { Skeleton } from "@/components/atoms/skeleton"; // Import Skeleton
import CardCarts from "@/components/organisme/carts/card-carts";

const CartsView = () => {
  const { data: carts, isLoading: cartsLoading } = useCarts();

  // Define the number of skeleton items to display
  const skeletonCount = 4; // Adjust based on grid columns

  if (cartsLoading) {
    return (
      <Container className="pt-20">
        <header>
          <TextHeaderSection title="Carts" />
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <Skeleton key={index} className="h-64 w-full rounded-md" />
          ))}
        </main>
      </Container>
    );
  }

  if (!carts?.items.length) {
    return (
      <Container className="pt-20">
        <header>
          <TextHeaderSection title="Carts" />
        </header>
        <div className="mt-8 text-center text-gray-600">
          Your cart is empty.
        </div>
      </Container>
    );
  }

  return (
    <Container className="pt-20">
      <header>
        <TextHeaderSection title="Carts" />
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {carts.items.map((cart, index: number) => (
          <CardCarts cart={cart} key={index} />
        ))}
      </main>
    </Container>
  );
};

export default CartsView;
