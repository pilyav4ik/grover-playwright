exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.getStartedLink = page.locator('a', { hasText: 'Preguntas frecuentes' });
    }

    async openUrl(){
        await this.page.goto('https://grover.com/es-es')
    }

    async getStarted(){
        await this.getStartedLink.click();
    }

};