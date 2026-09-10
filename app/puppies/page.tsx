import type { Metadata } from "next";
import { PuppyCard } from "@/components/puppy-card";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Available Goldendoodle Puppies",
};

export default async function PuppiesPage() {
  const puppies = await getProducts(24);

  return (
    <div className="bg-ivory pb-20">
      <section className="bg-sand">
        <div className="container-kate py-16">
          <p className="section-kicker">Shop</p>
          <h1 className="section-title mt-3">Available Goldendoodle puppies</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Each card is a live Shopify product. Reserve a deposit here and
            complete the contract on branded checkout.
          </p>
        </div>
      </section>
      <section className="container-kate py-12">
        {puppies.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {puppies.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-line bg-cream p-12 text-center">
            <h2 className="font-display text-4xl">No puppies are listed yet</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              When the next Goldendoodle litter is ready, each puppy will
              appear here from the connected Shopify store.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
