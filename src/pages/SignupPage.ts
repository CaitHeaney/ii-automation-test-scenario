import { expect, Page } from '@playwright/test'

export class SignupPage {
  private readonly page: Page
  constructor(page: Page) {
    this.page = page
  }

  public async fill(password, day, month, year, firstName, lastName, address, country, state, city, zipCode, mobileNumber) {
    await this.selectTitle()
    await this.enterPassword(password)
    await this.selectDOB(day, month, year)
    await this.enterFirstName(firstName)
    await this.enterLastName(lastName)
    await this.enterAddress(address)
    await this.selectCountry(country)
    await this.enterState(state) 
    await this.enterCity(city)
    await this.enterZipCode(zipCode)
    await this.enterMobileNumber(mobileNumber)
    await this.clickCreateAccountButton()
  }

  public async selectTitle(){
    await this.page.getByRole('radio', { name: 'Mrs.' }).click()
  }

  public async enterPassword(password: string){
    await this.page.getByRole('textbox', { name: 'Password *' }).fill(password)
  }

  public async selectDOB(day: number, month: string, year: number){
    await this.page.locator('#days').selectOption(day.toString())
    await this.page.locator('#months').selectOption(month)
    await this.page.locator('#years').selectOption(year.toString())
  }

  public async enterFirstName(firstName: string){
    await this.page.getByRole('textbox', { name: 'First name *' }).fill(firstName)
  }

  public async enterLastName(lastName: string){
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill(lastName)
  }

  public async enterAddress(address: string){
    await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(address)
  } 

  public async selectCountry(country: string){
    await this.page.locator('#country').selectOption(country)
  }

  public async enterState(state: string){
    await this.page.getByRole('textbox', { name: 'State *' }).fill(state)
  }

  public async enterCity(city: string){
    await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill(city)
  }

  public async enterZipCode(zipCode: number){
    await this.page.locator('#zipcode').fill(zipCode.toString())
  } 

  public async enterMobileNumber(mobileNumber: number){
    await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill(mobileNumber.toString())
  } 

  public async clickCreateAccountButton(){
    await this.page.getByRole('button', { name: 'Create Account' }).click()
  }
  
}
