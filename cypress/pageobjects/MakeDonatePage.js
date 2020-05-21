
/* describe page elements and selectors for page "Make a donation" */
class MakeDonatePage{

    visit()
    {
        cy.visit('https://crowdfund.umn.edu/?cfpage=project&project_id=32920')
    }

    checkurl()
    {
        cy.url().should('include','https://crowdfund.umn.edu/?cfpage=project&project_id=32920')
    }
    pressDonationButton()
    {
      const field =  cy.get('[id=donation-button]')
      field.click()
      
    }
    typeSumDonate(value)
    {
      const field =  cy.get('[id=ez-pledge-amount]')
      field.clear()
      field.type(value)
      return this
    }
    
    }
    export default MakeDonatePage