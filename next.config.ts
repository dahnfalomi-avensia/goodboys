import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Business photo uploads are capped at 5MB; leave headroom for multipart overhead.
    serverActions: {
      bodySizeLimit: "8mb",
    },
  },
};

export default nextConfig;
