import MainLayout from "@/layouts/main-layout";
import HomePage from "@/pages/home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
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
  return <RouterProvider router={router} />;
};

export default Router;
