import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { formatMoney } from "@/lib/format";
import { getProduct, getProducts } from "@/lib/products";

type PuppyPageProps = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({
  params,
}: PuppyPageProps): Promise<Metadata> {
  const { handle } = await params;
  const puppy = await getProduct(handle);
  return {
    title: puppy?.title ?? "Puppy",
    description: puppy?.description,
  };
}

export default async function PuppyPage({ params }: PuppyPageProps) {
  const { handle } = await params;
  const puppy = await getProduct(handle);

  if (!puppy) notFound();

  const variant = puppy.variants.nodes.find((item) => item.availableForSale);
  const gallery = puppy.images.nodes.length
    ? puppy.images.nodes
    : puppy.featuredImage
      ? [puppy.featuredImage]
      : [];

  return (
    <div className="container-kate grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-4">
        {gallery[0] ? (
          <div className="relative min-h-[480px] overflow-hidden rounded-[36px] bg-sand">
            <Image
              src={gallery[0].url}
              alt={gallery[0].altText || puppy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : null}
        {gallery.length > 1 ? (
          <div className="grid grid-cols-4 gap-3">
            {gallery.slice(1, 5).map((image) => (
              <div
                key={image.url}
                className="relative aspect-square overflow-hidden rounded-2xl bg-sand"
              >
                <Image
                  src={image.url}
                  alt={image.altText || puppy.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <Link href="/puppies" className="text-sm font-bold text-coral">
          ← All puppies
        </Link>
        <p className="section-kicker mt-6">Goldendoodle puppy</p>
        <h1 className="section-title mt-3">{puppy.title}</h1>
        <p className="mt-4 text-3xl font-extrabold text-coral">
          {formatMoney(puppy.priceRange.minVariantPrice)}
        </p>
        <div
          className="mt-6 space-y-3 text-muted"
          dangerouslySetInnerHTML={{
            __html:
              puppy.descriptionHtml ||
              "<p>Home-raised Goldendoodle puppy from the MiloRules program.</p>",
          }}
        />
        {puppy.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {puppy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sand px-3 py-1 text-xs font-extrabold uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-8">
          <AddToCartButton
            variantId={variant?.id}
            available={puppy.availableForSale && Boolean(variant)}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const puppies = await getProducts(24);
  return puppies.map((puppy) => ({ handle: puppy.handle }));
}
