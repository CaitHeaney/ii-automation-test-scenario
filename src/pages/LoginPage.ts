import { expect, Page } from '@playwright/test'

export class LoginPage {
  private readonly page: Page
  constructor(page: Page) {
    this.page = page
  }

  async newUserFill(name,signupEmailAddress){
    await this.newUserHasLoaded()
    await this.enterName(name)
    await this.enterEmailAddress(signupEmailAddress)
    await this.signup()

  }

  async loginFill(loginEmailAddress, password){
    await this.loginHasLoaded()
    await this.enterLoginEmailAddress(loginEmailAddress)
    await this.enterPassword(password)
    await this.login()
  }

  public async newUserHasLoaded() {
    await expect(this.page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()
  }

  public async loginHasLoaded() {
    await expect(this.page.getByRole('heading', { name: 'Login to your account' })).toBeVisible()
  }

  public async enterName(name: string) {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(name)
  }

  public async enterEmailAddress(signupEmailAddress: string) {
    await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(signupEmailAddress)
  }

  public async enterPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password.toString())
  }

  public async enterLoginEmailAddress(loginEmailAddress: string) {
    await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(loginEmailAddress)
  }

  public async login(){
    await this.page.getByRole('button', { name: 'Login' }).click()
  }
  
  public async signup (){
    await this.page.getByRole('button', { name: 'Signup' }).click()
  }
}