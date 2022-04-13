import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        channel: 'chrome',
        headless: false
    },
};
export default config;