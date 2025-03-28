import { expect, Page } from '@playwright/test'

export class ProductSearchPage {
  private readonly page: Page
  constructor(page: Page) {
    this.page = page
  }

  public async searchForItem(clothing: string){
    await this.page.getByRole('textbox', { name: 'Search Product' }).fill(clothing)
    await this.page.getByRole('button', { name: '' }).click()
  }

  public async viewProduct(){
    await this.page.getByRole('link', { name: ' View Product' }).click()
  }

  public async changeCategory(categoryType: string, clothingType: string, heading: string){
    await this.page.getByRole('link', { name: categoryType }).click()
    await this.page.getByRole('link', { name: clothingType }).click()
    await this.page.getByRole('heading', { name: heading }).first().waitFor({ state: 'visible' });
     // Get all product descriptions
  const productDescriptions = this.page.locator('.productinfo p');
  const count = await productDescriptions.count();

  for (let i = 0; i < count; i++) {
    const text = await productDescriptions.nth(i).innerText();
    expect(text.toLowerCase()).toContain(clothingType.toLowerCase());
  }
}

  public async changeBrand(brand: string, heading: string){
    await this.page.getByRole('link', { name: brand }).click()
    await expect(this.page.getByRole('heading', { name: heading })).toBeVisible()
  }


}