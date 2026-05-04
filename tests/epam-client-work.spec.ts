import { test, expect } from '@playwright/test';

const EPAM_URL = 'https://www.epam.com/';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Explore Our Client Work and verifies Client Work is visible', async ({ page }) => {
    await page.goto(EPAM_URL);
    await page.waitForLoadState('domcontentloaded');

    const servicesMenu = page.getByRole('link', { name: /^Services$/ });
    await expect(servicesMenu).toBeVisible();
    await servicesMenu.hover();

    const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
    await expect(clientWorkLink).toBeVisible();
    await clientWorkLink.click();

    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });
});

