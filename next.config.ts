import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/espera",
        destination:
          "/lista-de-espera?utm_source=video&utm_medium=social&utm_campaign=waitlist-dracarol-2026",
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
