import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.proxi-totalenergies.fr",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;