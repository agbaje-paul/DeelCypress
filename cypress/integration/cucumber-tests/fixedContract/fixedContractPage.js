// List of xpath links
const showMenuButton = '(//button[contains(@theme, \'icon\')])[1]'
const fixedRateButton = '//a[@href = \'/create/fixed\']'

// fill general info
const contactNameFeild = '//label[text()= \'Contract name\']//following::input[1]'
const contractorTaxResFeild = ':nth-child(1) > .deel-ui__stack_vertical > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control'
const stateFeild = '//label[text()= \'Choose a state\']//following::input[1]'
const jobTitleFeild = 'input[name = "jobTitle"]'
const seniorityLevFeild = '//label[text()= \'Seniority level\']//following::input[1]'
const textAreaFeild = 'textarea[name = "scope"]'
const calendarIcon = '//i[contains(@class, \'calendar\')]'
const datePicker = '//button[contains(@class,\'tile--active\')]//preceding::button[1]'
const genInfoButton = 'button[type = "submit"]'
const divContainer = '//div[contains(@type, \'regular\')]'
const invoiceSettings = '(//input[contains(@type, \'checkbox\')] )[1]'
const payAheadButton = '(//input[contains(@type, \'checkbox\')] )[2]'
const saveDefButton = '(//input[contains(@type, \'checkbox\')] )[3]'

// this the payment rate page part of the application

const currencyFeild = '//label[text()= \'Currency\']//following::input[1]'
const paymentRate = '//label[text()= \'Payment rate\']//following::input[1]'
const paymentFreqFeild = '//label[text()= \'Payment frequency\']//following::input[1]'
const monthlyFeild = '//div[text()=\'Monthly\']'

// this is for the payment date
const paymentDateFeild = '//label[text()= \'First payment date\']//following::input[1]'



class fixedContractPage {

    static dashboard() {
        cy.url().should('include','app.deel.training')
        cy.get('h1').contains('Good evening')
    }

    static clickCreateContract() {
        cy.url().should('include','app.deel.training')
        cy.xpath(showMenuButton).click()
        cy.get('div').contains('Create A Contract').click()
    }

    static clickFixedContract() {
        cy.get('h1').contains('Contract Type').should('be.visible')
        cy.xpath(fixedRateButton).click()
    }

    static fillGeneralInfo(){
        cy.get('h2').contains('Creating a fixed contract').should('be.visible')
        cy.xpath(contactNameFeild).type('Rick James')
        cy.get(contractorTaxResFeild).type('United States{enter}')
        cy.xpath(stateFeild).type('Colorado{enter}')
        cy.get(jobTitleFeild).type('Aerospace Engineer{enter}')
        cy.get('p').contains('Aerospace Engineer').click()

        cy.xpath(seniorityLevFeild).click({force: true})
        cy.wait(1000)
        cy.get('div').contains('Junior (Individual Contributor Level 1)').click()

        cy.get(textAreaFeild).type('Correct details')

        cy.xpath(calendarIcon).click() // need to come back to this to figure out how to do the date minus one
        cy.xpath(datePicker).click()

        cy.get(genInfoButton).click()

    }

    static fillPaymentRatePage() {
        cy.wait(3000)
        cy.log('before currecny feild click')

        cy.xpath(currencyFeild).click()
        cy.log('is this part woking')
        cy.get('div').contains('GBP - British Pound').click()

        cy.wait(2000)
        cy.xpath(paymentRate).type('1000')
        cy.xpath(invoiceSettings).click({force: true})
        cy.get('h4').contains('Ends on day of the week').click()
        cy.xpath(payAheadButton).click({force: true})
        cy.xpath(saveDefButton).click({force: true})


        cy.xpath(paymentFreqFeild).click()
        //cy.xpath(monthlyFeild).click()
        cy.get('div').contains('Weekly').click() 
        // // come back to do the rest of the things here
        cy.get(genInfoButton).click()
    }

    static fillDefineDatePage() {
        cy.xpath(paymentDateFeild).click()
        cy.get('div').contains('Mar 27th, 2022').click()
        cy.get(genInfoButton).click()
    }

    static fillDefineDatePage() {

        cy.get(genInfoButton).click()
    }

    static fillBenefitsPage() {

        //cy.get(genInfoButton).click()
        cy.get('div').contains(' next').click()
    }

    static compliancePage() {
        cy.get('div').contains('create contract').click()
        
        cy.url().should('include', '/contract')
    }

    static fillReqGenInfo() {
        //Fill in the required details
        cy.xpath(contactNameFeild).type('Rick James')
        cy.get(contractorTaxResFeild).type('United States{enter}')
        cy.xpath(stateFeild).type('Colorado{enter}')
        cy.get(jobTitleFeild).type('Aerospace Engineer{enter}')
        cy.get('p').contains('Aerospace Engineer').click()

        cy.xpath(seniorityLevFeild).click({force: true})
        cy.get('div').contains('Junior (Individual Contributor Level 1)').click()

        cy.get(textAreaFeild).type('Correct details')

        cy.xpath(calendarIcon).click() // need to come back to this to figure out how to do the date minus one
        cy.get('button').contains('17').click()

        //cy.get(genInfoButton).click()
        // Contract name feild
        cy.xpath(contactNameFeild).clear()
        cy.get(genInfoButton).should('be.disabled')
        cy.xpath(contactNameFeild).type('Rick James')

        // For scope of work 

        cy.get(textAreaFeild).clear()
        cy.get(genInfoButton).should('be.disabled')

        
    }

    // check that hte user cannot proceed if they don't feel the required information
    static checkFillReqInfoWorks() {
        cy.get('h2').should('be.visible')
        
        cy.get(genInfoButton).should('be.disabled')
    }

    // Check that the you can submit with unrequired feild
    static fillUnReqGenInfo() {
        //Fill in the required details
        cy.xpath(contactNameFeild).type('Rick James')
        cy.get(contractorTaxResFeild).type('United States{enter}')
        cy.xpath(stateFeild).type('Colorado{enter}')

        cy.xpath(seniorityLevFeild).click({force: true})
        cy.get('div').contains('Junior (Individual Contributor Level 1)').click()

        cy.get(textAreaFeild).type('Correct details')

        cy.xpath(calendarIcon).click() 
        cy.xpath(datePicker).click()

        cy.get(genInfoButton).click()
        
    }

    static checkUnFillReqInfoWorks() {
        cy.get('h2').contains('Creating a fixed contract').should('be.visible')
    }

}


export default fixedContractPage

