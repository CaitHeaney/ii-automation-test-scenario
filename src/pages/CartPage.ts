import { expect, Page } from '@playwright/test'

export class CartPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async verifyCartItem(clothing: string){
        await this.page.getByRole('row', { name: new RegExp (clothing, 'i') }).isVisible()
      } 

    public async removeCartItem(clothing: string) {
        // Step 1: Locate the row based on the product name inside the <h4><a>
        const row = this.page.locator('tr').filter({
          has: this.page.locator('h4 a', { hasText: clothing })
        });
        await row.isVisible();
          
        // Step 2: Within that row, find and click the delete button
        const deleteButton = row.locator('a.cart_quantity_delete');
        await deleteButton.click();

        //Step 3: Verify item is no longer in the cart 
        await expect(this.page.getByRole('row', { name: new RegExp (clothing, 'i') })).toBeHidden()
      } 

    public async proceedToCheckout(){
        await this.page.getByText('Proceed To Checkout').click()
    }

    public async backToBrowseProducts(){
        await this.page.getByRole('link', { name: 'here' }).click()
    }
}