// @ts-check
const { devices } = require('@playwright/test');

/** @type {{projects: *[], use: {screenshot: string}, workers: (number|*)}} */
const config = {
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
            headless: false
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
    workers: process.env.CI ? 2 : undefined,
    use: {
        screenshot: 'only-on-failure'
    },
};

module.exports = config;