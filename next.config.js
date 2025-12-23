/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },

    // ============================================
    // GitHub Pages Deployment Configuration
    // ============================================
    // Required for GitHub Pages subdirectory deployment (username.github.io/repo-name/)
    // Next.js automatically prefixes all <Link href="..."> and <Image src="..."> paths
    // with this basePath, so you do NOT need to manually update your component paths.
    basePath: '/SolaVis',

    // ⚠️ IMPORTANT: Case Sensitivity Reminder
    // Linux environments (like GitHub Actions) are CASE-SENSITIVE.
    // Ensure your actual filenames (e.g., public/founder.jpg) EXACTLY match
    // your code references (e.g., src="/founder.jpg").
    // Example: "Founder.jpg" ≠ "founder.jpg" on Linux, but works on macOS/Windows.
};

module.exports = nextConfig;
