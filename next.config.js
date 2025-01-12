/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    domains: ["localhost"], // Allow localhost for image domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allows images from Sanity's CDN
        port: "", // Leave blank for default ports
      },
    ],
  },
};

module.exports = nextConfig;
