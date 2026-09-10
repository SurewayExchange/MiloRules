"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/puppies", label: "Available Puppies" },
  { href: "/about", label: "About" },
  { href: "/parents", label: "Parents" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ cartCount }: { cartCount: number }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur border-b border-line">
      <div className="bg-ink text-ivory text-[12px] tracking-wide">
        <div className="container-kate flex flex-wrap items-center justify-between gap-2 py-2">
          <p>Family-raised Goldendoodle puppies · Health-tested parents</p>
          <p className="text-sand">Reservations open · Call (555) 014-1967</p>
        </div>
      </div>
      <div className="container-kate flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-coral text-white font-display text-xl">
            M
          </span>
          <span>
            <span className="block font-display text-2xl leading-none">
              MiloRules
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-muted">
              Goldendoodles
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-coral">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative font-bold text-sm">
            Reservation Cart
            {cartCount > 0 ? (
              <span className="absolute -right-3 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[11px] text-white">
                {cartCount}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className="lg:hidden font-bold"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-line bg-ivory px-4 py-4"
        >
          <div className="flex flex-col gap-3 font-bold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
