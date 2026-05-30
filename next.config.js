/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [160, 320, 480],
    minimumCacheTTL: 2592000,
  },
};

module.exports = nextConfig;
