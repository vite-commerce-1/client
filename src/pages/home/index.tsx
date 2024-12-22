import Hero from "@/components/organisme/home/hero";
import CategorySlider from "./category-slider";
import ProductSlider from "./product-slider";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />

      <CategorySlider />

      <ProductSlider />
    </div>
  );
};

export default HomePage;
