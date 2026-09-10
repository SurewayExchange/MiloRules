import type { Metadata } from "next";
import Link from "next/link";
import { CartLineItem } from "@/components/cart-line-item";
import { getCart } from "@/lib/cart-actions";
import { formatMoney } from "@/lib/format";
import { isShopifyConfigured } from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Reservation Cart",
};

export default async function CartPage() {
  let cart = null;
  if (isShopifyConfigured()) {
    try {
      cart = await getCart();
    } catch {
      cart = null;
    }
  }
  const lines = cart?.lines.nodes ?? [];

  return (
    <div className="container-kate py-16">
      <p className="section-kicker">Checkout</p>
      <h1 className="section-title mt-3">Reservation cart</h1>
      {!cart || lines.length === 0 ? (
        <div className="mt-10 rounded-[28px] bg-ivory p-10 card-shadow">
          <p className="font-display text-3xl">Your cart is empty</p>
          <p className="mt-3 max-w-xl text-muted">
            Choose an available Goldendoodle puppy to start a reservation.
            Checkout is completed on Shopify.
          </p>
          <Link href="/puppies" className="btn-coral mt-6">
            Browse puppies
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[28px] bg-ivory px-6 card-shadow">
            {lines.map((line) => (
              <CartLineItem key={line.id} line={line} />
            ))}
          </div>
          <aside className="h-fit rounded-[28px] bg-ink p-8 text-ivory">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber">
              Summary
            </p>
            <div className="mt-6 flex items-center justify-between text-lg">
              <span>Subtotal</span>
              <span className="font-extrabold">
                {formatMoney(cart.cost.subtotalAmount)}
              </span>
            </div>
            <a href={cart.checkoutUrl} className="btn-coral mt-8 w-full">
              Continue to Shopify checkout
            </a>
          </aside>
        </div>
      )}
    </div>
  );
}
