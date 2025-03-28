import { expect, Page } from '@playwright/test'

export class CheckoutPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async verifyDeliveryAddressDetails(
        fullName: string,
        address: string,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        mobileNumber: string
      ) {
        const items = this.page.locator('#address_delivery li');
      
        // Check full name
        await expect(items.nth(1)).toHaveText(fullName);
      
        // Check address
        await expect(items.nth(3)).toHaveText(address);
      
        // Check city, state, zipcode
        await expect(items.nth(5)).toHaveText(
          new RegExp(`${city}\\s+${state}\\s*${zipCode.toString()}`)
        );
      
        // Check country
        await expect(items.nth(6)).toHaveText(country);
      
        // Check phone
        await expect(items.nth(7)).toHaveText(mobileNumber.toString());
      }

    public async itemInOrder(clothing: string){
        await this.page.getByRole('row', { name: new RegExp (clothing, 'i') }).isVisible()
      } 
    
    public async placeOrder(){
        await this.page.getByRole('link', { name: 'Place Order' }).click()

    }
          
}