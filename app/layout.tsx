import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCart } from "@/lib/cart-actions";
import { isShopifyConfigured } from "@/lib/shopify";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MiloRules Goldendoodles | Home-Raised Puppies",
    template: "%s | MiloRules Goldendoodles",
  },
  description:
    "MiloRules raises Goldendoodle puppies in a family home. Browse available puppies, meet the parents, and reserve through secure Shopify checkout.",
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  let cart = null;
  if (isShopifyConfigured()) {
    try {
      cart = await getCart();
    } catch {
      cart = null;
    }
  }

  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteHeader cartCount={cart?.totalQuantity ?? 0} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
