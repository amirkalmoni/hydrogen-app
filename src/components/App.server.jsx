import React from "react";
import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Suspense } from "react";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";

function App() {
    /**
     * Suspense is a React component that suspends its content until the promise resolves.
     * It's useful for loading data while the page is still loading.
     * ShopifyProvider is a React component that provides the Shopify context to all of the components in the app.
     * FileRoutes is a React component that provides the routes for the app.
     */
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <FileRoutes />
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
