import { expect, Page } from '@playwright/test'

export class OrderConfirmationPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async verifyOrderPlaced(){
        await expect(this.page.getByText('Order Placed!')).toBeVisible()
      } 

    public async downloadInvoice(){
        await this.page.getByRole('link', { name: 'Download Invoice' }).click()
      } 
    
    public async continue(){
        await this.page.getByRole('link', { name: 'Continue' }).click()
    }
}