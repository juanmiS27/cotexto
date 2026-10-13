import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cotexto.eu", pathname: "/assets/images/**" },
    ],
  },
};

export default nextConfig;
