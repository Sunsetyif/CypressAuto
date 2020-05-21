import InformationDonatePage from '/CypressAutomation/cypress/pageobjects/InformationDonatePage'

//Fill section "Your Inforamtion"
describe('InformationDonate',      function()
{
    it('FillDonateInformation', function()
    {
        //create object page
        const idp = new InformationDonatePage()
        
        //go to url
        idp.visit()

        //enter "Name"
        idp.inputName('Andrew')

        //enter "Email addres"
        idp.inputEmail('andrew@gmail.com')

        //choose "Country"
        idp.inputCountry('Ukraine')

        //enter "Addres"
        idp.inputAdress('Chkalova1')
        
        //enter "City"
        idp.inputCity('Kharkiv')
        
        //enter "Postal code"
        idp.inputZip('64313-4113')

        //press button "PROCEED TO PAYMENT"
        idp.pressGoToPaymentButton()
     
    })
   
})
