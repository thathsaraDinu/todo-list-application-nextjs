const nextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
