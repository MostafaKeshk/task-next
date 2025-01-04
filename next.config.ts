import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["avatars.githubusercontent.com"], // Allow GitHub avatar URLs
  },
};

export default nextConfig;
