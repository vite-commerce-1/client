import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import Router from "./routes/router.tsx";
import "./index.css";
import { Toaster } from "./components/atoms/toaster.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import React, { Suspense } from "react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster />
          <Suspense fallback={<div>Loading...</div>}>
            <Router />
          </Suspense>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
