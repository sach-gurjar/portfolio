/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disable image optimization API
    remotePatterns: [
      {
        protocol: "http", // Use http for localhost
        hostname: "localhost",
        port: "", // Leave blank for default ports
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "sachingurjar.netlify.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
