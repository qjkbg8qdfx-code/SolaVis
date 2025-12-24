import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for SolvoVis E2E Testing
 *
 * Run tests with: npx playwright test --headed
 * Or use the npm script: npm run test:e2e
 */
export default defineConfig({
    testDir: './tests',
    fullyParallel: false, // Run sequentially for visual debugging
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: 1, // Single worker for stepped visual verification
    reporter: 'html',

    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'on-first-retry',

        // VISUAL DEBUGGING: 500ms delay between actions
        launchOptions: {
            slowMo: 500,
        },
    },

    projects: [
        {
            name: 'chromium-desktop',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'mobile-safari',
            use: {
                ...devices['iPhone 13'],
            },
        },
    ],

    // Auto-start dev server before tests
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
    },
});
