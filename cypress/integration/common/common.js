import { defineStep } from "cypress-cucumber-preprocessor/steps";



defineStep('I login', () => {
    cy.fixture('user').then( user => {
        const username = user.email
        const password = user.pwd 

        const URL = 'https://app.deel.training/login'
        const emailId = 'input[name = "email"]'
        const passwordId = 'input[name = "password"]'
        const SUBMIT_BUTTON = 'button[type="submit"]'
        const popUp = '//div[contains(@theme, \'close\')]'
        const cookiesButton = '(//a[text()=\'Allow all cookies\'])[1]'


        cy.visit(URL)
        cy.wait(3000)
        cy.get(emailId).type(username)
        cy.get(passwordId).type(password)
        cy.get(SUBMIT_BUTTON).click()
        cy.wait(6000)
        cy.xpath(popUp).click()
        cy.xpath(cookiesButton).click()
    })
})