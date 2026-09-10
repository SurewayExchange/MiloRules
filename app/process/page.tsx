import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservation Process",
};

const steps = [
  {
    title: "Choose a puppy",
    copy: "Browse live listings. Each available puppy is a Shopify product with photos, coat notes, and go-home timing.",
  },
  {
    title: "Place a reservation",
    copy: "Add the puppy to your cart and pay the deposit on Shopify checkout. That holds the puppy while paperwork is signed.",
  },
  {
    title: "Home match call",
    copy: "We confirm your household, travel plan, and any allergy or coat preferences before the balance is due.",
  },
  {
    title: "Go-home day",
    copy: "Puppies leave after 8 weeks with a health record, starter food, and a first-year support line to our family.",
  },
];

export default function ProcessPage() {
  return (
    <div className="container-kate py-16">
      <p className="section-kicker">How it works</p>
      <h1 className="section-title mt-3">From listing to go-home day</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-[28px] bg-ivory p-8 card-shadow">
            <p className="font-display text-5xl text-coral">0{index + 1}</p>
            <h2 className="mt-3 font-display text-3xl">{step.title}</h2>
            <p className="mt-3 text-muted">{step.copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/puppies" className="btn-coral">
          See who is available
        </Link>
      </div>
    </div>
  );
}
