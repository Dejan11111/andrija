const data = require("../fixtures/data.json")
describe("Registration test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })

        it("Registration click", () => {
            cy.get('a[href="/register"]').click()
        })

    })  
    it("Registration Faild,invalid format email", () => {
         
        cy.get("#first-name").type(data.login.firstName())
        cy.get("#last-name").type(data.login.lastName())
        cy.get("#email").type(data.emailWithout())
        cy.get("#password").type('detelinara1991')
        cy.get("#password-confirmation").type('detelinara1991')
        cy.get('input[type="checkbox"]').check()
        cy.get('button[type="submit"]').click()
        cy.get("#first-name").clear()
        cy.get("#last-name").clear()
        cy.get("#email").clear()
        cy.get("#password").clear()
        cy.get("#password-confirmation").clear()
        
        
        
    })