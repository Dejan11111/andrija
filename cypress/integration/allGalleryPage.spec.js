
const data = require("../fixtures/data.json")
describe("All galleris", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')

    })

    it("Search field", () => {
        cy.get('.form-control').click()
        cy.get('.form-control').type("kuce")
        cy.get('.input-group-append > .btn').click()

    })
    

    it("Filter kuce", () => {
        
      cy.get('.grid > :nth-child(1)')
        .should('contain', 'kuce')

    

        //cy.get('.grid > :nth-child(1)').click()
         //.should('contain', 'kuce')
         //.and('have.class','alert alert-danger')
         //.and('have.css','background-color','rgb(248, 215, 218)')
         //.and('be.visible')
    })



   

})    