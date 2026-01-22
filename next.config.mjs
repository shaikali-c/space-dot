/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.esahubble.org",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
