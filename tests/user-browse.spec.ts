import { expect, test } from "@playwright/test" 
import { HomePage } from '../src/pages/HomePage'
import { ProductSearchPage } from "../src/pages/ProductSearchPage"
import { brands, categoryTypes, clothing, clothingType, heading } from "../playwright/data/products"


test('user that is not logged in browses items', async ({ page }) => {
    const homePage = new HomePage(page)
    const productSearchPage = new ProductSearchPage(page)


    await homePage.go()

    await homePage.products()
//Use Search function
    await productSearchPage.searchForItem(clothing.BT)
//Selecting Category
    await productSearchPage.changeCategory(categoryTypes.Women, clothingType.Dress, heading.Dress)
//selecting and changing branding
    await productSearchPage.changeBrand(brands.Biba, heading.Biba)
    await productSearchPage.changeBrand(brands.Polo, heading.Polo)
  
})