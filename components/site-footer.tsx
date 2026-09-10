import Link from "next/link";

const shopLinks = [
  { href: "/puppies", label: "Available Puppies" },
  { href: "/process", label: "How Reservations Work" },
  { href: "/parents", label: "Meet the Parents" },
  { href: "/faq", label: "Puppy FAQ" },
];

const careLinks = [
  { href: "/about", label: "Our Family Program" },
  { href: "/contact", label: "Visit the Home" },
  { href: "/process", label: "Health Guarantee" },
  { href: "/cart", label: "Reservation Cart" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-ivory">
      <div className="container-kate grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl">MiloRules</p>
          <p className="mt-3 max-w-xs text-sand">
            Home-raised Goldendoodle puppies bred for easy temperaments,
            healthy coats, and families who want a companion that lasts.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber">
            Puppies
          </p>
          <ul className="mt-4 space-y-2 text-sand">
            {shopLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber">
            Care
          </p>
          <ul className="mt-4 space-y-2 text-sand">
            {careLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber">
            Visit
          </p>
          <p className="mt-4 text-sand">
            58 East Madison Street
            <br />
            Family home kennel
            <br />
            9:30 AM – 6:30 PM
            <br />
            hello@milorules.com
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-kate flex flex-wrap items-center justify-between gap-3 py-5 text-sm text-sand">
          <p>© {new Date().getFullYear()} MiloRules Goldendoodles</p>
          <p>Shopify checkout · Kate pet-store theme</p>
        </div>
      </div>
    </footer>
  );
}
