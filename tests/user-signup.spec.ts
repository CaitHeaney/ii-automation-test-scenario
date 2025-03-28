import { expect, test } from "@playwright/test" 
import { HomePage } from '../src/pages/HomePage'
import { LoginPage } from '../src/pages/LoginPage'
import { SignupPage } from '../src/pages/SignupPage'
import { AccountCreationPage } from '../src/pages/AccountCreationPage';
import {
    name,
    emailAddress,
    password,
    day,
    month, 
    year,
    firstName,
    lastName,
    address,
    country,
    state,
    city,
    zipCode,
    mobileNumber
} from '../playwright/data/signup'

test('Valid user signup and logout', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)
    const signupPage = new SignupPage(page)
    const accountCreationPage = new AccountCreationPage(page)

    await homePage.go()
    await homePage.signuplogin()
//login & signup page
    await loginPage.newUserHasLoaded()
    await loginPage.newUserFill(name, emailAddress)
//add signup details
    await signupPage.fill(password, day, month, year, firstName, lastName, address, country, state, city, zipCode, mobileNumber)
//confirm account creation
    await accountCreationPage.accountCreationConfirmation()
    await accountCreationPage.continue()

    await homePage.logout()
//Verify signup was successful by logging in 
    await loginPage.loginHasLoaded()
    await loginPage.enterLoginEmailAddress(emailAddress)
    await loginPage.enterPassword(password)
})