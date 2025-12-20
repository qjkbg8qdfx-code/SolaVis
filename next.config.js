/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // GitHub Pages 部署時需要設定 basePath（如果不是根網域）
    // basePath: '/your-repo-name',
};

module.exports = nextConfig;
