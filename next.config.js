/** @type {import('next').NextConfig} */

/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction,
    runtimeCaching
  }
})

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
