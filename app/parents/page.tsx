import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet the Parents",
};

const parents = [
  {
    name: "Milo",
    role: "Foundation sire",
    copy: "Even-tempered Standard Goldendoodle. OFA hips and elbows, clear cardiac and eye exams, full genetic panel.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Maple",
    role: "Mini dam",
    copy: "Soft curly coat, velcro personality, excellent mother. Bred for compact size without losing the Golden mind.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Honey",
    role: "Medium dam",
    copy: "Athletic but calm indoors. Produces sturdy Medium Goldendoodles that travel well and settle with children.",
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ParentsPage() {
  return (
    <div className="container-kate py-16">
      <p className="section-kicker">Breeding dogs</p>
      <h1 className="section-title mt-3">Meet the parents behind each litter</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        We do not add a dam or sire until health testing and temperament
        watching are finished. Puppies listed in the shop inherit this pair.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {parents.map((parent) => (
          <article key={parent.name} className="overflow-hidden rounded-[28px] bg-ivory card-shadow">
            <div className="relative aspect-[4/5]">
              <Image
                src={parent.image}
                alt={parent.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="section-kicker">{parent.role}</p>
              <h2 className="mt-2 font-display text-3xl">{parent.name}</h2>
              <p className="mt-3 text-muted">{parent.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
