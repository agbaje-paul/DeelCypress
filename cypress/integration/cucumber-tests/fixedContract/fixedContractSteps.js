import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import fixedContractPage from './fixedContractPage'

When('I click on create a contract', () => {
    fixedContractPage.clickCreateContract()
})

When('I click on fixed contract', () => {
    fixedContractPage.clickFixedContract()
})

When('I fill the general information on the create a contract page and continue', () => {
    fixedContractPage.fillGeneralInfo()
})

When('I fill the payment rate page and continue', () => {
    fixedContractPage.fillPaymentRatePage()
})

When('I fill the define dates page and continue', () => {
    fixedContractPage.fillDefineDatePage()
})

When('I fill the benefits and extras page and continue', () => {
    fixedContractPage.fillBenefitsPage()
})

Then('I am redirected to the compliance page', () => {
    fixedContractPage.compliancePage()
})

When('I fill out the required feilds', () => {
    fixedContractPage.fillReqGenInfo()
})

Then ('The buttion should be enabled', () => {
    fixedContractPage.checkFillReqInfoWorks()
})

When('I fill out the required feilds and continue on the general info page', () => {
    fixedContractPage.fillUnReqGenInfo()
})

Then ('The payment details page should be visible', () => {
    fixedContractPage.checkUnFillReqInfoWorks()
})

Then ('I should see dashboard', () => {
    fixedContractPage.dashboard()
})