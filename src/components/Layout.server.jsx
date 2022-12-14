import {
  useShopQuery,
  CacheLong,
  gql,
  useUrl,
  Link,
  Seo,
} from "@shopify/hydrogen";
import { Suspense } from "react";
import Header from './Header.client'

/**
 * This is a server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
  const { pathname } = useUrl();
  const isHome = pathname === "/";

  const {
    data: { shop },
  } = useShopQuery({ query: SHOP_QUERY, cache: CacheLong });
  

  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{ title: shop.name, description: shop.description }}
        />
      </Suspense>
      <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to Content
          </a>
        </div>
        <Header shop = {shop}/>
        <main role="main" id="mainContent" className="flex-grow">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
