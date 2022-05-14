/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["press.hulu.com","links.papareact.com", "image.tmdb.org","tva1.sinaimg.cn"]
  },
  env:{
    API_KEY : process.env.API_KEY
  }
}

module.exports = nextConfig
