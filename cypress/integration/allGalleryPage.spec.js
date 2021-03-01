
const data = require("../fixtures/data.json")
describe("All galleris", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')

    })

    it("Search field", () => {
        cy.get('.form-control').click()
        cy.get('.form-control').type("jedna")
        cy.get('search').click()
        
    })



   

})    