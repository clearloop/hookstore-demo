/** @type {import('next').NextConfig} */
const nextConfig = {
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
