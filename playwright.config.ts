import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';


const testDir = defineBddConfig({
    features: 'features/**/*.feature',
    steps: [
        'steps/**/*.ts',
        'fixtures/**/*.ts'
    ],
    importTestFrom: './fixtures/fixtures'
});
export default defineConfig({
    testDir,

    reporter: 'html',

    use: {
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        headless: false,
        launchOptions: {
            args: ['--start-maximized'],
        },
    }
});