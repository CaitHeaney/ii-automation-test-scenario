import { expect, test } from "@playwright/test" 
import { HomePage } from '../src/pages/HomePage'
import { LoginPage } from '../src/pages/LoginPage'
import { ProductDetailsPage } from "../src/pages/ProductDetailsPage"
import { ProductSearchPage } from "../src/pages/ProductSearchPage"
import { CartPage } from "../src/pages/CartPage"
import { CheckoutPage } from "../src/pages/CheckoutPage"
import { PaymentPage } from "../src/pages/PaymentPage"
import { OrderConfirmationPage } from "../src/pages/OrderConfirmation"
import { 
    loginEmailAddress, 
    password } from "../playwright/data/login"
import { clothing } from "../playwright/data/products"
import {
    fullName,
    address,
    country,
    state,
    city,
    zipCode,
    mobileNumber
} from '../playwright/data/signup'
import { 
    cardNumber, 
    cVC, 
    expirationMonth, 
    expirationYear, 
    nameOnCard } from "../playwright/data/payment"

test('user logs in and makes a purchase', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)
    const productSearchPage = new ProductSearchPage(page)
    const productDetailsPage = new ProductDetailsPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    const paymentPage = new PaymentPage(page)
    const orderConfirmationPage = new OrderConfirmationPage(page)

    await homePage.go()
    await homePage.signuplogin()
// login
    await loginPage.loginFill(loginEmailAddress, password)
//search
    await homePage.products()

    await productSearchPage.searchForItem(clothing.BT)
    await productSearchPage.viewProduct()
//view & add to cart
    await productDetailsPage.correctProductDisplayed(clothing.BT)
    await productDetailsPage.productInStock()
    await productDetailsPage.increaseQuantity(3)
    await productDetailsPage.addToCart()
    await productDetailsPage.viewCart()
//Verify item in cart
    await cartPage.verifyCartItem(clothing.BT)
    await cartPage.proceedToCheckout()
//Verify details match signup details 
    await checkoutPage.verifyDeliveryAddressDetails(fullName, address, city, state, zipCode, country, mobileNumber)
    await checkoutPage.itemInOrder(clothing.BT)
    await checkoutPage.placeOrder()
 //Add payment details and purchase   
    await paymentPage.fill(nameOnCard, cardNumber, cVC, expirationMonth, expirationYear)
    await paymentPage.payAndConfirmOrder()
//Verify purchase & download invoice
    await orderConfirmationPage.verifyOrderPlaced()
    await orderConfirmationPage.downloadInvoice()
    await orderConfirmationPage.continue()
    
})