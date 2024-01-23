/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev',
      },
    ],
  },
};

export default nextConfig;
