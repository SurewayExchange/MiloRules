"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { addToCart } from "@/lib/cart-actions";

export function AddToCartButton({
  variantId,
  available,
  label = "Reserve this puppy",
}: {
  variantId?: string;
  available: boolean;
  label?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (!variantId || !available) {
    return (
      <button className="btn-coral opacity-60" disabled>
        Currently reserved
      </button>
    );
  }

  return (
    <div>
      <button
        className="btn-coral"
        disabled={isPending}
        onClick={() => {
          setError(null);
          startTransition(async () => {
            try {
              await addToCart(variantId);
              router.push("/cart");
              router.refresh();
            } catch {
              setError("We could not start this reservation. Please try again.");
            }
          });
        }}
      >
        {isPending ? "Reserving…" : label}
      </button>
      {error ? <p className="mt-2 text-sm text-coral">{error}</p> : null}
    </div>
  );
}
