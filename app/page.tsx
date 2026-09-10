import Image from "next/image";
import Link from "next/link";
import { PuppyCard } from "@/components/puppy-card";
import { getProducts } from "@/lib/products";

const heroImage =
  "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=1800&q=80";
const careImage =
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1400&q=80";

const breeds = [
  {
    title: "Mini Goldendoodles",
    copy: "15–30 lbs. Apartment-friendly, velcro personalities, easy to travel with.",
  },
  {
    title: "Medium Goldendoodles",
    copy: "30–45 lbs. The family favorite — sturdy enough for kids, gentle indoors.",
  },
  {
    title: "Standard Goldendoodles",
    copy: "45–70 lbs. Athletic, swim-ready companions with a softer off-switch at home.",
  },
];

const promises = [
  {
    title: "Raised underfoot",
    copy: "Every puppy is whelped and socialized in our home, not a kennel run.",
  },
  {
    title: "Health-tested parents",
    copy: "Hips, elbows, heart, eyes, and genetic panels before any pairing.",
  },
  {
    title: "Ready for family life",
    copy: "Potty-start, crate introduction, handling, and early noise desensitization.",
  },
  {
    title: "Lifetime support",
    copy: "We stay on call for food, grooming, training, and unexpected questions.",
  },
];

export default async function HomePage() {
  const puppies = await getProducts(8);

  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src={heroImage}
          alt="A smiling Goldendoodle puppy"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-transparent" />
        <div className="container-kate relative flex min-h-[78vh] items-center py-20">
          <div className="max-w-xl text-white">
            <p className="section-kicker text-amber">Kate pet store theme</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-7xl">
              Goldendoodle puppies raised like family.
            </h1>
            <p className="mt-5 max-w-md text-lg text-sand">
              MiloRules is a home program for people who want a Goldendoodle
              with a sound mind, a soft coat, and a clear reservation process.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/puppies" className="btn-coral">
                See available puppies
              </Link>
              <Link href="/process" className="btn-outline border-white text-white hover:bg-white hover:text-ink">
                How to reserve
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-kate grid gap-6 py-16 md:grid-cols-3">
        {breeds.map((breed) => (
          <article key={breed.title} className="rounded-[28px] bg-ivory p-8 card-shadow">
            <p className="section-kicker">Sizes</p>
            <h2 className="mt-3 font-display text-3xl">{breed.title}</h2>
            <p className="mt-3 text-muted">{breed.copy}</p>
          </article>
        ))}
      </section>

      <section className="bg-ivory py-20">
        <div className="container-kate">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Current litter</p>
              <h2 className="section-title mt-2">Available Goldendoodle puppies</h2>
            </div>
            <Link href="/puppies" className="btn-coral">
              Shop all puppies
            </Link>
          </div>
          {puppies.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {puppies.map((puppy) => (
                <PuppyCard key={puppy.id} puppy={puppy} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[28px] border border-dashed border-line bg-cream p-10 text-center">
              <p className="font-display text-3xl">The next litter is being listed</p>
              <p className="mx-auto mt-3 max-w-xl text-muted">
                Available puppies appear here from the MiloRules Shopify catalog
                as soon as a litter is ready for reservation.
              </p>
              <Link href="/contact" className="btn-coral mt-6">
                Join the waitlist
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="container-kate grid items-center gap-10 py-20 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden rounded-[36px]">
          <Image
            src={careImage}
            alt="A family holding a Goldendoodle puppy"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="section-kicker">Why MiloRules</p>
          <h2 className="section-title mt-3">We raise doodles the way we would keep one.</h2>
          <p className="mt-4 text-lg text-muted">
            This is not a pet-food shop with a puppy photo on the banner. Every
            listing is a Goldendoodle puppy from our program — reserved through
            Shopify so deposits, contracts, and pickup dates stay in one place.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {promises.map((promise) => (
              <article key={promise.title} className="rounded-3xl bg-ivory p-5">
                <h3 className="font-display text-2xl">{promise.title}</h3>
                <p className="mt-2 text-sm text-muted">{promise.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-ivory">
        <div className="container-kate grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="section-kicker text-amber">Ready when you are</p>
            <h2 className="section-title mt-3">Reserve a puppy, then finish on Shopify checkout.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/puppies" className="btn-coral">
              Browse puppies
            </Link>
            <Link href="/contact" className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-ink">
              Ask about a litter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
