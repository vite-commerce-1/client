import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import Container from "@/components/atoms/container";
import CategoryCard from "@/components/moleculs/category-card";
import HeaderSection from "@/components/moleculs/header-section";
import ProductCard from "@/components/moleculs/product-card";
import { useCategories } from "@/services/api/category/use-categories";
import { useProducts } from "@/services/api/product/use-products";

const linkImages = [
  {
    id: 1,
    image:
      "https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
  },
  {
    id: 2,
    image:
      "https://static.vecteezy.com/system/resources/previews/008/247/816/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-search-vector.jpg",
  },
];

const HomePage = () => {
  const { data: categories } = useCategories();
  const { data: products } = useProducts();
  return (
    <div className="w-full">
      <section className="w-full">
        <Carousel>
          <CarouselContent>
            {linkImages.map((image, index) => (
              <CarouselItem key={index} className="h-[70vh] select-none">
                <img
                  src={image.image}
                  alt="banner"
                  className="w-full h-full object-cover object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <Container className="space-y-4 py-4">
        <HeaderSection title="Choose category" />
        <Carousel>
          <CarouselContent className="pb-4 pr-4">
            {categories?.map((category) => (
              <CarouselItem key={category._id} className="basis-1/1 w-[150px]">
                <CategoryCard category={category} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-1 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute -right-1 top-1/2 -translate-y-1/2" />
        </Carousel>
      </Container>

      <Container className="space-y-4 py-4">
        <HeaderSection title="Featured products" />
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </main>
      </Container>
    </div>
  );
};

export default HomePage;
