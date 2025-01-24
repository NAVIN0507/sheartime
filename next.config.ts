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
      },
       {
        protocol:'https',
        hostname:"utfs.io"
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
