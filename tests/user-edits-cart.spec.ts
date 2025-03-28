import { expect, test } from "@playwright/test" 
import { HomePage } from '../src/pages/HomePage'
import { ProductDetailsPage } from "../src/pages/ProductDetailsPage"
import { ProductSearchPage } from "../src/pages/ProductSearchPage"
import { CartPage } from "../src/pages/CartPage"
import { clothing } from "../playwright/data/products"


test('user that is not logged in edits cart', async ({ page }) => {
    const homePage = new HomePage(page)
    const productSearchPage = new ProductSearchPage(page)
    const productDetailsPage = new ProductDetailsPage(page)
    const cartPage = new CartPage(page)

    await homePage.go()

    await homePage.products()

    //Search for Blue Top
    await productSearchPage.searchForItem(clothing.BT)
    await productSearchPage.viewProduct()

    await productDetailsPage.correctProductDisplayed(clothing.BT)
    await productDetailsPage.addToCart()
    await productDetailsPage.viewCart()

    //Add Blue Top to cart, remove & verify (check that you can remove only item in cart)
    await cartPage.verifyCartItem(clothing.BT)
    await cartPage.removeCartItem(clothing.BT)
    await cartPage.backToBrowseProducts()

    await productSearchPage.searchForItem(clothing.MT)
    await productSearchPage.viewProduct()

    //Add Mens Top and Blue Top to cart & verify
    await productDetailsPage.correctProductDisplayed(clothing.MT)
    await productDetailsPage.addToCart()
    await productDetailsPage.continueShopping()
    await productDetailsPage.products()

    await productSearchPage.searchForItem(clothing.BT)
    await productSearchPage.viewProduct()

    await productDetailsPage.correctProductDisplayed(clothing.BT)
    await productDetailsPage.addToCart()
    await productDetailsPage.viewCart()

    await cartPage.verifyCartItem(clothing.BT)
    await cartPage.verifyCartItem(clothing.MT)

    //remove Mens Top (Check that you can remove 1 item when multiple are in the cart)
    await cartPage.removeCartItem(clothing.MT)
  
})