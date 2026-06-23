import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile exists in the home dir).
  turbopack: { root: path.resolve(__dirname) },
  images: {
    // local images live in /public/images — no remote domains needed.
    remotePatterns: [],
  },
};

export default nextConfig;
