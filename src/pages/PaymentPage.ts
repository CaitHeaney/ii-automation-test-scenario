import { expect, Page } from '@playwright/test'

export class PaymentPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }


    public async fill(nameOnCard, cardNumber, cVC, expirationMonth, expirationYear){
        await this.enterNameOnCard(nameOnCard)
        await this.enterCardNumber(cardNumber)
        await this.enterCVC(cVC)
        await this.enterExpirationMonth(expirationMonth)
        await this.enterExpirationYear(expirationYear)
    } 

    public async enterNameOnCard(nameOnCard: string){
        await this.page.locator('input[name="name_on_card"]').fill(nameOnCard)
    } 

    public async enterCardNumber(cardNumber: string){
        await this.page.locator('input[name="card_number"]').fill(cardNumber.toString())
    }

    public async enterCVC(cVC: string){
        await this.page.getByRole('textbox', { name: 'ex.' }).fill(cVC.toString())
    }

    public async enterExpirationMonth(expirationMonth: string){
        await this.page.getByRole('textbox', { name: 'MM' }).fill(expirationMonth.toString())
    }

    public async enterExpirationYear(expirationYear: string){
        await this.page.getByRole('textbox', { name: 'YYYY' }).fill(expirationYear.toString())
    }

    public async payAndConfirmOrder(){
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click()
    }
}