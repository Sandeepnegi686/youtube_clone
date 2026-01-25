import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "m.media-amazon.com",
      "mango.blender.org",
      "download.blender.org",
    ],
  },
};

export default nextConfig;
