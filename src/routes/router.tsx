import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route>
    <Route>
      <Route
        path="/"
        element={<h1 className="text-xs text-red-500 font-bold">Home</h1>}
      />
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
