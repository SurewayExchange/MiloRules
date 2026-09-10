# MiloRules Goldendoodles

Kate-inspired pet storefront for selling home-raised Goldendoodle puppies. Catalog, cart, and checkout come from Shopify.

## Local

```bash
npm install
vercel env pull .env.local --yes
npm run dev
```

Required environment variables:

- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
