import Image from "next/image";
import Link from "next/link";
import { formatMoney } from "@/lib/format";
import type { Product } from "@/lib/shopify-types";

export function PuppyCard({ puppy }: { puppy: Product }) {
  const image = puppy.featuredImage;

  return (
    <article className="group overflow-hidden rounded-[28px] bg-ivory card-shadow">
      <Link href={`/puppies/${puppy.handle}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          {image ? (
            <Image
              src={image.url}
              alt={image.altText || puppy.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          ) : (
            <div className="grid h-full place-items-center text-muted">
              Photo coming soon
            </div>
          )}
          <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
            {puppy.availableForSale ? "Available" : "Reserved"}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-2xl">{puppy.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">
            {puppy.description || "Home-raised Goldendoodle puppy"}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-extrabold text-coral">
              {formatMoney(puppy.priceRange.minVariantPrice)}
            </p>
            <span className="text-sm font-bold">View puppy →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
