/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // www → non-www (permanent)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.trevorahcharters.co.uk" }],
        destination: "https://trevorahcharters.co.uk/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
