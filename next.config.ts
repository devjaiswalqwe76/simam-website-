/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // ✅ IMPORTANT: sab paths allow karega
      },
    ],
  },
};

export default nextConfig;