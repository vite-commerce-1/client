// src/router/index.tsx
import { Suspense, lazy } from "react";
import MainLayout from "@/layouts/main-layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "@/components/shared/loader";
import ProtectedRoute from "./protected-route";
import VerificationAccountPage from "@/pages/verification-accont";
import ErrorBoundary from "@/components/shared/error-boundary";

// Lazy-loaded pages
const CreateAddressPage = lazy(() => import("@/pages/create-address"));
const LoginPage = lazy(() => import("@/pages/auth/login"));
const RegisterPage = lazy(() => import("@/pages/auth/register"));
const DetailProductPage = lazy(() => import("@/pages/detail-product"));
const HomePage = lazy(() => import("@/pages/home"));
const ProductsPage = lazy(() => import("@/pages/products"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const NotFoundPage = lazy(() => import("@/pages/error/page-not-found"));
const ProductByCategoryPage = lazy(
  () => import("@/pages/products-by-category")
);
const CartsPage = lazy(() => import("@/pages/carts-page"));

const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    {/* Protected Routes */}
    <Route element={<ProtectedRoute />}>
      <Route path="verify" element={<VerificationAccountPage />} />
      <Route path="add-address" element={<CreateAddressPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="profile/cart" element={<CartsPage />} />
    </Route>

    {/* Public Routes */}
    <Route index element={<HomePage />} />
    <Route path="products">
      <Route index element={<ProductsPage />} />
      <Route path=":id" element={<DetailProductPage />} />
      <Route path="category/:category" element={<ProductByCategoryPage />} />
    </Route>
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  },
  // Optional: Define an errorElement for handling routing errors
  // errorElement: <ErrorBoundary />,
});

const Router = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-screen h-screen">
            <Loader />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router;
