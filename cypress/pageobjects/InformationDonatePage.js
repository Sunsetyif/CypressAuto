
/* describe page elements and selectors for page "Information Donate" */
class InformationDonatePage{

    visit()
    {
        cy.visit('https://makingagift.umn.edu/give/cfgift.html?cart=6340|100.00|Jean+K.+Quam+Fellowship+in+Social+Work&cftoken=V1Z0ZnBoRXZUNndpQ3JFbUkyL2xqVW5MTlV6QVpEeVZwMDA0ZHFWd2tNS015dmFsV1pveHg2RC81di92QlFyVGdBR2hZME91U2lRWEhFaVlMT1k5NzlmeEFOeUtCVUozcTFMampDTDJoWW56U3JvSWhPcENUNms2d3ZvcmtCY1hKOUZ1a1JtQ2Q0emU4K0lQd2tjRmFjcWs1WFA5ejlvdEtjR284NlM4R0wzTktMakR1eThhRG5TK1ZoZ0hsOXlyb3VWUHMvcW1jU29Ic3RTb0M0U2tZZUxPWEt3YTQ0RVovMWxRcjlpdGxiejB2YngvWndZSkliUDd1RUpaSThaVmxieXh2VUpBV1BUZmlMZFRHZnpsMThQdUovd0RFcklwZlBQRTZFcHFJdGtMV0RmWGJnS2FOSXdkYUhzUVVzSUxlTnZKNFV5UlNOY25VMmVpM2VDRUZRPT0=')
    }

    inputName(value)
    {
      const field =  cy.get('[id=registrant_name]')
      field.type(value)
      return this
      
    }
    inputEmail(value)
    {
        const field =  cy.get('[id=registrant_email]')
        field.type(value)
        return this
    }
    inputCountry(value)
    {
        const field =  cy.get('[id=address_country]')
        field.type(value)
        return this
    }
    inputAdress(value)
    {
        const field =  cy.get('[id=registrant_address]')
        field.type(value)
        return this
    }
    inputCity(value)
    {
        const field =  cy.get('[id=registrant_city]')
        field.type(value)
        return this
    }
    inputZip(value)
    {
        const field =  cy.get('[id=address_zip]')
        field.type(value)
        return this
    }

    pressGoToPaymentButton()
    {
      const field =  cy.get('[id=gotoPayment]')
      field.click()
      
    }

    }
    export default InformationDonatePage