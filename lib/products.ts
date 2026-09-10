import { isShopifyConfigured, shopifyFetch } from "./shopify";
import { PRODUCT_BY_HANDLE_QUERY, PRODUCTS_QUERY } from "./shopify-queries";
import type { Product } from "./shopify-types";

export async function getProducts(first = 24): Promise<Product[]> {
  if (!isShopifyConfigured()) return [];

  try {
    const data = await shopifyFetch<{ products: { nodes: Product[] } }>(
      PRODUCTS_QUERY,
      { first },
    );
    return data.products.nodes;
  } catch {
    return [];
  }
}

export async function getProduct(handle: string): Promise<Product | null> {
  if (!isShopifyConfigured()) return null;

  try {
    const data = await shopifyFetch<{ product: Product | null }>(
      PRODUCT_BY_HANDLE_QUERY,
      { handle },
    );
    return data.product;
  } catch {
    return null;
  }
}
