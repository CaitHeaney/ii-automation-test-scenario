import { expect, Page } from '@playwright/test'

export class ProductDetailsPage {
  private readonly page: Page
  constructor(page: Page) {
    this.page = page
  }

  public async correctProductDisplayed(clothing: string){
    await expect(this.page.getByRole('heading', { name: clothing })).toBeVisible
  }

  public async productInStock(){
    await expect(this.page.getByText('Availability: In Stock')).toBeVisible
  }

  public async increaseQuantity(amount: number){
    const quantityInput = await this.page.locator('#quantity')
    await quantityInput.click()
    await quantityInput.fill(amount.toString())
  }

  public async addToCart(){
    await this.page.getByRole('button', { name: ' Add to cart' }).click()
  }

  public async viewCart(){
    await this.page.getByRole('link', { name: 'View Cart' }).click()
  }

  public async continueShopping(){
    await this.page.getByRole('button', { name: 'Continue Shopping' }).click()
  }

  public async products(){
    await this.page.getByRole('link', { name: ' Products' }).click()
  }
}