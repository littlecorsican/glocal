
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_NODE_ENV === "production"
  },
  images: {
    domains: ["http://kakijalan.ddns.net"],
},
  // output: 'export',
  // // basePath: '/freelance/kakijalan/kakijalan - v2/out',
  // images: {
  //   unoptimized: true
  // },
  // assetPrefix: './',
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/404': { page: '/404' },
  //     '/contact': { page: '/contact' },
  //     '/refund': { page: '/refund' },
  //     '/articles': { page: '/articles' },
  //     '/tour': { page: '/tour' },
  //     '/umrah': { page: '/umrah' },
  //     '/tour/[id]': { page: '/tour/[id]' },
  //   }
  // },
}

module.exports = nextConfig
