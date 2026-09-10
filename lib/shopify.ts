const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const endpoint = domain
  ? `https://${domain}/api/2025-01/graphql.json`
  : null;

type ShopifyResponse<T> = {
  data: T;
  errors?: { message: string }[];
};

export function isShopifyConfigured() {
  return Boolean(domain && storefrontAccessToken && endpoint);
}

export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  if (!endpoint || !storefrontAccessToken) {
    throw new Error("Shopify Storefront API is not configured.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json: ShopifyResponse<T> = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map((error) => error.message).join("\n"));
  }

  return json.data;
}
