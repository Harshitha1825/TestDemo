import { test, expect } from '@playwright/test';

const EPAM_URL = 'https://www.epam.com/';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Explore Our Client Work and verifies Client Work is visible', async ({ page }) => {
    await page.goto(EPAM_URL);
    await page.waitForLoadState('domcontentloaded');

