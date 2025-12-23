/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This tells Next.js to generate static HTML files (html/css/js)

    images: {
        unoptimized: true, // Required for static export images to work
    },

    // ⚠️ REMOVED: basePath for Cloudflare deployment
    // basePath: '/SolaVis',
    // We removed this line so the site works at the root URL (e.g., yoursite.com)
};

module.exports = nextConfig;
