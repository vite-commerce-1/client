import ProductSlider from "@/components/organisme/products/product-slider";
import CategorySlider from "../../organisme/category/category-slider";
import Hero from "./hero";

const HomeView = () => {
  return (
    <div className="w-full">
      <Hero />
      <CategorySlider />
      <ProductSlider />
    </div>
  );
};

export default HomeView;
