class LoginPage {


    constructor(page){
        this.page = page;
        this.emailTextInput =  page.locator('input[name="email"]');
        this.passwordTextInput = page.locator('input[name="password"]');
        this.submitLoginFormButton = page.locator('button:has-text("Iniciar sesión")').nth(1);
    }

    async fillEmailTextbox(text){
        await this.emailTextInput.fill(text);
    }

    async fillPasswordTextbox(text){
        await this.passwordTextInput.fill(text);
    }

    async clickSubmitButton(){
        await this.submitLoginFormButton.click();
    }
}

module.exports = { LoginPage };