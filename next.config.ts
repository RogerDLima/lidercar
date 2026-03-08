import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: {
    // @ts-expect-error type mismatches in different next 15 minors
    appIsrStatus: false,
    buildActivity: false,
    position: 'bottom-right',
  }
};

export default nextConfig;
