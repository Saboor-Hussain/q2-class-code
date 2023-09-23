/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
