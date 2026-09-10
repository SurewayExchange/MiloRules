import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About the Program",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="bg-sand">
        <div className="container-kate py-16">
          <p className="section-kicker">Our story</p>
          <h1 className="section-title mt-3">A family Goldendoodle program, not a pet shop.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            MiloRules started with one doodle who ran the house. We breed
            fewer, better-planned litters so each puppy leaves ready for a
            real family — not a warehouse aisle.
          </p>
        </div>
      </section>
      <section className="container-kate grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="relative min-h-[380px] overflow-hidden rounded-[36px]">
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80"
            alt="Two golden dogs in grass"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 text-lg text-muted">
          <p>
            Puppies are whelped in a quiet bedroom, then moved into the living
            areas as soon as they can walk. They hear dishwashers, doorbells,
            kids, and the vacuum long before go-home day.
          </p>
          <p>
            We keep Mini, Medium, and Standard Goldendoodles. Coat types are
            planned for families who want a lower-shed companion and are
            willing to keep up with grooming.
          </p>
          <p>
            Reservations and deposits run through Shopify so you get a clear
            receipt, a pickup date, and the same branded checkout as a
            Kate-style pet store.
          </p>
        </div>
      </section>
    </div>
  );
}
