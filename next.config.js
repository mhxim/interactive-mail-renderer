/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    amp: {
      skipValidation: true,
    },
  },
};

module.exports = nextConfig;
