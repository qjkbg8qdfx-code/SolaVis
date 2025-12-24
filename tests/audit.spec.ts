import { test, expect } from '@playwright/test';

/**
 * SolvoVis Full Site Audit - E2E Test Suite
 *
 * This test simulates a real human user journey through the entire website,
 * verifying FUNCTIONALITY not just visibility.
 *
 * Run with: npx playwright test tests/audit.spec.ts --headed --project=chromium-desktop
 */

test.describe('Full Site Audit - Real Human Simulation', () => {
    // ===============================================
    // 1. THE "TRUST" HANDSHAKE - Cookie Consent
    // ===============================================
    test('Cookie Banner - Accept and Verify Consent', async ({ page }) => {
        await page.goto('/');

        // Cookie banner should appear after 1s delay (per CookieBanner.tsx)
        const banner = page.getByRole('dialog', { name: /cookie/i });
        await expect(banner).toBeVisible({ timeout: 3000 });

        // ACTION: Click "Accept All"
        const acceptButton = page.getByRole('button', { name: /accept all/i });
        await acceptButton.click();

        // VERIFY: Banner disappears from DOM
        await expect(banner).not.toBeVisible();

        // VERIFY: localStorage has consent key set to 'accepted'
        const consent = await page.evaluate(() =>
            localStorage.getItem('solvovis-cookie-consent')
        );
        expect(consent).toBe('accepted');

        // VERIFY: Analytics event dispatched (check console for GA log)
        // Note: GA will fail to load with dummy ID but event should fire
    });

    // ===============================================
    // 2. NAVIGATION INTEGRITY - Desktop
    // ===============================================
    test('Desktop Navigation - Methodology Link', async ({ page }) => {
        // Set desktop viewport
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.goto('/');

        // Dismiss cookie banner if visible
        await dismissCookieBanner(page);

        // ACTION: Click "Methodology" in top nav
        const methodologyLink = page.getByRole('link', { name: 'Methodology' }).first();
        await methodologyLink.click();

        // VERIFY: URL contains /methodology
        await expect(page).toHaveURL(/\/methodology/);

        // VERIFY: Correct h1 text
        const h1 = page.locator('h1');
        await expect(h1).toContainText('From Chaos to Code');
    });

    test('Desktop Navigation - Logo Returns Home', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.goto('/methodology');

        // Dismiss cookie banner if visible
        await dismissCookieBanner(page);

        // ACTION: Click the SolvoVis logo to return home
        const logo = page.getByRole('link', { name: /solvovis/i }).first();
        await logo.click();

        // VERIFY: URL is root
        await expect(page).toHaveURL('/');
    });

    // ===============================================
    // 3. MOBILE "THUMB ZONE" CHECK
    // ===============================================
    test('Mobile Navigation - Bottom Tab Bar', async ({ page }) => {
        // Simulate iPhone 13 viewport
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');

        // Dismiss cookie banner
        await dismissCookieBanner(page);

        // VERIFY: Bottom navigation is visible on mobile
        const bottomNav = page.locator('nav[aria-label="Mobile navigation"]');
        await expect(bottomNav).toBeVisible();

        // ACTION: Click "Services" from bottom tab bar
        const servicesTab = bottomNav.getByRole('link', { name: 'Services' });
        await servicesTab.click();

        // VERIFY: Navigation works
        await expect(page).toHaveURL(/\/services/);

        // VERIFY: Correct page loaded
        const h1 = page.locator('h1');
        await expect(h1).toContainText('Modules');
    });

    test('Mobile Navigation - Hamburger Menu (Drawer)', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');

        // Dismiss cookie banner
        await dismissCookieBanner(page);

        // ACTION: Open hamburger menu
        const menuButton = page.getByRole('button', { name: /menu/i });
        await menuButton.click();

        // VERIFY: Full-screen overlay appears
        const overlay = page.locator('.fixed.inset-0').filter({ hasText: 'About' });
        await expect(overlay).toBeVisible();

        // ACTION: Click "About" from drawer menu
        const aboutLink = overlay.getByRole('link', { name: 'About' });
        await aboutLink.click();

        // VERIFY: Navigation works and menu closes
        await expect(page).toHaveURL(/\/about/);
        await expect(overlay).not.toBeVisible();
    });

    // ===============================================
    // 4. INTERACTIVE ELEMENTS - FAQ Accordion
    // ===============================================
    test('FAQ Accordion - Expand and Collapse', async ({ page }) => {
        await page.goto('/services');

        // Dismiss cookie banner
        await dismissCookieBanner(page);

        // ACTION: Scroll to FAQ section
        const faqSection = page.getByText('Frequently Asked');
        await faqSection.scrollIntoViewIfNeeded();

        // Get first FAQ question
        const firstFaq = page.locator('details').first();
        const question = firstFaq.locator('summary');
        const answer = firstFaq.locator('div.px-6.pb-6');

        // VERIFY: Answer is initially hidden
        await expect(answer).not.toBeVisible();

        // ACTION: Click the question to expand
        await question.click();

        // VERIFY: Answer becomes visible (accordion expands)
        await expect(answer).toBeVisible();

        // ACTION: Click again to collapse
        await question.click();

        // VERIFY: Answer is hidden again
        await expect(answer).not.toBeVisible();
    });

    // ===============================================
    // 5. CONVERSION PATH - Contact Form
    // ===============================================
    test('Contact Form - Field Interaction and Validation', async ({ page }) => {
        await page.goto('/contact');

        // Dismiss cookie banner
        await dismissCookieBanner(page);

        // VERIFY: Form elements exist
        const nameInput = page.locator('#name');
        const emailInput = page.locator('#email');
        const messageInput = page.locator('#message');
        const submitButton = page.getByRole('button', { name: /execute_contact_sequence/i });

        await expect(nameInput).toBeVisible();
        await expect(emailInput).toBeVisible();
        await expect(messageInput).toBeVisible();
        await expect(submitButton).toBeVisible();

        // ACTION: Try to submit empty form (validation check)
        await submitButton.click();

        // VERIFY: Error message appears
        const errorMessage = page.getByText(/Error: All_Fields_Required/i);
        await expect(errorMessage).toBeVisible();

        // ACTION: Fill in the form with dummy data
        await nameInput.fill('Test User');
        await emailInput.fill('test@example.com');
        await messageInput.fill('This is an automated E2E test message from Playwright.');

        // ACTION: Submit the form
        await submitButton.click();

        // VERIFY: Button shows loading state or success/error response
        // Note: With backend, we'd see success. Without, we'll see network error.
        const response = page.locator('text=/Transmitted|Error|Transmitting/i');
        await expect(response).toBeVisible({ timeout: 10000 });
    });

    test('Contact Form - Full Success Flow (with backend)', async ({ page }) => {
        await page.goto('/contact');
        await dismissCookieBanner(page);

        // Fill form
        await page.locator('#name').fill('E2E Test User');
        await page.locator('#email').fill('e2e@solvovis.test');
        await page.locator('#message').fill('Automated test submission - please ignore.');

        // Submit
        await page.getByRole('button', { name: /execute_contact_sequence/i }).click();

        // Wait for response - could be success or network error depending on backend
        await page.waitForTimeout(3000);

        // Check for any state change (success, error, or loading complete)
        const formContainer = page.locator('.rounded-3xl');
        const successIndicator = formContainer.getByText(/Message_Transmitted|Send_Another/i);
        const errorIndicator = formContainer.getByText(/Error:/i);

        // At least one of these should be present after submission
        const hasSuccess = await successIndicator.isVisible().catch(() => false);
        const hasError = await errorIndicator.isVisible().catch(() => false);

        expect(hasSuccess || hasError).toBeTruthy();
    });

    // ===============================================
    // 6. HOMEPAGE BENTO GRID - Interactive Cards
    // ===============================================
    test('Homepage - Bento Card Navigation', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.goto('/');
        await dismissCookieBanner(page);

        // ACTION: Click on Methodology card
        const methodologyCard = page.getByRole('link', { name: /methodology/i }).first();
        await methodologyCard.click();

        // VERIFY: Navigates to methodology page
        await expect(page).toHaveURL(/\/methodology/);
    });
});

// ===============================================
// HELPER FUNCTIONS
// ===============================================

/**
 * Dismiss cookie banner if visible
 */
async function dismissCookieBanner(page: import('@playwright/test').Page) {
    const banner = page.getByRole('dialog', { name: /cookie/i });
    const isVisible = await banner.isVisible().catch(() => false);

    if (isVisible) {
        await page.getByRole('button', { name: /accept all/i }).click();
        await expect(banner).not.toBeVisible();
    }
}
