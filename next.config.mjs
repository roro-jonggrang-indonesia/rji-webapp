/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "admin.rorojonggrang-eo.com",
      },
      {
        protocol: "https",
        hostname: "api.rorojonggrang-eo.com",
      },
    ],
  },
};

export default nextConfig;
