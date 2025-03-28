import { expect, Page } from '@playwright/test'

export class HomePage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        const env = process.env.BASE_URL
        await this.page.goto(env)
        await this.page.waitForTimeout(3000)
        if (await this.page.getByRole('heading', { name: 'This site asks for consent to' }).isVisible()) {
        await this.page.getByRole('button', { name: 'Consent' }).click()
        }
        await this.page.getByRole('link', { name: 'Website for automation' }).isVisible()
    }

    async signuplogin() {
    await expect(this.page.getByRole('link', { name: ' Signup / Login' })).toBeVisible()
    await this.page.getByRole('link', { name: ' Signup / Login' }).click()
    } 

    async products() {
        await expect(this.page.getByRole('link', { name: ' Products' })).toBeVisible()
        await this.page.getByRole('link', { name: ' Products' }).click()
        } 

    async logout(){
        await this.page.getByRole('link', { name: ' Logout' }).click()
    }
}
