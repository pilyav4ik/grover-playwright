import { test, expect } from '@playwright/test';
import { HomePage } from '../models/HomePage';
import { LoginPage } from '../models/LoginPage';

test('basic test', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.navigate();
  await homePage.clickSignIn();
  await loginPage.fillEmailTextbox("admin@gmail.com");
  await loginPage.fillPasswordTextbox("123456")
  await loginPage.clickSubmitButton();

  const x = await page.locator("//span[@class='sc-1dril4d-8-span sc-7kmshr-15 jbOywk']");
  await expect(x).toContainText('111Email o contraseña no válidos. Por favor, inténtalo de nuevo.')
});