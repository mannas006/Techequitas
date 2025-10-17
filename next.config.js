/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Explicitly disable PostCSS processing to avoid autoprefixer issues
  experimental: {
    cssChunking: 'strict',
  },
}

module.exports = nextConfig