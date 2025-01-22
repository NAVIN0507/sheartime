import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"assets.aceternity.com"
      },
      {
        protocol:'https',
        hostname:"images.unsplash.com"
      }
    ]
  },
  typescript:{
    ignoreBuildErrors:true
  },
  eslint:{
    ignoreDuringBuilds: true,
    
  }
};

export default nextConfig;
