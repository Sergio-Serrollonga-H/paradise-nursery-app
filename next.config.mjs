/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pyxis.nymag.com",
        port: "",
        pathname: "/v1/imgs/56a/6db/**",
      },
    ],
  },
};

export default nextConfig;
