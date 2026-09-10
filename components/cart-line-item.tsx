"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeFromCart, updateCartLine } from "@/lib/cart-actions";
import { formatMoney } from "@/lib/format";
import type { CartLine } from "@/lib/shopify-types";

export function CartLineItem({ line }: { line: CartLine }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function refreshAfter(action: () => Promise<unknown>) {
    startTransition(async () => {
      await action();
      router.refresh();
    });
  }

  return (
    <div
      className="flex flex-col gap-3 border-b border-line py-5 md:flex-row md:items-center md:justify-between"
      style={{ opacity: isPending ? 0.55 : 1 }}
    >
      <div>
        <p className="font-display text-2xl">{line.merchandise.product.title}</p>
        {line.merchandise.title !== "Default Title" ? (
          <p className="text-sm text-muted">{line.merchandise.title}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 rounded-full bg-sand px-3 py-2">
          <button
            type="button"
            disabled={isPending}
            onClick={() =>
              refreshAfter(() =>
                line.quantity <= 1
                  ? removeFromCart(line.id)
                  : updateCartLine(line.id, line.quantity - 1),
              )
            }
          >
            −
          </button>
          <span className="min-w-6 text-center font-bold">{line.quantity}</span>
          <button
            type="button"
            disabled={isPending}
            onClick={() =>
              refreshAfter(() => updateCartLine(line.id, line.quantity + 1))
            }
          >
            +
          </button>
        </div>
        <p className="w-24 text-right font-extrabold">
          {formatMoney(line.cost.totalAmount)}
        </p>
        <button
          type="button"
          className="text-sm font-bold text-coral"
          disabled={isPending}
          onClick={() => refreshAfter(() => removeFromCart(line.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
