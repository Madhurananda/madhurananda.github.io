/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['143.167.102.50'],
};
module.exports = nextConfig;
