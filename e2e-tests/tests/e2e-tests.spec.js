const { test, expect, describe, beforeEach, waitForNa } = require('@playwright/test')
require('dotenv').config()

describe('LiftMeApp', () => {
    beforeEach(async ({ page }) => {
        //login 
        await page.goto('http://localhost:5173')
        await page.getByRole('textbox').first().fill('eskolaine@liftmeapp.com')
        await page.getByRole('textbox').last().fill(process.env.PASSWORD)
        await page.getByRole('button', { name: 'SIGN IN' }).click(),
        await page.waitForSelector('text=Esko Laine', { timeout: 20000 });
        await expect(page.getByText('Esko Laine')).toBeVisible()
    })
    
    test('drivers and passengers available', async ({ page }) => {
        await expect(page.getByText('Linda Lorén')).toBeVisible()
        await page.getByRole('button', { name: 'passengers' }).click(),
        await expect(page.getByText('Masa Aaltonen')).toBeVisible()
    })

    test('profile page', async ({ page }) => {
        await page.getByRole('button', { name: 'Account Menu' }).click()
        await expect(page.getByText('My profile')).toBeVisible()
        await page.getByTestId('account-menu-button').click()
        await page.waitForURL('**/profile')
    })
})




    
    


