import React from "react";

const Hero = React.lazy(() => import("@/components/organisme/home/hero"));
const CategorySlider = React.lazy(
  () => import("@/components/organisme/home/category-slider")
);
const ProductSlider = React.lazy(
  () => import("@/components/organisme/home/product-slider")
);

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
