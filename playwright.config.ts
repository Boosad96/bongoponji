import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser',
  use: { ...devices['Pixel 7'], baseURL: 'http://127.0.0.1:4321' },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4321 --strictPort',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
    env: { SITE_URL: 'https://bongoponji.example' },
  },
});
