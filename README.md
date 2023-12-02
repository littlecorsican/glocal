#Read me before start developing




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Before you start

Please create .env.local file and fill in these variables, and fill it into environment variables tab of vercel when you deploy online

useful links
https://revnology.gitlab-page.revnology.com.my/kakijalan/index.html
https://portal.merchant.razer.com/index.php?mod=nologin&opt=vcode
https://sandbox.merchant.razer.com/MerchantPortal/index.php?mod=authentication&opt=login
https://trevabook.ddns.net/trevabook-admin/app/login
https://kakijalandev-git-dev-gnomemage19901.vercel.app/
https://portal.merchant.razer.com/index.php?mod=authentication&opt=login

NEXT_PUBLIC_NODE_ENV=""  
NEXT_IMAGE_ALLOWED_DOMAINS=""
NEXT_PUBLIC_VERIFY_KEY=""
NEXT_PUBLIC_SECRET_KEY=""
NEXT_PUBLIC_MERCHANT_ID=""

things to check when go live
.env.local
remove click me buttons



/pages/booking-tour
    TourBooking(folder)
        -DetailsCard
        -BookingForm 
            -TourOverview
                -Rooms
                    -IncrementCount
            -Traveller
                -Passenger
            -Summary
            -Payment
            -Confirmation
        -BookingSummary




/pages/booking-cruise
    CruiseBooking(folder)
        -DetailsCard
        -BookingForm 
            -CruiseOverview
            -Traveller
                -Passenger
            -Summary
            -Payment
            -Confirmation
        -BookingSummary


*UMRAH follow tour , so currently the UmrahBooking not in used

junk folder - all the stuff that was previously used but later discarded


logic
desktop size
if 5
provide 4, 1
if 4
provide 4
if 3
provide 3
if 2
provide 2
if 1
provide 1

tablet size
if 5
provide 3, 2
if 4
provide 3, 1
if 3
provide 3, 0
if 2
provide 2, 0
if 1
provide 1, 0

phone size
if 5
provide 2, 2, 1
if 4
provide 2, 2
if 3
provide 2, 1
if 2
provide 2, 0
if 1
provide 1, 0
