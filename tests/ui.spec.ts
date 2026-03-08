import { test, expect } from '@playwright/test';

test.describe('LiderCar UI Visual Testing', () => {

    test('Deve renderizar os componentes principais e testar a resolução de scaling', async ({ page }) => {
        // Navigate to homepage
        await page.goto('/');

        // Wait for Next.js to fully hydrate
        await page.waitForLoadState('networkidle');

        // SCROLL TO BUGATTI
        // Find the section by text or id
        const bugattiHeading = page.getByRole('heading', { name: "Processo de Montagem" });
        await expect(bugattiHeading).toBeVisible();

        // Scroll into view
        await bugattiHeading.scrollIntoViewIfNeeded();

        // Give GSAP time to run initial scale calculation and animations
        await page.waitForTimeout(3000);

        // Take screenshot of the bugatti section explicitly
        const engenhariaSection = page.locator('#engenharia');
        await engenhariaSection.screenshot({ path: 'tests/visual/bugatti-showcase.png' });

        // TEST EMBLA CAROUSEL
        const emblaSection = page.getByRole('region', { name: "Carrossel de depoimentos" }).first();
        // if getByRole fails or it isn't a region:
        // const emblaSection = page.locator('[aria-label="Carrossel de depoimentos"]');
        await emblaSection.scrollIntoViewIfNeeded();

        // Check if embla buttons work
        const nextBtn = page.getByRole('button', { name: 'Próximo depoimento' });
        if (await nextBtn.isVisible()) {
            await nextBtn.click();
            await page.waitForTimeout(500); // allow sliding animation
            await nextBtn.click();
            await page.waitForTimeout(500);
        }

        await emblaSection.screenshot({ path: 'tests/visual/embla-carousel.png' });
    });

    test('Teste da página de contato', async ({ page }) => {
        await page.goto('/contato');
        await page.waitForLoadState('networkidle');

        const submitBtn = page.getByRole('button', { name: /enviar solicitação/i });
        await expect(submitBtn).toBeVisible();

        // take full page screen
        await page.screenshot({ path: 'tests/visual/contato-page.png', fullPage: true });
    });

});
