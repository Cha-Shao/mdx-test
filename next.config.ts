import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["tsx", "mdx"],
};

export default withMDX(nextConfig);
