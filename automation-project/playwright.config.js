// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Modo headless ativado
    browserName: 'chromium', // Você pode trocar para firefox ou webkit se quiser
    screenshot: 'only-on-failure', // Tirar screenshot se falhar
    video: 'retain-on-failure',    // Gravar vídeo se falhar
    baseURL: 'https://example.com', // URL do site para testes
  },
});
