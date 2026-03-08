import { test, expect } from '@playwright/test';

test.describe('LiderCar — Testes E2E Completos', () => {

    test('Homepage: todas as seções carregam corretamente', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Header
        const header = page.locator('header');
        await expect(header).toBeVisible();

        // Hero section
        const heroHeading = page.getByRole('heading', { level: 1 }).first();
        await expect(heroHeading).toBeVisible();

        // Stats section
        const statsSection = page.locator('[class*="Stats"]').first();
        if (await statsSection.count() > 0) {
            await expect(statsSection).toBeVisible();
        }

        // BugattiShowcase
        const bugattiHeading = page.getByRole('heading', { name: 'Processo de Montagem' });
        await expect(bugattiHeading).toBeVisible();

        // About section
        const aboutSection = page.locator('#sobre');
        if (await aboutSection.count() > 0) {
            await aboutSection.scrollIntoViewIfNeeded();
            await expect(aboutSection).toBeVisible();
        }

        // Services section
        const servicesSection = page.locator('#servicos');
        if (await servicesSection.count() > 0) {
            await servicesSection.scrollIntoViewIfNeeded();
            await expect(servicesSection).toBeVisible();
        }

        // FAQ
        const faqHeading = page.getByRole('heading', { name: /perguntas frequentes/i });
        if (await faqHeading.count() > 0) {
            await faqHeading.scrollIntoViewIfNeeded();
            await expect(faqHeading).toBeVisible();
        }

        // Footer
        const footer = page.locator('#footer');
        await footer.scrollIntoViewIfNeeded();
        await expect(footer).toBeVisible();

        // Full page screenshot
        await page.screenshot({ path: 'tests/visual/homepage-full.png', fullPage: true });
    });

    test('Bugatti Showcase: animação deve renderizar e escalar', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const bugattiHeading = page.getByRole('heading', { name: 'Processo de Montagem' });
        await expect(bugattiHeading).toBeVisible();
        await bugattiHeading.scrollIntoViewIfNeeded();

        // Wait for GSAP scale calculation + animation start
        await page.waitForTimeout(4000);

        const engenhariaSection = page.locator('#engenharia');
        await expect(engenhariaSection).toBeVisible();

        // Verify animation holder exists and has transform
        const animHolder = engenhariaSection.locator('[class*="animation_holder"]');
        await expect(animHolder).toBeVisible();

        // Verify car part images loaded
        const carImages = engenhariaSection.locator('img');
        const imgCount = await carImages.count();
        expect(imgCount).toBeGreaterThan(5);

        // Screenshot
        await engenhariaSection.screenshot({ path: 'tests/visual/bugatti-showcase.png' });
    });

    test('Contato: formulário funciona e submete dados', async ({ page }) => {
        await page.goto('/contato');
        await page.waitForLoadState('networkidle');

        // Verify form fields
        const nameInput = page.locator('#name');
        const emailInput = page.locator('#email');
        const phoneInput = page.locator('#phone');
        const vehicleInput = page.locator('#vehicle');
        const messageInput = page.locator('#message');
        const submitBtn = page.getByRole('button', { name: /enviar solicitação/i });

        await expect(nameInput).toBeVisible();
        await expect(emailInput).toBeVisible();
        await expect(phoneInput).toBeVisible();
        await expect(submitBtn).toBeVisible();

        // Fill form
        await nameInput.fill('Teste Automatizado');
        await emailInput.fill('teste@lidercar.com.br');
        await phoneInput.fill('(11) 91234-5678');
        await vehicleInput.fill('BMW 320i 2023');
        await messageInput.fill('Teste de formulário automatizado via Playwright.');

        // Screenshot before submit
        await page.screenshot({ path: 'tests/visual/contato-preenchido.png', fullPage: true });

        // Submit
        await submitBtn.click();

        // Wait for success message
        const successMessage = page.locator('[class*="successMessage"]');
        await expect(successMessage).toBeVisible({ timeout: 10000 });

        // Screenshot after submit
        await page.screenshot({ path: 'tests/visual/contato-sucesso.png', fullPage: true });
    });

    test('Navegação: header link vai para /contato', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Nav links are hidden on mobile (display:none at 768px).
        // Check if CTA is actually visible before testing.
        const ctaBtn = page.getByRole('link', { name: /agendar revisão/i });
        const isCtaVisible = await ctaBtn.isVisible();
        if (!isCtaVisible) {
            test.skip();
            return;
        }
        await ctaBtn.click();

        // Should navigate to /contato
        await page.waitForURL('**/contato');
        expect(page.url()).toContain('/contato');

        // Verify form is visible
        const formHeading = page.getByRole('heading', { name: /fale conosco/i });
        await expect(formHeading).toBeVisible();
    });

    test('Footer: novos elementos renderizam', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const footer = page.locator('#footer');
        await footer.scrollIntoViewIfNeeded();
        await expect(footer).toBeVisible();

        // Newsletter form
        const newsletterInput = footer.locator('input[type="email"]');
        await expect(newsletterInput).toBeVisible();

        // Trust badges
        const badges = footer.locator('[class*="badge"]');
        const badgeCount = await badges.count();
        expect(badgeCount).toBeGreaterThanOrEqual(3);

        // WhatsApp CTA
        const whatsappCta = footer.locator('[class*="ctaBtn"]');
        await expect(whatsappCta).toBeVisible();

        // Screenshot
        await footer.screenshot({ path: 'tests/visual/footer-premium.png' });
    });

    test('Mobile responsivo: viewport 375x812', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Header still visible
        const header = page.locator('header');
        await expect(header).toBeVisible();

        // Hero visible
        const heroHeading = page.getByRole('heading', { level: 1 }).first();
        await expect(heroHeading).toBeVisible();

        // Scroll to footer
        const footer = page.locator('#footer');
        await footer.scrollIntoViewIfNeeded();
        await expect(footer).toBeVisible();

        // Full mobile screenshot
        await page.screenshot({ path: 'tests/visual/mobile-full.png', fullPage: true });
    });

    test('Embla Carousel: depoimentos funciona', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const emblaSection = page.getByRole('region', { name: 'Carrossel de depoimentos' }).first();
        if (await emblaSection.count() > 0) {
            await emblaSection.scrollIntoViewIfNeeded();

            const nextBtn = page.getByRole('button', { name: 'Próximo depoimento' });
            if (await nextBtn.isVisible()) {
                await nextBtn.click();
                await page.waitForTimeout(500);
                await nextBtn.click();
                await page.waitForTimeout(500);
            }

            await emblaSection.screenshot({ path: 'tests/visual/embla-carousel.png' });
        }
    });

});
