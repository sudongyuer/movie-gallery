/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["press.hulu.com","links.papareact.com", "image.tmdb.org","tva1.sinaimg.cn"]
  },
  env:{
    API_KEY : process.env.API_KEY
  },
  typescript:{
     // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
