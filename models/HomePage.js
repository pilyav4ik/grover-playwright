class HomePage{

    constructor(page){
        this.page = page;
        this.signInLink = page.locator('button:has-text("Iniciar sesión")')
    }

    async navigate() {
        await this.page.goto('https://www.grover.com/es-es');
      }

    async clickSignIn(){
        await this.signInLink.click();
    }
}

module.exports = { HomePage };