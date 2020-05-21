import MakeDonatePage from '/CypressAutomation/cypress/pageobjects/MakeDonatePage'

//Choose sum donation and click "Donate Now"
describe('MakeDonate',      function()
{
    it('ChooseSumDonate', function()
    {
        //create object page
        const mdp = new MakeDonatePage()

        //go to url
        mdp.visit()

        //check our url
        mdp.checkurl()

        //click "Make a Donation" button
        mdp.pressDonationButton()

        //enter donation amount
        mdp.typeSumDonate('100')

        // click "Donate Now" button  
        mdp.pressDonationButton()    /*NOTE: You should comment this line or spec will close. Cause we go to another domen*/

    })
   
})
