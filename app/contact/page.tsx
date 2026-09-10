import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="container-kate grid gap-10 py-16 lg:grid-cols-2">
      <div>
        <p className="section-kicker">Visit</p>
        <h1 className="section-title mt-3">Ask about the next Goldendoodle litter</h1>
        <p className="mt-4 text-lg text-muted">
          Tell us your timing, home setup, and whether you want Mini, Medium,
          or Standard. We reply with current availability from the Shopify
          catalog.
        </p>
        <div className="mt-8 space-y-2 text-muted">
          <p>58 East Madison Street</p>
          <p>(555) 014-1967</p>
          <p>hello@milorules.com</p>
          <p>9:30 AM – 6:30 PM</p>
        </div>
      </div>
      <form
        className="rounded-[28px] bg-ivory p-8 card-shadow"
        action="mailto:hello@milorules.com"
        method="get"
        encType="text/plain"
      >
        <label className="block text-sm font-extrabold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-line bg-cream px-4 py-3"
        />
        <label className="mt-5 block text-sm font-extrabold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-2xl border border-line bg-cream px-4 py-3"
        />
        <label className="mt-5 block text-sm font-extrabold" htmlFor="message">
          What puppy are you hoping for?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-line bg-cream px-4 py-3"
        />
        <button className="btn-coral mt-6" type="submit">
          Send inquiry
        </button>
      </form>
    </div>
  );
}
