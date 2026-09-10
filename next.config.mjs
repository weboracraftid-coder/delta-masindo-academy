/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Memberitahu Next.js untuk menghasilkan Static HTML/CSS/JS (SSG)
  images: {
    unoptimized: true, // Wajib diaktifkan jika menggunakan next/image pada mode SSG
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;