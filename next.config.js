/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
}

module.exports = nextConfig