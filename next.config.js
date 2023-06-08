/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
      return [
        {
          source: '/Details/:id',
          destination: '/details/:id',
        },
      ];
    },
  };
