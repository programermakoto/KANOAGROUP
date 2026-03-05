import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
  transpilePackages: ['gsap'],
};


export default nextConfig;
