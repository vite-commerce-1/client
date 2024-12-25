import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
const CartsView = React.lazy(() => import("@/components/views/carts-view"));

const CartsPage = () => {
  return (
    <>
      <Helmet>
        <title>Carts - E-Commerce</title>
        <meta
          name="description"
          content="Your cart items and management page."
        />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <CartsView />
      </Suspense>
    </>
  );
};

export default CartsPage;
