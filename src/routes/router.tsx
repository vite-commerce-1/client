import { Suspense, lazy } from "react";
import MainLayout from "@/layouts/main-layout";
const AddAddressPage = lazy(() => import("@/pages/create-address"));
const LoginPage = lazy(() => import("@/pages/auth/login"));
const RegisterPage = lazy(() => import("@/pages/auth/register"));
const DetailProductPage = lazy(() => import("@/pages/detail-product"));
const HomePage = lazy(() => import("@/pages/home"));
const ProductsPage = lazy(() => import("@/pages/products"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const NotFoundPage = lazy(() => import("@/pages/error/page-not-found"));
const VerificationAccountPage = lazy(
  () => import("@/pages/verification-accont")
);
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "@/components/moleculs/loader";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<DetailProductPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/add-address" element={<AddAddressPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/verification-account" element={<VerificationAccountPage />} />
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
});

const Router = () => {
  return (
    <Suspense
      fallback={
        <div className="relative w-screen h-screen">
          <Loader />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
