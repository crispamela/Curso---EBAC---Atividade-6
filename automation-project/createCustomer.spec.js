// tests/createCustomer.spec.js
import { test, expect } from '@playwright/test';

test('Criar novo cliente', async ({ page }) => {
  await page.goto('/register'); // A página de cadastro
  
  // Preenchendo o formulário de novo cliente
  await page.fill('input[name="firstName"]', 'Pamela');
  await page.fill('input[name="lastName"]', 'Silva');
  await page.fill('input[name="email"]', 'pamela.silva@example.com');
  await page.fill('input[name="password"]', 'SenhaForte123');
  await page.fill('input[name="confirmPassword"]', 'SenhaForte123');

  // Submeter o formulário
  await page.click('button[type="submit"]');

  // Verificar se a criação foi bem-sucedida
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('h1')).toContainText('Bem-vinda, Pamela');
});
