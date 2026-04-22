import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repo>/, 
  // you might need to set basePath to '/<repo>'
  basePath: process.env.NODE_ENV === 'production' ? '/diamond-ac' : '',
};

export default nextConfig;
