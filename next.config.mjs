/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'demo2.themelexus.com',
      },
      {
        protocol: 'https',
        hostname: 'dtsolutions.pk',
      },
      {
        protocol: 'https',
        hostname: 'dtsolutions.vercel.app',
      },
    ],
  },
};

export default nextConfig;

