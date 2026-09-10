import type { Money } from "./shopify-types";

export function formatMoney(money?: Money | null) {
  if (!money) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode || "USD",
  }).format(Number(money.amount));
}
