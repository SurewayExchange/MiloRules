import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goldendoodle FAQ",
};

const faqs = [
  {
    q: "Are these Goldendoodle puppies or pet supplies?",
    a: "Puppies. MiloRules sells Goldendoodle puppies. The storefront uses the Kate pet-store theme and Shopify for reservations and checkout.",
  },
  {
    q: "When do puppies go home?",
    a: "No earlier than 8 weeks. We keep them longer if a puppy needs extra social time or a family is traveling.",
  },
  {
    q: "Do you ship?",
    a: "We prefer in-person pickup. Approved nanny or ground transport can be arranged after the reservation is paid.",
  },
  {
    q: "What is included?",
    a: "First vaccines, deworming, microchip, health record, starter food, and a written health guarantee.",
  },
  {
    q: "How do deposits work?",
    a: "The deposit is paid on Shopify checkout when you reserve a specific puppy. It is applied to the total and is non-transferable once the hold is confirmed.",
  },
];

export default function FaqPage() {
  return (
    <div className="container-kate py-16">
      <p className="section-kicker">Questions</p>
      <h1 className="section-title mt-3">Puppy FAQ</h1>
      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <article key={item.q} className="rounded-[28px] bg-ivory p-7 card-shadow">
            <h2 className="font-display text-2xl">{item.q}</h2>
            <p className="mt-3 text-muted">{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
