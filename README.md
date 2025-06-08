# Bloom & Bud - Flower Shop E-commerce

A full-featured e-commerce application for selling flowers with Shopify integration.

## Features

- User authentication (login/register)
- Product catalog from Shopify
- Shopping cart functionality
- Checkout process with delivery information
- Order history
- Product reviews
- Responsive design with SCSS

## Technologies

- Next.js (App Router)
- TypeScript
- Prisma (PostgreSQL)
- Shopify API
- SCSS for styling
- React Hook Form for forms
- Zod for validation

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` (see `.env.example`)
4. Run database migrations: `npm run prisma:migrate`
5. Start the development server: `npm run dev`

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `SHOPIFY_API_KEY` - Your Shopify API key
- `SHOPIFY_API_SECRET` - Your Shopify API secret
- `SHOPIFY_STORE_DOMAIN` - Your Shopify store domain (e.g., your-store.myshopify.com)
- `JWT_SECRET` - Secret key for JWT tokens
- `NEXTAUTH_SECRET` - Secret key for NextAuth.js

## Deployment

1. Build the application: `npm run build`
2. Start the production server: `npm run start`
