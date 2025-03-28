import { expect, Page } from '@playwright/test'

export class AccountCreationPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async accountCreationConfirmation(){
        await this.page.getByText('Account Created!').isVisible()
      } 

    public async continue(){
        await this.page.getByRole('link', { name: 'Continue' }).click()
      } 
}