import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // necessário para Docker otimizado
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
