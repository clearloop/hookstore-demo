/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  async redirects() {
    return [
      {
        source: "/board",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
